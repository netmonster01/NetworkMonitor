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
import { BlogService } from '../services';
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(_blogService) {
        this._blogService = _blogService;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    BlogsComponent.prototype.activate = function () {
        this.getBlog();
    };
    BlogsComponent.prototype.getBlog = function () {
        var _this = this;
        this._blogService.getBlogs().subscribe(function (data) { return _this.popData(data); });
    };
    BlogsComponent.prototype.popData = function (blog) {
        console.log(blog);
        this.blog = blog;
    };
    BlogsComponent = __decorate([
        Component({
            selector: 'app-blogs',
            templateUrl: './blogs.component.html',
            styleUrls: ['./blogs.component.css']
        }),
        __metadata("design:paramtypes", [BlogService])
    ], BlogsComponent);
    return BlogsComponent;
}());
export { BlogsComponent };
//# sourceMappingURL=blogs.component.js.map