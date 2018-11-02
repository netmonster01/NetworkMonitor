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
import { UserService } from '../../services/user.service';
import { NewRoleDialogComponent } from 'src/app/dialogs';
import { MatDialogConfig, MatDialog } from '@angular/material';
var RolesComponent = /** @class */ (function () {
    function RolesComponent(_usersService, dialog) {
        this._usersService = _usersService;
        this.dialog = dialog;
        this.Roles = [];
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RolesComponent.prototype.getRoles = function () {
        var _this = this;
        this._usersService.getRoles().subscribe(function (data) { return _this.popData(data); });
    };
    RolesComponent.prototype.popData = function (roles) {
        console.log(roles);
        this.Roles = roles;
    };
    RolesComponent.prototype.openDialog = function () {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(NewRoleDialogComponent, { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    RolesComponent = __decorate([
        Component({
            selector: 'app-roles',
            templateUrl: './roles.component.html',
            styleUrls: ['./roles.component.css']
        }),
        __metadata("design:paramtypes", [UserService, MatDialog])
    ], RolesComponent);
    return RolesComponent;
}());
export { RolesComponent };
//# sourceMappingURL=roles.component.js.map