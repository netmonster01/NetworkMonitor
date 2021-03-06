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
var EditPostDialogComponent = /** @class */ (function () {
    function EditPostDialogComponent(auth, userService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.post = data;
    }
    EditPostDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            title: [this.post.title, Validators.required],
            content: [this.post.content, Validators.required]
        });
    };
    EditPostDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditPostDialogComponent = __decorate([
        Component({
            selector: 'app-edit-post-dialog',
            templateUrl: './edit-post-dialog.component.html',
            styleUrls: ['./edit-post-dialog.component.css']
        }),
        __param(4, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [AuthService,
            UserService,
            FormBuilder,
            MatDialogRef, Object])
    ], EditPostDialogComponent);
    return EditPostDialogComponent;
}());
export { EditPostDialogComponent };
//# sourceMappingURL=edit-post-dialog.component.js.map