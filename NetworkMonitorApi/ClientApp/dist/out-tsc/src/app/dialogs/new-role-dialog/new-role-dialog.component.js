var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserService } from '../../services';
var NewRoleDialogComponent = /** @class */ (function () {
    function NewRoleDialogComponent(auth, userService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.fb = fb;
        this.dialogRef = dialogRef;
    }
    NewRoleDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            roleName: ['', Validators.required]
        });
    };
    NewRoleDialogComponent.prototype.save = function () {
        this.newRole.name = this.form.controls.roleName.value;
        // Save to db.
        this.dialogRef.close(this.newRole);
    };
    NewRoleDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewRoleDialogComponent = __decorate([
        Component({
            selector: 'app-new-role-dialog',
            templateUrl: './new-role-dialog.component.html',
            styleUrls: ['./new-role-dialog.component.css']
        }),
        __param(4, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [AuthService,
            UserService,
            FormBuilder,
            MatDialogRef, Object])
    ], NewRoleDialogComponent);
    return NewRoleDialogComponent;
}());
export { NewRoleDialogComponent };
//# sourceMappingURL=new-role-dialog.component.js.map