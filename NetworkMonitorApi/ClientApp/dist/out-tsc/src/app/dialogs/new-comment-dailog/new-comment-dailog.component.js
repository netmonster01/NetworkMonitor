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
import { Comment } from '../../models';
import { AuthService, BlogService } from '../../services';
var NewCommentDailogComponent = /** @class */ (function () {
    function NewCommentDailogComponent(auth, blog, fb, dialogRef, data) {
        this.auth = auth;
        this.blog = blog;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.comment = new Comment();
        this.isLoggedIn = false;
        this.isLoggedOut = false;
        this.post = data;
    }
    NewCommentDailogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processData(data); });
        this.auth.isLoggedIn$.subscribe(function (isLoggedIn) { return _this.isLoggedIn === isLoggedIn; });
        this.auth.isLoggedOut$.subscribe(function (isLoggedOut) { return _this.isLoggedOut === isLoggedOut; });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        this.form = this.fb.group({
            message: ['', Validators.required]
        });
    };
    NewCommentDailogComponent.prototype.processData = function (data) {
        this.user = data;
        //if (this.user != null && this.user.id != null)
        //  this.isLoggedIn =  
    };
    NewCommentDailogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewCommentDailogComponent.prototype.closewithData = function () {
        this.dialogRef.close(this.comment);
    };
    NewCommentDailogComponent.prototype.save = function () {
        var _this = this;
        // build up comment object
        this.comment.userId = this.user.id;
        this.comment.message = this.form.controls.message.value;
        this.comment.postId = this.post.postId;
        this.comment.userName = this.user.email;
        // update db.
        this.blog.createComment(this.comment).subscribe(function (data) { return _this.processCommentCreated(data); });
    };
    NewCommentDailogComponent.prototype.processCommentCreated = function (data) {
        if (data) {
            this.closewithData();
        }
        else {
            close();
        }
    };
    NewCommentDailogComponent = __decorate([
        Component({
            selector: 'app-new-comment-dailog',
            templateUrl: './new-comment-dailog.component.html',
            styleUrls: ['./new-comment-dailog.component.css']
        }),
        __param(4, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [AuthService,
            BlogService,
            FormBuilder,
            MatDialogRef, Object])
    ], NewCommentDailogComponent);
    return NewCommentDailogComponent;
}());
export { NewCommentDailogComponent };
//# sourceMappingURL=new-comment-dailog.component.js.map