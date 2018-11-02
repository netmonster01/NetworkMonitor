var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ApplicationError = /** @class */ (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(message) {
        var _this = _super.call(this, message) || this;
        _this.httpStatus = 404;
        _this.handled = false;
        _this.name = ApplicationError.name;
        Object.setPrototypeOf(_this, ApplicationError.prototype);
        return _this;
    }
    return ApplicationError;
}(Error));
export { ApplicationError };
//# sourceMappingURL=applicationError.js.map