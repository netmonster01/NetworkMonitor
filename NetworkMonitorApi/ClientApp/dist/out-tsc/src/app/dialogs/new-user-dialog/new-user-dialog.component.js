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
import { AuthService, ANONYMOUS_USER } from '../../services';
var NewUserDialogComponent = /** @class */ (function () {
    function NewUserDialogComponent(auth, fb, dialogRef, data) {
        this.auth = auth;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.user = ANONYMOUS_USER;
        // this.description = data.description;
    }
    NewUserDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required]
        });
    };
    NewUserDialogComponent.prototype.save = function () {
        this.user.email = this.form.controls.email.value;
        this.user.firstName = this.form.controls.firstName.value;
        this.user.lastName = this.form.controls.lastName.value;
        this.dialogRef.close(this.user);
    };
    NewUserDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewUserDialogComponent = __decorate([
        Component({
            selector: 'app-new-user-dialog',
            templateUrl: './new-user-dialog.component.html',
            styleUrls: ['./new-user-dialog.component.css']
        }),
        __param(3, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [AuthService,
            FormBuilder,
            MatDialogRef, Object])
    ], NewUserDialogComponent);
    return NewUserDialogComponent;
}());
export { NewUserDialogComponent };
//# sourceMappingURL=new-user-dialog.component.js.map