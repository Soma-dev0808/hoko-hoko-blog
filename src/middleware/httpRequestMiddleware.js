/* eslint-disable no-param-reassign */
import qs from 'qs';
import axios from 'axios';
import PathManagedStore from '../utils/PathManagedStore';

const { CancelToken } = axios;

// axiosインスタンス化
const createAxios = () => axios.create({
    // HTTP通信時の共通デフォルト設定はここでする
    responseType: 'json',
    paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    },
});

// axiosのインスタンスを取得
const getAxiosInstance = (() => {
    let instance = null;

    // インスタンスが既に生成された場合はそのインスタンスを返す
    return () => {
        if (instance) {
            return instance;
        }

        instance = createAxios();

        return instance;
    };
})();

// キャンセルトークン
// グローバルに持てばどこからでもリクエストキャンセル可能
const getCancelTokenStore = (() => {
    let store;

    return () => {
        // インスタンスが既に生成された場合はそのインスタンスを返す
        if (store) {
            return store;
        }

        store = new PathManagedStore();

        return store;
    };
})();

/**
 * cancelRequest
 * Fetch中のリクエストをキャンセルする
 */
export const cancelRequest = (requestId) => {
    if (requestId) {
        getCancelTokenStore().getAll(requestId).forEach((source) => {
            source.cancel();
        });
    } else {
        getCancelTokenStore().root.forEach((entry, key) => {
            if (entry) {
                getCancelTokenStore().getAll(key).forEach((source) => {
                    source.cancel();
                });
            }
        });
    }
};

/**
 * fetch
 * HTTPリクエストを実行する
 * Promiseを返す
 */
const fetch = (action, next) => {
    // x-www-form-urlencodedの場合
    // リクエストデータの形式を変換
    if (action.payload.request?.headers['Content-type'] === 'application/x-www-form-urlencoded') {
        if (Object.keys(action.payload.request).includes('qsOptions')) {
            action.payload.request.data = qs.stringify(
                action.payload.request.data,
                action.payload.request.qsOptions,
            );
        } else {
            action.payload.request.data = qs.stringify(action.payload.request.data);
        }
    }

    // 通信エラー時自動アラート表示
    if (!action.meta || action.meta.errorAlert !== false) {
        action = { ...action, alert: true };
    }

    const store = getCancelTokenStore();
    // このリクエストのキャンセルトークンを格納するパスを決定
    const storePath = [action.type, store.generateRandomId()];
    // キャンセルトークン生成
    const cancelTokenSource = CancelToken.source();
    action.payload.request.cancelToken = cancelTokenSource.token;

    if (action.meta?.cancelPreviousRequest) {
        // 実行中のaction.typeのキャンセル
        store.getAll(action.type).forEach((source) => {
            source.cancel();
        });
    }

    // キャンセルトークン設定
    store.setIn(storePath, cancelTokenSource);

    // HTTPリクエストして結果のアクションを発行する
    // 自身が返すのはPromise
    return getAxiosInstance().request(action.payload.request)
        .then((response) => {
            // キャンセルトークン削除
            store.deleteIn(storePath);
            // リクエスト成功時のアクションを発行
            const nextAction = {
                type: `${action.type}_SUCCESS`,
                payload: response,
                meta: {
                    previousAction: action,
                },
            };
            next(nextAction);
            // // 最新のJWTでユーザー情報を更新
            // next({type: USER_REFRESH_USER_INFO});
            return nextAction;
        }).catch((error) => {
            if (!process.env.isProd) {
                console.log('HTTP Request Error Occured: ', action, error.response);
            }

            // キャンセルトークン削除
            store.deleteIn(storePath);

            // APIコールキャンセル時はアラート無し
            const alert = cancelTokenSource.token.reason ? false : action.alert;

            // リクエスト失敗時のアクションを発行
            const nextAction = {
                type: `${action.type}_FAILURE`,
                error,
                alert,
                meta: {
                    previousAction: action,
                },
            };
            next(nextAction);
            return Promise.reject(nextAction);
        });
};

/**
 * httpRequestMiddleware
 * HTTPリクエスト時の共通処理のミドルウェア
 */
const httpRequestMiddleware = () => (next) => async (action) => {
    // HTTPリクエストのアクションでない場合は処理をスルーする
    if (!action.payload?.request) {
        return next(action);
    }

    // 自身のアクションを発行
    // HTTPリクエスト開始を通知してローディングなどを表示するため
    next(action);

    /* eslint-disable no-fallthrough */
    switch (action.payload.request.method.toUpperCase()) {
        case 'POST':
        case 'PUT':
        case 'DELETE':
        case 'PATCH':
            // headerにセット
            action.payload.request.headers = {
                ...action.payload.request.headers,
                'X-From': window.location.href,
            };
        default:
            return fetch(action, next);
    }
    /* eslint-enable no-fallthrough */
};

export default httpRequestMiddleware;
/* eslint-enable no-param-reassign */
