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
import { AuthService, ANONYMOUS_USER, UserService, BlogService } from '../../services';
import { Post } from '../../models';
var NewBlogDialogComponent = /** @class */ (function () {
    function NewBlogDialogComponent(auth, userService, blogService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.blogService = blogService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.user = ANONYMOUS_USER;
        this.isLoggedIn = false;
        this.preview = false;
    }
    NewBlogDialogComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.auth.isUserLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        this.form = this.fb.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    };
    NewBlogDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewBlogDialogComponent.prototype.closeWithState = function (state) {
        this.dialogRef.close();
    };
    NewBlogDialogComponent.prototype.save = function () {
        var _this = this;
        this.newPost = new Post();
        this.newPost.content = this.form.controls.content.value;
        this.newPost.title = this.form.controls.title.value;
        this.newPost.userId = this.user.id;
        //this.newPost.author = this.user.firstName + this.user.lastName;
        this.blogService.createPost(this.newPost).subscribe(function (didCreate) { return _this.processNewPost(didCreate); });
    };
    NewBlogDialogComponent.prototype.processNewPost = function (didCreate) {
        this.closeWithState(didCreate);
    };
    NewBlogDialogComponent.prototype.showPreview = function (event) {
        this.preview = event.currentTarget.checked;
        this.previewContent = this.form.controls.content.value;
        console.log(event.currentTarget.checked);
        event.stopPropagation();
        return false;
    };
    NewBlogDialogComponent.prototype.updatePreview = function () {
        this.previewContent = this.form.controls.content.value;
    };
    NewBlogDialogComponent = __decorate([
        Component({
            selector: 'app-new-blog-dialog',
            templateUrl: './new-blog-dialog.component.html',
            styleUrls: ['./new-blog-dialog.component.css']
        }),
        __param(5, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [AuthService,
            UserService,
            BlogService,
            FormBuilder,
            MatDialogRef, Object])
    ], NewBlogDialogComponent);
    return NewBlogDialogComponent;
}());
export { NewBlogDialogComponent };
//# sourceMappingURL=new-blog-dialog.component.js.map