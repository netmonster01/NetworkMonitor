var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import decode from 'jwt-decode';
export var ANONYMOUS_USER = {
    password: null,
    email: null,
    token: undefined,
    id: null,
    roles: [],
    avatarImage: null,
    firstName: null,
    lastName: null
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.subject = new BehaviorSubject(ANONYMOUS_USER);
        this.storagekey = 'loggedInUser';
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = {
            headers: this.headers
        };
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.map(function (user) { return !!user.id; });
        this.isLoggedOut$ = this.isLoggedIn$.map(function (isLoggedIn) { return !isLoggedIn; });
    }
    // attempt to login.
    AuthService.prototype.login = function (email, password) {
        // set options
        return this.http.post('/api/Account/Login', { email: email, password: password }, this.options).shareReplay().do(function (user) { return console.log(user); });
    };
    /* call logout */
    AuthService.prototype.logout = function () {
        // remove the current user
        localStorage.removeItem(this.storagekey);
        // call logout service.
        this.http.get('/api/Account/Logout');
    };
    AuthService.prototype.loginAsync = function (email, password) {
        var _this = this;
        var options = {
            headers: this.headers
        };
        this.http.post('/api/Account/Login', { email: email, password: password }, options).subscribe(function (user) { _this.broardcastUpdate(user); });
    };
    AuthService.prototype.broardcastUpdate = function (user) {
        this.subject.next(user);
        localStorage.setItem(this.storagekey, JSON.stringify(user));
    };
    AuthService.prototype.isUserLoggedIn = function () {
        var user = new User();
        user = JSON.parse(localStorage.getItem(this.storagekey));
        var a = user != null;
        return user != null;
    };
    AuthService.prototype.loggedInUser = function () {
        var user = new User();
        user = JSON.parse(localStorage.getItem(this.storagekey));
        return user;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.get('/api/Account/isAuthenticated', this.options);
    };
    AuthService.prototype.register = function (user) {
        var options = {
            headers: this.headers
        };
        return this.http.post('/api/Account/Login', { user: user }, options).shareReplay().do(function (u) { return console.log(u); });
    };
    AuthService.prototype.updateProfile = function (user) {
        var options = {
            headers: this.headers
        };
        return this.http.put('/api/Account/UpdateProfile', user, options); //.shareReplay().do(u => console.log(u));
    };
    AuthService.prototype.decode = function () {
        var user = new User();
        user = JSON.parse(localStorage.getItem(this.storagekey));
        return decode(user.token);
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map