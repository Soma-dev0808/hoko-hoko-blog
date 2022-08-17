export default class AccessLogCreator {
    constructor(setting) {
        const { logLocation } = setting;
        this.logLocation = logLocation;
    }

    postLog(location) {
        const { pathname, search } = location;
        console.log(pathname, search);
        // ここでファイルを保存する
    }
}
