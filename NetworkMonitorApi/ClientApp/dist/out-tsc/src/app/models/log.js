var Log = /** @class */ (function () {
    function Log(userId, logType, source, message, dateCreated) {
        if (!(this instanceof Log)) {
            return new Log(userId, logType, source, message, dateCreated);
        }
        this.userId = userId;
        this.logType = logType;
        this.message = message;
        this.source = source;
    }
    return Log;
}());
export { Log };
//# sourceMappingURL=log.js.map