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
import { UserService } from '../../services';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewUserDialogComponent } from '../../dialogs';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(_usersService, dialog) {
        this._usersService = _usersService;
        this.dialog = dialog;
        this.Users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._usersService.getUsers().subscribe(function (data) { return _this.popData(data); });
    };
    UsersComponent.prototype.popData = function (users) {
        console.log(users);
        this.Users = users;
        for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.avatarBase64 = entry.avatarImageType + entry.avatarImage;
        }
    };
    UsersComponent.prototype.openDialog = function () {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false
        };
        this.dialog.open(NewUserDialogComponent, dialogConfig);
        var dialogRef = this.dialog.open(NewUserDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    UsersComponent = __decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        }),
        __metadata("design:paramtypes", [UserService, MatDialog])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map