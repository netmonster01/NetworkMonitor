var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var BlogService = /** @class */ (function () {
    function BlogService(_http) {
        this._http = _http;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.blog = {
            id: 0,
            title: null,
            url: null,
            posts: [],
            author: null,
            userId: null
        };
    }
    BlogService.prototype.getBlogs = function () {
        return this._http.get('/api/Blogs')
            .catch(this.handleError);
    };
    BlogService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    BlogService.prototype.uploadIamge = function (blogFile) {
        var options = {
            headers: this.headers
        };
        this._http.post('/api/Blogs/UploadFiles', blogFile).subscribe(function (result) { console.log(result); });
    };
    BlogService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], BlogService);
    return BlogService;
}());
export { BlogService };
//# sourceMappingURL=blog.service.js.map