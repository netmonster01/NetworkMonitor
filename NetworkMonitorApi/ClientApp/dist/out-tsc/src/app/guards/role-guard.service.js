var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var RoleGuard = /** @class */ (function () {
    function RoleGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var user = this._authService.decode();
        var rolesToCheck = next.data.role.split(',');
        var isInRole = false;
        if (Array.isArray(user.Role)) {
            var hasRole = user.Role.filter(function (val) {
                return rolesToCheck.indexOf(val) != -1;
            });
            if (hasRole.length > 0) {
                return true;
            }
        }
        else {
            isInRole = rolesToCheck.includes(user.Role);
            if (isInRole) {
                return true;
            }
        }
        // navigate to not found page
        this._router.navigate(['/403']);
        return false;
    };
    RoleGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AuthService, Router])
    ], RoleGuard);
    return RoleGuard;
}());
export { RoleGuard };
//# sourceMappingURL=role-guard.service.js.map