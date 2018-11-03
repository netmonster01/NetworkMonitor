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
import { BlogService } from '../../services';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewBlogDialogComponent } from '../../dialogs';
import { EditPostDialogComponent } from '../../dialogs';
var BlogComponent = /** @class */ (function () {
    function BlogComponent(blog, dialog) {
        this.blog = blog;
        this.dialog = dialog;
        this.posts = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    BlogComponent.prototype.loadPosts = function () {
        var _this = this;
        this.blog.getPosts().subscribe(function (posts) { return _this.processPosts(posts); });
    };
    BlogComponent.prototype.processPosts = function (posts) {
        this.posts = posts;
    };
    BlogComponent.prototype.openDialog = function () {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(NewBlogDialogComponent, { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    BlogComponent.prototype.openEditDialog = function () {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(EditPostDialogComponent, { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    BlogComponent = __decorate([
        Component({
            selector: 'app-admin-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, MatDialog])
    ], BlogComponent);
    return BlogComponent;
}());
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map