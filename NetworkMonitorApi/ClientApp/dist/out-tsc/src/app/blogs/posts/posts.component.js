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
import { BlogService, AuthService, ANONYMOUS_USER } from '../../services';
var PostsComponent = /** @class */ (function () {
    function PostsComponent(blog, auth) {
        this.blog = blog;
        this.auth = auth;
        this.posts = [];
        this.user = ANONYMOUS_USER;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadPosts();
        this.auth.user$.subscribe(function (data) { return _this.processUserData(data); });
    };
    PostsComponent.prototype.processUserData = function (data) {
        this.user = data;
    };
    PostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.blog.getPosts().subscribe(function (posts) { return _this.processPosts(posts); });
    };
    PostsComponent.prototype.processPosts = function (posts) {
        this.posts = posts;
    };
    PostsComponent = __decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, AuthService])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map