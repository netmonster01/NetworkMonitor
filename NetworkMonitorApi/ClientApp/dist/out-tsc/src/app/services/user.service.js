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
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.options = {
            headers: this.httpHeaders
        };
        this.user = {
            email: null,
            id: null,
            password: null,
            roles: [],
            token: undefined,
            avatarImage: null
        };
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    UserService.prototype.getUsers = function () {
        return this._http.get('/api/Account/Users')
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function () {
        return this._http.get('/api/Account/User')
            .catch(this.handleError);
    };
    UserService.prototype.getRoles = function () {
        return this._http.get('/api/Role/Roles')
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
    };
    UserService.prototype.addUserToRole = function (userName, role) {
    };
    UserService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map