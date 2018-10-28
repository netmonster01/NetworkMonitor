var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StatsService } from '../services';
var StatsComponent = /** @class */ (function () {
    function StatsComponent(_stat) {
        this._stat = _stat;
        this.stats = [];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    StatsComponent.prototype.activate = function () {
        var _this = this;
        // call service and pass in the username and password.
        // retuns a token. gets
        this._stat.getStats().subscribe(function (data) { return _this.stats = data; });
    };
    StatsComponent = __decorate([
        Component({
            selector: 'app-stats',
            templateUrl: './stats.component.html',
            styleUrls: ['./stats.component.css']
        }),
        __metadata("design:paramtypes", [StatsService])
    ], StatsComponent);
    return StatsComponent;
}());
export { StatsComponent };
//# sourceMappingURL=stats.component.js.map