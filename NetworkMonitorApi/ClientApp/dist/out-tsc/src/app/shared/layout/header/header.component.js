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
import { UserService, AuthService, ANONYMOUS_USER, LoggerService } from '../../../services';
import { Router, ActivatedRoute } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService, auth, router, route, loggerService) {
        this._userService = _userService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loggerService = loggerService;
        this.isAuthenticated = false;
        this.user = ANONYMOUS_USER;
        this.isLoggedIn = false;
        this.isLoggedOut = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isAuthenticated().subscribe(function (data) {
            _this.isAuthenticated = data;
            _this.activate();
        });
    };
    HeaderComponent.prototype.activate = function () {
        var _this = this;
        if (!this.isAuthenticated) {
            this.auth.logout();
        }
        // check if user is logged in.
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processData(data); });
        this.auth.isLoggedIn$.subscribe(function (isLoggedIn) { return _this.isLoggedIn === isLoggedIn; });
        this.auth.isLoggedOut$.subscribe(function (isLoggedOut) { return _this.isLoggedOut === isLoggedOut; });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            this.loggerService.getErrorLogCount().subscribe(function (errorCount) { return _this.processErrorCount(errorCount); });
        }
        else {
        }
    };
    HeaderComponent.prototype.processErrorCount = function (errorCount) {
        this.errorCount = errorCount;
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigateByUrl('login');
    };
    HeaderComponent.prototype.processData = function (data) {
        this.user = data;
        if (this.user.avatarImage) {
            this.user.avatarBase64 = this.user.avatarImageType + this.user.avatarImage;
        }
        else {
            this.user.avatarBase64 = '/assets/user.png';
        }
        console.log(data);
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [UserService, AuthService, Router, ActivatedRoute, LoggerService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map