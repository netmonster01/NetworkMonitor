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
import { BehaviorSubject } from 'rxjs';
export var ANONYMOUS_USER = {
    password: null,
    email: null,
    token: undefined,
    id: null,
    roles: []
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.subject = new BehaviorSubject(ANONYMOUS_USER);
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.map(function (user) { return !!user.id; });
        this.isLoggedOut$ = this.isLoggedIn$.map(function (isLoggedIn) { return !isLoggedIn; });
    }
    // attempt to login.
    AuthService.prototype.login = function (email, password) {
        url: '/api/Account/Login';
        var httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = {
            headers: httpHeaders
        };
        return this.http.post('/api/Account/Login', { email: email, password: password }, options).shareReplay().do(function (user) { return console.log(user); });
    };
    AuthService.prototype.register = function (user) {
        url: '/api/Account/Register';
        var httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = {
            headers: httpHeaders
        };
        return this.http.post('/api/Account/Login', { user: user }, options).shareReplay().do(function (user) { return console.log(user); });
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