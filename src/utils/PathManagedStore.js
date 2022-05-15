/* eslint-disable max-classes-per-file */
import Immutable from 'immutable';

const ENDPOINT_KEY = '__VALUE__';

/**
 * Map
 */
class MappableNode extends Immutable.Map {
    constructor(map) {
        super({ [ENDPOINT_KEY]: null, ...map });
    }
}

export default class PathManagedStore {
    constructor() {
        this.root = new MappableNode();
    }

    /**
     * generateRandomId
     * ランダムなIDを生成する
     */
    generateRandomId() {
        const date = new Date().getTime().toString(36);
        const random = Math.random().toString(36).slice(-8);
        return `${date}_${random}`;
    }

    /**
     * get
     * keyに存在するノードの値を取得する
     */
    get(key) {
        return this.getIn([key]);
    }

    /**
     * getIn
     * pathに存在するノードの値を取得する
     */
    getIn(path) {
        return this.root.getIn(path.concat(ENDPOINT_KEY));
    }

    /**
     * getAll
     * keyに存在するノード配下の値一覧を取得する
     */
    getAll(key) {
        return this.getAllIn([key]);
    }

    /**
     * getAllIn
     * pathに存在するノード配下の値一覧を取得する
     */
    getAllIn(path) {
        const node = this.root.getIn(path);
        return this.getValues(node);
    }

    /**
     * getValues
     * node配下の値一覧を取得する
     * node自身を含め、子ノードの値を再起的に取得する
     */
    getValues(node) {
        let values = [];
        if (node) {
            node.keySeq().toArray().forEach((key) => {
                if (key === ENDPOINT_KEY) {
                    const value = node.get(key);
                    if (value) {
                        values.push(value);
                    }
                } else {
                    const child = node.get(key);
                    // 子ノードの値も追加
                    values = values.concat(this.getValues(child));
                }
            });
        }
        return values;
    }

    /**
     * set
     * keyのノードに値を設定する
     */
    set(key, value) {
        return this.setIn([key], value);
    }

    /**
     * set
     * pathのノードに値を設定する
     */
    setIn(path, value) {
        const leafNode = new MappableNode({
            [ENDPOINT_KEY]: value,
        });
        // valueを保持する末端ノードまでの一本道しかないmapを作成する
        const tree = path.reduceRight((prev, key) => new MappableNode({
            [key]: prev,
        }), leafNode);

        this.root = this.root.mergeDeep(tree);
    }

    /**
     * delete
     * keyのノードを削除する
     */
    delete(key) {
        return this.deleteIn(key);
    }

    /**
     * deleteIn
     * pathのノードを削除する
     */
    deleteIn(path) {
        this.root = this.root.deleteIn(path);
        this.truncateEmptyNode(path);
    }

    /**
     * truncateEmptyNode
     * pathのノード配下に値が無ければ削除する
     * 削除したら親もチェックする
     */
    truncateEmptyNode(path) {
        for (let searchPath = Array.from(path); searchPath.lengthl; searchPath.pop()) {
            if (this.getAllIn(searchPath).length) {
                break;
            }
            // this.deleteInだと無限ループなので注意
            this.root = this.root.deleteIn(searchPath);
        }
    }
}
/* eslint-enable max-classes-per-file */
