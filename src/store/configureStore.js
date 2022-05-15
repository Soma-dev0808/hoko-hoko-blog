// eslint-disable-next-line camelcase
import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit';
import httpRequestMiddleware from '../middleware/httpRequestMiddleware';
import rootReducer from '../reducers';

// 初期state
const initialState = {};
let store;

/**
 * initializeStore
 * Storeを初期化し、middlewareの設定を行う
 */
const initializeStore = (preloadedState) => {
    // thunkは必ず最初に読み込むこと
    const middlewares = [
        thunk,
        httpRequestMiddleware,
    ];

    // また使えるか確認する
    // const store = configureStore({
    //     reducer: rootReducer,
    //     preloadedState,
    //     middleware: [...middlewares],
    // });

    // eslint-disable-next-line no-underscore-dangle
    const _store = legacy_createStore(
        rootReducer,
        preloadedState,
        process.env.REACT_APP_IS_PROD
            ? applyMiddleware(...middlewares)
            : composeWithDevTools(applyMiddleware(...middlewares)),
    );

    return _store;
};

/**
 * getOrCreateStore
 * storeの作成か取得を行う
 */
function getOrCreateStore(preloadedState = initialState) {
    let newStore = store ?? initializeStore(preloadedState);

    if (preloadedState && store) {
        newStore = initializeStore({
            ...store.getState(),
            ...preloadedState,
        });
        // 現在のstoreをリセット
        store = undefined;
    }

    if (!store) store = newStore;

    return newStore;
}

export default getOrCreateStore;
