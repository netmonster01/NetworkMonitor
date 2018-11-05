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
import { DashboardService } from '../services';
import { Dashboard } from '../models';
//import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dash) {
        this.dash = dash;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.activate();
        this.dashboard = new Dashboard();
        //this.post = '<div highlight><b>hello world</b><br><pre data-lang=\'HTML\'><code >function cool(x) {return x + 1;}</code></pre><br><pre><code highlight> public class hot(string degrees) {} </code></pre></div>';
    };
    DashboardComponent.prototype.activate = function () {
        var _this = this;
        this.dash.getDashboard().subscribe(function (dashboard) { return _this.processData(dashboard); }); //blog.getLatestPost().subscribe((post: Post) => this.processData(post));
    };
    DashboardComponent.prototype.processData = function (dashboardCounts) {
        this.dashboard = dashboardCounts;
        console.log(dashboardCounts);
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map