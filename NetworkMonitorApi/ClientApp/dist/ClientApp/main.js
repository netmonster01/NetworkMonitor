(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <app-users></app-users>\r\n  <app-roles></app-roles>\r\n  <app-admin-blog></app-admin-blog>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-images></app-images>\r\n<h2>Posts</h2>\r\n<div class=\"container\" style=\"background-color:#ffffff\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-4 col-sm-8\">\r\n          <span class=\"tblHeader\">Post Title:</span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-4\">\r\n          <button class=\"btn btn-outline-success fa fa-plus\" title=\"Add New Post\" (click)=\"openDialog()\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-3\" *ngFor=\"let post of posts;  let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even: even}\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n          \r\n        <div class=\"col-xs-4 col-sm-8\">\r\n          <a href=\"#\"> {{post.title}}</a>\r\n          <!--<div [innerHTML]=\"post.content | safe:'html'\"></div>-->\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-4\">\r\n          <button class=\"btn btn-outline-secondary fa fa-pencil\" (click)=\"openEditDialog(post)\"></button>\r\n          &nbsp;\r\n          <button class=\"btn btn-outline-danger fa fa-trash\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs */ "./src/app/dialogs/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["NewBlogDialogComponent"], { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    BlogComponent.prototype.openEditDialog = function (post) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["EditPostDialogComponent"], { width: '300px', hasBackdrop: false, data: post });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/admin/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/admin/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/admin/blog/images/images.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/blog/images/images.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Jsb2cvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/blog/images/images.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/blog/images/images.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"></div>\r\n<h1>File Upload</h1>\r\n<input type=\"file\" (change)=\"onFileSelected($event)\" #fileInput multiple />\r\n\r\n<!--<form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"onSubmit()\">\r\n  <input type=\"file\" />\r\n  <button type=\"submit\" [disabled]=\"formGroup.invalid || formGroup.prestine\">Submit</button>\r\n</form>-->\r\n"

/***/ }),

/***/ "./src/app/admin/blog/images/images.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/blog/images/images.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(blogService, fb) {
        this.blogService = blogService;
        this.fb = fb;
        this.formGroup = this.fb.group({
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ImagesComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        this.uploadFile();
        //console.log(event);
    };
    ImagesComponent.prototype.uploadFile = function () {
        this.formData = new FormData();
        this.formData.append('image', this.selectedFile, this.selectedFile.name);
        //let blogImage = new BlogImage {
        //  Image: this.selectedFile
        //}
        //// call service.
        this.blogService.uploadIamge(this.formData);
    };
    ImagesComponent.prototype.ngOnInit = function () {
    };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/admin/blog/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/admin/blog/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/admin/index.ts":
/*!********************************!*\
  !*** ./src/app/admin/index.ts ***!
  \********************************/
/*! exports provided: AdminComponent, RolesComponent, UsersComponent, BlogComponent, ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]; });

/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/roles/roles.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__["RolesComponent"]; });

/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]; });

/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/admin/blog/blog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _blog_images_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/images/images.component */ "./src/app/admin/blog/images/images.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return _blog_images_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"]; });









/***/ }),

/***/ "./src/app/admin/roles/roles.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/roles/roles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/roles/roles.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/roles/roles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Roles</h2>\r\n<div class=\"container\" style=\"background-color:#ffffff\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-xs-4 col-sm-4\">\r\n    <span class=\"tblHeader\">RoleId:</span>\r\n  </div>-->\r\n        <div class=\"col-xs-4 col-sm-7\">\r\n          <span class=\"tblHeader\">Name:</span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-5\">\r\n          <button class=\"btn btn-outline-success fa fa-plus\" title=\"Add New Role\" (click)=\"openDialog()\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-3\" *ngFor=\"let role of Roles;  let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even: even}\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-xs-4 col-sm-4\">\r\n          {{role.id}}\r\n        </div>-->\r\n        <div class=\"col-xs-4 col-sm-7\">\r\n          {{role.name}}\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-5\">\r\n          <button class=\"btn btn-outline-secondary fa fa-pencil\"></button>\r\n          &nbsp;\r\n          <button class=\"btn btn-outline-danger fa fa-trash\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/roles/roles.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/roles/roles.component.ts ***!
  \************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs */ "./src/app/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesComponent = /** @class */ (function () {
    function RolesComponent(_usersService, dialog) {
        this._usersService = _usersService;
        this.dialog = dialog;
        this.Roles = [];
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RolesComponent.prototype.getRoles = function () {
        var _this = this;
        this._usersService.getRoles().subscribe(function (data) { return _this.popData(data); });
    };
    RolesComponent.prototype.popData = function (roles) {
        console.log(roles);
        this.Roles = roles;
    };
    RolesComponent.prototype.openDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(src_app_dialogs__WEBPACK_IMPORTED_MODULE_2__["NewRoleDialogComponent"], { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/admin/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/admin/roles/roles.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\r\n<div class=\"container\" style=\"background-color:#ffffff\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n          <span class=\"tblHeader\">Photo</span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-3\">\r\n          <span class=\"tblHeader\">UserName:</span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <span class=\"tblHeader\">Role:</span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-5\">\r\n          <button class=\"btn btn-outline-success fa fa-plus\" title=\"Add New User\" (click)=\"openDialog()\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-3\" *ngFor=\"let user of Users;  let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even: even}\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n          <img class=\"img-cir\" [src]=\"user.avatarBase64 \" alt=\"Avatar\" style=\"width:25px\">\r\n        </div>\r\n        <!--<div class=\"col-xs-4 col-sm-4\">\r\n          {{user.id}}\r\n        </div>-->\r\n        <div class=\"col-xs-4 col-sm-3\">\r\n          {{user.email}}\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <span title=\"Admin\" [ngClass]=\"{'fa fa-user-secret ': user.isAdmin == true}\"></span><span title=\"No Roles\" [ngClass]=\"{'fa fa-user-o': user.roles.length == 0}\"></span>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-3\">\r\n          <button class=\"btn btn-outline-secondary fa fa-pencil\"></button>\r\n          &nbsp;\r\n          <button class=\"btn btn-outline-danger fa fa-trash\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">&nbsp;</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs */ "./src/app/dialogs/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            if (entry.avatarImage) {
                entry.avatarBase64 = entry.avatarImageType + entry.avatarImage;
            }
            else {
                entry.avatarBase64 = '/assets/user.png';
            }
        }
    };
    UsersComponent.prototype.openDialog = function () {
        //const e = new Error();
        //e.message = 'crap an error happened';
        //e.stack = 'stack trace = c:dfjkalsdjf;lksadjf';
        //e.name = 'terreoasdf';
        //throw e;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["NewUserDialogComponent"], { width: '300px', hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _page_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found */ "./src/app/page-not-found/index.ts");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats */ "./src/app/stats/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");
/* harmony import */ var _forbidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forbidden */ "./src/app/forbidden/index.ts");
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogs */ "./src/app/blogs/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    {
        path: 'admin', component: _admin__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]], data: { role: 'Admin' }
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'stats', component: _stats__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"] },
    { path: 'register', component: _login__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] },
    { path: 'profile', component: _profile__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'blog', component: _blogs__WEBPACK_IMPORTED_MODULE_9__["BlogsComponent"] },
    { path: '403', component: _forbidden__WEBPACK_IMPORTED_MODULE_8__["ForbiddenComponent"] },
    { path: '**', component: _page_not_found__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <!--<ng-content>\r\n\r\n  </ng-content>-->\r\n  <router-outlet>\r\n    <!--<ng-content>\r\n\r\n    </ng-content>-->\r\n  </router-outlet>\r\n</div>\r\n<!--<app-footer></app-footer>-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var rxjs_add_operator_shareReplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/shareReplay */ "./node_modules/rxjs-compat/_esm5/add/operator/shareReplay.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");
/* harmony import */ var _shared_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blogs */ "./src/app/blogs/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialogs */ "./src/app/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _responses_no_roles_no_roles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./responses/no-roles/no-roles.component */ "./src/app/responses/no-roles/no-roles.component.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _directives_new_comment_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/new-comment.directive */ "./src/app/directives/new-comment.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { UiModule } from './ui/ui.module';






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                _admin__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
                _admin__WEBPACK_IMPORTED_MODULE_25__["RolesComponent"],
                _admin__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                _home__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _profile__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _shared_layout__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _shared_layout__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _blogs__WEBPACK_IMPORTED_MODULE_22__["BlogsComponent"],
                _blogs__WEBPACK_IMPORTED_MODULE_22__["PostsComponent"],
                _dashboard__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_24__["SafePipe"],
                _admin__WEBPACK_IMPORTED_MODULE_25__["BlogComponent"],
                _admin__WEBPACK_IMPORTED_MODULE_25__["ImagesComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_27__["ForbiddenComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewUserDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewBlogDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewRoleDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["ErrorDialogComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["EditPostDialogComponent"],
                _responses_no_roles_no_roles_component__WEBPACK_IMPORTED_MODULE_31__["NoRolesComponent"],
                _dashboard__WEBPACK_IMPORTED_MODULE_32__["BlogWidgetComponent"],
                _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewCommentDailogComponent"],
                _directives_new_comment_directive__WEBPACK_IMPORTED_MODULE_33__["NewCommentDirective"],
                _blogs__WEBPACK_IMPORTED_MODULE_22__["PostComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //UiModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__["HighlightModule"].forRoot({ theme: 'agate' })
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_23__["UserService"], _services__WEBPACK_IMPORTED_MODULE_23__["StatsService"], _services__WEBPACK_IMPORTED_MODULE_23__["BlogService"], _guards__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_26__["RoleGuard"], _services__WEBPACK_IMPORTED_MODULE_23__["LoggerService"], _services__WEBPACK_IMPORTED_MODULE_23__["DashboardService"], _services__WEBPACK_IMPORTED_MODULE_23__["VoteService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_dialogs__WEBPACK_IMPORTED_MODULE_28__["NewUserDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewRoleDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewBlogDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_28__["ErrorDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_28__["EditPostDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_28__["NewCommentDailogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blogs/blogs.component.css":
/*!*******************************************!*\
  !*** ./src/app/blogs/blogs.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/blogs/blogs.component.html":
/*!********************************************!*\
  !*** ./src/app/blogs/blogs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row panel p-2\">\r\n  <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-11\">\r\n            <h1>Blog</h1>\r\n          </div>\r\n          <div class=\"col-1\">\r\n            <button *ngIf=\"user.isAdmin\" class=\"btn btn-outline-light fa fa-plus\" title=\"Create new Post\" (click)=\"openDialog()\"></button>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n<div class=\"row panel p-2\">\r\n  <div class=\"col-sm-12\">\r\n     <app-posts></app-posts>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs */ "./src/app/dialogs/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(_blogService, auth, dialog) {
        this._blogService = _blogService;
        this.auth = auth;
        this.dialog = dialog;
        this.user = _services__WEBPACK_IMPORTED_MODULE_1__["ANONYMOUS_USER"];
        this.isLoggedIn = false;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    BlogsComponent.prototype.activate = function () {
        this.isLoggedIn = this.auth.isUserLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
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
    BlogsComponent.prototype.openDialog = function () {
        //const dialogConfig = new MatDialogConfig();
        //dialogConfig.disableClose = true;
        //dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["NewBlogDialogComponent"], { hasBackdrop: false });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.css */ "./src/app/blogs/blogs.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/blogs/index.ts":
/*!********************************!*\
  !*** ./src/app/blogs/index.ts ***!
  \********************************/
/*! exports provided: PostsComponent, BlogsComponent, PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/blogs/posts/posts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return _posts_posts_component__WEBPACK_IMPORTED_MODULE_0__["PostsComponent"]; });

/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return _blogs_component__WEBPACK_IMPORTED_MODULE_1__["BlogsComponent"]; });

/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/blogs/posts/post/post.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return _posts_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"]; });






/***/ }),

/***/ "./src/app/blogs/posts/post/post.component.css":
/*!*****************************************************!*\
  !*** ./src/app/blogs/posts/post/post.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dzL3Bvc3RzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blogs/posts/post/post.component.html":
/*!******************************************************!*\
  !*** ./src/app/blogs/posts/post/post.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-12\">\r\n    <div class=\"card-group\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10\">{{currentPost.title}}</div>\r\n            <div class=\"col-sm-2\">\r\n              <button (click)=\"openNewCommentDialog()\" title=\"Comment\"  class=\"btn btn-outline-primary fa fa-reply-all pull-right\"></button>\r\n              <button (click)=\"deletePost(currentPost.postId)\" title=\"Delete Post\" *ngIf=\"user.isAdmin\" class=\"btn btn-outline-danger fa fa-trash pull-right\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div highlight=\"all\" [innerHTML]=\"currentPost.content | safe:'html'\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-10\">Comments: <button (click)=\"viewComments()\" class=\"btn btn-link\" [disabled]=\"currentPost.comments.length < 1\">{{currentPost.comments.length}}</button></div>\r\n            <!--<app-likes [user]=\"user\" [post]=\"post\" class=\"col-sm-2\"></app-likes>-->\r\n            <div class=\"col-sm-2\" *ngIf=\"isLoggedIn\">\r\n              <button (click)=\"upVote()\" title=\"Likes\" [disabled]=\"myVote.userVote == 1\" [ngClass]=\"myVote.userVote == 1 ? 'btn-outline-primary' : 'btn-outline-secondary'\" class=\"btn fa fa-thumbs-up\">&nbsp;{{currentPost.likes}}</button>&nbsp;\r\n              <button (click)=\"downVote()\" title=\"DisLikes\" [disabled]=\"myVote.userVote == -1\" [ngClass]=\"myVote.userVote == -1 ? 'btn-outline-primary' : 'btn-outline-secondary'\" class=\"btn fa fa-thumbs-down\">&nbsp;{{currentPost.disLikes}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">&nbsp;</div>\r\n<div *ngIf=\"showComments\">\r\n  <div class=\"row p-2\" *ngFor=\"let comment of currentPost.comments;  let odd=odd; let even=even;\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card-group\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">Comment: {{comment.userName}}</div>\r\n          <div class=\"card-body\">\r\n            <div highlight=\"all\" [innerHTML]=\"comment.message\"></div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-2\">Likes: {{comment.likes}} </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blogs/posts/post/post.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blogs/posts/post/post.component.ts ***!
  \****************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dialogs */ "./src/app/dialogs/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(blog, auth, voter, dialog) {
        this.blog = blog;
        this.auth = auth;
        this.voter = voter;
        this.dialog = dialog;
        this.currentPost = new _models__WEBPACK_IMPORTED_MODULE_1__["Post"]();
        this.voted = false;
        this.isLoggedIn = false;
        this.showComments = false;
        this.voteDirection = 0;
        this.myVote = new _models__WEBPACK_IMPORTED_MODULE_1__["Vote"]();
        this.user = _services__WEBPACK_IMPORTED_MODULE_2__["ANONYMOUS_USER"];
    }
    Object.defineProperty(PostComponent.prototype, "post", {
        set: function (post) {
            var _this = this;
            this.isLoggedIn = this.auth.isUserLoggedIn();
            if (this.isLoggedIn && post != null && post.postId != null) {
                this.myVote.postId = post.postId;
                if (this.user.id == null) {
                    this.user = this.auth.loggedInUser();
                }
                this.myVote.userId = this.user.id;
                //this.myVote.us
                this.voter.getVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
            }
            this.currentPost = post;
        },
        enumerable: true,
        configurable: true
    });
    PostComponent.prototype.ngOnInit = function () {
        this.currentPost.comments = [];
    };
    PostComponent.prototype.processUserData = function (data) {
        this.myVote.userId = data.id;
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            this.myVote.userId = this.user.id;
            this.myVote.postId = this.currentPost.postId;
            //this.voter.getVote(this.myVote).subscribe((vote: Vote) => this.processvVoteData(vote));
        }
    };
    PostComponent.prototype.upVote = function () {
        // need to check currect vote
        //never voted
        if (this.myVote.userVote >= 0) {
            if (this.currentPost.likes >= 0) {
                this.currentPost.likes++;
            }
            this.myVote.userVote = 1;
        }
        // voted disliked
        if (this.myVote.userVote == -1) {
            this.currentPost.likes++;
            if (this.currentPost.disLikes >= 0) {
                this.currentPost.disLikes--;
            }
            this.myVote.userVote = 1;
        }
        // update database
        this.addVote();
    };
    PostComponent.prototype.addVote = function () {
        var _this = this;
        this.voter.addVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
    };
    PostComponent.prototype.processvVoteData = function (vote) {
        console.log(vote);
        this.voteDirection = vote.userVote;
        this.myVote = vote;
    };
    PostComponent.prototype.downVote = function () {
        // need to check currect vote
        //never voted
        if (this.myVote.userVote == 0) {
            this.currentPost.disLikes++;
            this.myVote.userVote = -1;
        }
        // voted liked
        if (this.myVote.userVote == 1) {
            if (this.currentPost.likes >= 0) {
                this.currentPost.likes--;
            }
            this.currentPost.disLikes++;
            this.myVote.userVote = -1;
        }
        // update database
        this.addVote();
    };
    PostComponent.prototype.openNewCommentDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_4__["NewCommentDailogComponent"], { width: '500px', height: '500px', hasBackdrop: false, data: this.currentPost });
        dialogRef.afterClosed().subscribe(function (data) { return _this.updateComments(data); });
    };
    PostComponent.prototype.updateComments = function (data) {
        if (data != null) {
            if (data instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Comment"]) {
                this.post.comments.push(data);
            }
        }
    };
    PostComponent.prototype.viewComments = function () {
        this.showComments = !this.showComments;
    };
    PostComponent.prototype.deletPost = function (postId) {
        return this.blog.deletePost(postId).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], PostComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["Post"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_1__["Post"]])
    ], PostComponent.prototype, "post", null);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/blogs/posts/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/blogs/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_2__["VoteService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/blogs/posts/posts.component.css":
/*!*************************************************!*\
  !*** ./src/app/blogs/posts/posts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/blogs/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/blogs/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let post of posts\">\r\n  <div class=\"col-sm-12\">\r\n    <app-post [user]=\"user\" [post]=\"post\"></app-post>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blogs/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/blogs/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(blog, auth) {
        this.blog = blog;
        this.auth = auth;
        this.posts = [];
        this.user = _services__WEBPACK_IMPORTED_MODULE_1__["ANONYMOUS_USER"];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/blogs/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/blogs/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center align-items-center\">\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"dashboard dashboardPosts\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\"><h3>Logs</h3></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <i class=\"fa fa-exclamation-triangle fa-2x\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div>\r\n            {{dashboard.errors}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"dashboard dashboardPosts\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\"><h3>Users</h3></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 \">\r\n            <i class=\"fa fa fa-users fa-2x\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div>\r\n              {{dashboard.users}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"dashboard dashboardPosts\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\"><h3>Comments</h3></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 \">\r\n            <i class=\"fa fa-comments fa-2x\" aria-hidden=\"true\"></i>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div>\r\n              {{dashboard.comments}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"dashboard dashboardPosts\">\r\n        4\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"row\">&nbsp;</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-blog-widget></app-blog-widget>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dash) {
        this.dash = dash;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.activate();
        this.dashboard = new _models__WEBPACK_IMPORTED_MODULE_2__["Dashboard"]();
        //this.post = '<div highlight><b>hello world</b><br><pre data-lang=\'HTML\'><code >function cool(x) {return x + 1;}</code></pre><br><pre><code highlight> public class hot(string degrees) {} </code></pre></div>';
    };
    DashboardComponent.prototype.activate = function () {
        var _this = this;
        this.dash.getDashboard().subscribe(function (dashboard) { return _this.processData(dashboard); }); //blog.getLatestPost().subscribe((post: Post) => this.processData(post));
    };
    DashboardComponent.prototype.processData = function (dashboardCounts) {
        this.dashboard = dashboardCounts;
        console.log(dashboardCounts);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardComponent, BlogWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _widgets_blog_widget_blog_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/blog-widget/blog-widget.component */ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogWidgetComponent", function() { return _widgets_blog_widget_blog_widget_component__WEBPACK_IMPORTED_MODULE_1__["BlogWidgetComponent"]; });





/***/ }),

/***/ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/widgets/blog-widget/blog-widget.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC93aWRnZXRzL2Jsb2ctd2lkZ2V0L2Jsb2ctd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/widgets/blog-widget/blog-widget.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-post [user]=\"user\" [post]=\"post\"></app-post>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/widgets/blog-widget/blog-widget.component.ts ***!
  \************************************************************************/
/*! exports provided: BlogWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogWidgetComponent", function() { return BlogWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogWidgetComponent = /** @class */ (function () {
    function BlogWidgetComponent(blog, auth, voter) {
        this.blog = blog;
        this.auth = auth;
        this.voter = voter;
        this.user = _services__WEBPACK_IMPORTED_MODULE_1__["ANONYMOUS_USER"];
        this.isLoggedIn = false;
    }
    BlogWidgetComponent.prototype.ngOnInit = function () {
        this.post = new _models__WEBPACK_IMPORTED_MODULE_2__["Post"]();
        this.activate();
    };
    BlogWidgetComponent.prototype.activate = function () {
        var _this = this;
        this.blog.getLatestPost().subscribe(function (post) { return _this.processData(post); });
    };
    BlogWidgetComponent.prototype.processUserData = function (data) {
        this.user = data;
        if (this.user && this.user.id != null) {
            //this.myVote.userId = data.id;
        }
    };
    BlogWidgetComponent.prototype.processData = function (post) {
        var _this = this;
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processUserData(data); });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        //console.log(post);
        this.post = post;
    };
    BlogWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-widget',
            template: __webpack_require__(/*! ./blog-widget.component.html */ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.html"),
            styles: [__webpack_require__(/*! ./blog-widget.component.css */ "./src/app/dashboard/widgets/blog-widget/blog-widget.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_1__["VoteService"]])
    ], BlogWidgetComponent);
    return BlogWidgetComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZWRpdC1wb3N0LWRpYWxvZy9lZGl0LXBvc3QtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>EditPost</h2>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- roles  -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"addNewPostTitle\" placeholder=\"Post Title\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <!--<div [innerHTML]=\"post.content | safe:'html'\"></div>-->\r\n          <textarea matInput type=\"text\" formControlName=\"content\" class=\"form-control\" id=\"addNewPostContent\" placeholder=\"Content Title\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostDialogComponent", function() { return EditPostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




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
            title: [this.post.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: [this.post.content, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditPostDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditPostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-post-dialog',
            template: __webpack_require__(/*! ./edit-post-dialog.component.html */ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-post-dialog.component.css */ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditPostDialogComponent);
    return EditPostDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"errorContainer\">\r\n  <div class=\"errorHead\">\r\n    Error:\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <strong>Message: </strong> {{error.message}}\r\n    <strong>Stack: </strong> {{error.stack}}\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <button mat-button (click)=\"close()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(injector, dialogRef, error) {
        this.injector = injector;
        this.dialogRef = dialogRef;
        this.error = error;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
        console.log(this.error);
        //const message = error.message ? error.message : error.toString();
    };
    ErrorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ErrorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/dialogs/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/dialogs/error-dialog/error-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/index.ts":
/*!**********************************!*\
  !*** ./src/app/dialogs/index.ts ***!
  \**********************************/
/*! exports provided: NewBlogDialogComponent, NewUserDialogComponent, NewRoleDialogComponent, ErrorDialogComponent, EditPostDialogComponent, NewCommentDailogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_blog_dialog_new_blog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-blog-dialog/new-blog-dialog.component */ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewBlogDialogComponent", function() { return _new_blog_dialog_new_blog_dialog_component__WEBPACK_IMPORTED_MODULE_0__["NewBlogDialogComponent"]; });

/* harmony import */ var _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-user-dialog/new-user-dialog.component */ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogComponent", function() { return _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__["NewUserDialogComponent"]; });

/* harmony import */ var _new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-role-dialog/new-role-dialog.component */ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewRoleDialogComponent", function() { return _new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewRoleDialogComponent"]; });

/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"]; });

/* harmony import */ var _edit_post_dialog_edit_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-post-dialog/edit-post-dialog.component */ "./src/app/dialogs/edit-post-dialog/edit-post-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPostDialogComponent", function() { return _edit_post_dialog_edit_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditPostDialogComponent"]; });

/* harmony import */ var _new_comment_dailog_new_comment_dailog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-comment-dailog/new-comment-dailog.component */ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewCommentDailogComponent", function() { return _new_comment_dailog_new_comment_dailog_component__WEBPACK_IMPORTED_MODULE_5__["NewCommentDailogComponent"]; });









/***/ }),

/***/ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbmV3LWJsb2ctZGlhbG9nL25ldy1ibG9nLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 mat-dialog-title>Add New Post</h2>\r\n    <mat-dialog-content [formGroup]=\"form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <!-- roles  -->\r\n          <div class=\"form-group\">\r\n            <mat-form-field style=\"width: 350px;\">\r\n              <input matInput type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"addNewPostTitle\" placeholder=\"Post Title\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <mat-form-field style=\"width: 350px;\">\r\n                  <textarea matInput (change)=\"updatePreview()\" type=\"text\" formControlName=\"content\" class=\"form-control\" id=\"addNewPostContent\" placeholder=\"Content\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n              <div *ngIf=\"preview\" class=\"col-sm-6\">\r\n                <div>\r\n                  <div highlight=\"all\" [innerHTML]=\"previewContent | safe:'html'\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"checkbox\" (change)=\"showPreview($event); false\" /> Preview Content\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--<div>\r\n        <input type=\"checkbox\" (change)=\"showPreview($event); false\" /> Preview\r\n      </div>-->\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n          <button mat-button (click)=\"close()\">Cancel</button>\r\n          <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewBlogDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBlogDialogComponent", function() { return NewBlogDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NewBlogDialogComponent = /** @class */ (function () {
    function NewBlogDialogComponent(auth, userService, blogService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.blogService = blogService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.user = _services__WEBPACK_IMPORTED_MODULE_3__["ANONYMOUS_USER"];
        this.isLoggedIn = false;
        this.preview = false;
    }
    NewBlogDialogComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.auth.isUserLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
        this.newPost = new _models__WEBPACK_IMPORTED_MODULE_4__["Post"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-blog-dialog',
            template: __webpack_require__(/*! ./new-blog-dialog.component.html */ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-blog-dialog.component.css */ "./src/app/dialogs/new-blog-dialog/new-blog-dialog.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewBlogDialogComponent);
    return NewBlogDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbmV3LWNvbW1lbnQtZGFpbG9nL25ldy1jb21tZW50LWRhaWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Comment</h2>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" formControlName=\"message\" class=\"form-control\" id=\"addNewCommentMessage\" placeholder=\"Comment\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewCommentDailogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentDailogComponent", function() { return NewCommentDailogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NewCommentDailogComponent = /** @class */ (function () {
    function NewCommentDailogComponent(auth, blog, fb, dialogRef, data) {
        this.auth = auth;
        this.blog = blog;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.comment = new _models__WEBPACK_IMPORTED_MODULE_3__["Comment"]();
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
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-comment-dailog',
            template: __webpack_require__(/*! ./new-comment-dailog.component.html */ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.html"),
            styles: [__webpack_require__(/*! ./new-comment-dailog.component.css */ "./src/app/dialogs/new-comment-dailog/new-comment-dailog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewCommentDailogComponent);
    return NewCommentDailogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/new-role-dialog/new-role-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbmV3LXJvbGUtZGlhbG9nL25ldy1yb2xlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/new-role-dialog/new-role-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New Role</h2>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- roles  -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"newRole\" class=\"form-control\" id=\"addNewRole\" placeholder=\"RoleName\">\r\n        </mat-form-field>\r\n      </div>\r\n  </div>\r\n</div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/new-role-dialog/new-role-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoleDialogComponent", function() { return NewRoleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NewRoleDialogComponent = /** @class */ (function () {
    function NewRoleDialogComponent(auth, userService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.fb = fb;
        this.dialogRef = dialogRef;
    }
    NewRoleDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-role-dialog',
            template: __webpack_require__(/*! ./new-role-dialog.component.html */ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-role-dialog.component.css */ "./src/app/dialogs/new-role-dialog/new-role-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewRoleDialogComponent);
    return NewRoleDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/new-user-dialog/new-user-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbmV3LXVzZXItZGlhbG9nL25ldy11c2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/new-user-dialog/new-user-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New User</h2>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- first name -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"firstName\" class=\"form-control\" id=\"profileFirstName\" placeholder=\"First Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- last name -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"lastName\" class=\"form-control\" id=\"profileLastName\" placeholder=\"Last Name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- email -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"profileEmail\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <mat-select class=\"form-control\" formControlName=\"rolesList\" id=\"profile\" (change)=\"onSelect($event.target.value)\" placeholder=\"Role\">\r\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.name\">\r\n              {{role.name}}\r\n            </mat-option>\r\n           </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- password -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"profilePassword\" placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <!--  confirm password -->\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" id=\"profileConfirmPassword\" placeholder=\"Confirm Password\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<mat-form-field>\r\n    <input matInput\r\n           placeholder=\"Course Description\"\r\n           formControlName=\"description\">\r\n  </mat-form-field>\r\n  ....-->\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogComponent", function() { return NewUserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NewUserDialogComponent = /** @class */ (function () {
    function NewUserDialogComponent(auth, userService, fb, dialogRef, data) {
        this.auth = auth;
        this.userService = userService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.user = _services__WEBPACK_IMPORTED_MODULE_3__["ANONYMOUS_USER"];
        this.roles = [];
        // this.description = data.description;
    }
    NewUserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load roles for dropdown.
        this.userService.getRoles().subscribe(function (roles) { _this.processRoles(roles); });
        this.form = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rolesList: [this.roles]
        });
        this.form.patchValue({
            'role': 'Author'
        });
    };
    NewUserDialogComponent.prototype.processRoles = function (roles) {
        console.log("roles: " + roles);
        this.roles = roles;
    };
    NewUserDialogComponent.prototype.save = function () {
        this.user.email = this.form.controls.email.value;
        this.user.firstName = this.form.controls.firstName.value;
        this.user.lastName = this.form.controls.lastName.value;
        this.user.password = this.form.controls.password.value;
        this.dialogRef.close(this.user);
    };
    NewUserDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewUserDialogComponent.prototype.onSelect = function (event) {
    };
    NewUserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user-dialog',
            template: __webpack_require__(/*! ./new-user-dialog.component.html */ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-user-dialog.component.css */ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewUserDialogComponent);
    return NewUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/directives/new-comment.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/new-comment.directive.ts ***!
  \*****************************************************/
/*! exports provided: NewCommentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentDirective", function() { return NewCommentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewCommentDirective = /** @class */ (function () {
    function NewCommentDirective() {
    }
    NewCommentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[newComment]'
        }),
        __metadata("design:paramtypes", [])
    ], NewCommentDirective);
    return NewCommentDirective;
}());



/***/ }),

/***/ "./src/app/enums/index.ts":
/*!********************************!*\
  !*** ./src/app/enums/index.ts ***!
  \********************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-type.enum */ "./src/app/enums/log-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return _log_type_enum__WEBPACK_IMPORTED_MODULE_0__["LogType"]; });




/***/ }),

/***/ "./src/app/enums/log-type.enum.ts":
/*!****************************************!*\
  !*** ./src/app/enums/log-type.enum.ts ***!
  \****************************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return LogType; });
var LogType;
(function (LogType) {
    LogType[LogType["Error"] = 0] = "Error";
    LogType[LogType["Warning"] = 1] = "Warning";
    LogType[LogType["Debug"] = 2] = "Debug";
    LogType[LogType["Info"] = 3] = "Info";
    LogType[LogType["Pass"] = 4] = "Pass";
    LogType[LogType["Fail"] = 5] = "Fail";
})(LogType || (LogType = {}));


/***/ }),

/***/ "./src/app/forbidden/forbidden.component.css":
/*!***************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>403 Forbidden</div>\r\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/forbidden/forbidden.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/index.ts":
/*!************************************!*\
  !*** ./src/app/forbidden/index.ts ***!
  \************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return _forbidden_component__WEBPACK_IMPORTED_MODULE_0__["ForbiddenComponent"]; });




/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._authService.isAuthenticated()) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard, RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _role_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-guard.service */ "./src/app/guards/role-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return _role_guard_service__WEBPACK_IMPORTED_MODULE_1__["RoleGuard"]; });





/***/ }),

/***/ "./src/app/guards/role-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/role-guard.service.ts ***!
  \**********************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var user = this._authService.decode();
        var rolesToCheck = next.data.role.split(',');
        var isInRole = false;
        if (Array.isArray(user.Role)) {
            var hasRole = user.Role.filter(function (val) {
                return rolesToCheck.indexOf(val) != -1;
            });
            if (hasRole.length > 0) {
                return true;
            }
        }
        else {
            isInRole = rolesToCheck.includes(user.Role);
            if (isInRole) {
                return true;
            }
        }
        // navigate to not found page
        this._router.navigate(['/403']);
        return false;
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent, SignInComponent, SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/login/sign-in/sign-in.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]; });

/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/login/sign-up/sign-up.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]; });






/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>\r\n  <div>Username:</div>\r\n  <div>\r\n    <input [(ngModel)]=\"email\" />\r\n  </div>\r\n  <div>Password:</div>\r\n  <div>\r\n    <input type=\"password\" [(ngModel)]=\"password\" />\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-info\" (click)=\"login()\">Login</button>\r\n    <button *ngIf=\"isLoggedIn$\" class=\"btn btn-info\" (click)=\"login()\">Logout</button>\r\n  </div>\r\n</div>-->\r\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Sign In</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Sign Up</a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\" id=\"myTabContent\">\r\n  <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\"><app-sign-in></app-sign-in></div>\r\n  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\"><app-sign-up></app-sign-up></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.user.userName = '';
        this.user = _services__WEBPACK_IMPORTED_MODULE_1__["ANONYMOUS_USER"];
        //this.user = {
        //  id: null,
        //  email: null,
        //  password: null,
        //  token: undefined,
        //  roles: [],
        //  avatarImageBas64: null,
        //  firstName: null,
        //  lastName: null
        //}
        // this.user = new User
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //this.auth.user = this.user;
        this.auth.login(this.email, this.password)
            .subscribe(function (data) { return _this.user = data; }, console.error);
        //alert('clicked');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/login/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signInForm\" (ngSubmit)=\"logInHandler()\">\r\n  <!--value: {{signInForm.value  | json}}\r\n  <br />-->\r\n  user: {{user  | json}}\r\n  <h1>Sign In</h1>\r\n  <!-- email -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"signInEmail\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- password -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"signInPassword\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"signInForm.invalid\">Submit</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SignInComponent = /** @class */ (function () {
    //user: User = {
    //  password: null,
    //  email: null,
    //  token: undefined,
    //  id: null,
    //  roles: null,
    //  avatarImageBas64: null,
    //  firstName: null,
    //  lastName: null
    //};
    function SignInComponent(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.return = '';
        this.user = _services__WEBPACK_IMPORTED_MODULE_2__["ANONYMOUS_USER"];
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signInForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.signInForm.valueChanges.subscribe(console.log);
        this.auth.user$.subscribe(function (data) { return _this.processData(data); });
    };
    SignInComponent.prototype.logInHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue;
            return __generator(this, function (_a) {
                this.loading = true;
                formValue = this.signInForm.value;
                try {
                    // todo call api.
                    this.auth.loginAsync(this.user.email, this.user.password); //.subscribe((user: User) => this.user = user);
                    //this.auth.login(this.user.email, this.user.password).subscribe((user: User) => this.user = user);
                    this.success = true;
                }
                catch (err) {
                    console.error(err);
                }
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    SignInComponent.prototype.processData = function (data) {
        // this.user = data;
        if (data.token) {
            this.router.navigateByUrl(this.return);
        }
        //console.log(data);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/login/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/login/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\" (ngSubmit)=\"submitHandler()\">\r\n  <!--value: {{signUpForm.value  | json}}\r\n  <br />\r\n  user: {{user  | json}}-->\r\n  <h1>Register</h1>\r\n  <!-- first name -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"firstName\" class=\"form-control\" id=\"signUpFirstName\" placeholder=\"First Name\" [(ngModel)]=\"user.firstName\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- last name -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"lastName\" class=\"form-control\" id=\"signUpLastName\" placeholder=\"Last Name\" [(ngModel)]=\"user.lastName\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- email -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"signUpEmail\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- password -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"signUpPassword\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- cofirm password -->\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" id=\"signUpConfirmPassword\" placeholder=\"Confirm Password\">\r\n    </mat-form-field>\r\n    <div class=\"invalid-feedback\" *ngIf=\"signUpForm.errors?.mismatch && (signUpForm.controls['confirmPassword'].dirty || signUpForm.controls['password'].touched)\">\r\n      Passwords don't match.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"signUpForm.invalid\">Submit</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SignUpComponent = /** @class */ (function () {
    //  {
    //  id: null,
    //  email: null,
    //  password: null,
    //  token: undefined,
    //  roles: null,
    //  avatarImageBas64: null,
    //  firstName: null,
    //  lastName: null
    //};
    function SignUpComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.loading = false;
        this.success = false;
        this.user = _services__WEBPACK_IMPORTED_MODULE_2__["ANONYMOUS_USER"];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
        this.signUpForm.valueChanges.subscribe(console.log);
    };
    SignUpComponent.prototype.passwordMatchValidator = function (frm) {
        return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : { 'mismatch': true };
    };
    SignUpComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue;
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = true;
                formValue = this.signUpForm.value;
                try {
                    // todo call api.
                    this.auth.register(this.user).subscribe(function (user) { return _this.user = user; });
                    this.success = true;
                }
                catch (err) {
                    console.error(err);
                }
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/login/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/login/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/models/applicationError.ts":
/*!********************************************!*\
  !*** ./src/app/models/applicationError.ts ***!
  \********************************************/
/*! exports provided: ApplicationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationError", function() { return ApplicationError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ApplicationError = /** @class */ (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(message) {
        var _this = _super.call(this, message) || this;
        _this.httpStatus = 404;
        _this.handled = false;
        _this.name = ApplicationError.name;
        Object.setPrototypeOf(_this, ApplicationError.prototype);
        return _this;
    }
    return ApplicationError;
}(Error));



/***/ }),

/***/ "./src/app/models/blog.ts":
/*!********************************!*\
  !*** ./src/app/models/blog.ts ***!
  \********************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
var Blog = /** @class */ (function () {
    function Blog() {
    }
    return Blog;
}());



/***/ }),

/***/ "./src/app/models/blogImage.ts":
/*!*************************************!*\
  !*** ./src/app/models/blogImage.ts ***!
  \*************************************/
/*! exports provided: BlogImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogImage", function() { return BlogImage; });
var BlogImage = /** @class */ (function () {
    function BlogImage() {
    }
    return BlogImage;
}());



/***/ }),

/***/ "./src/app/models/comment.ts":
/*!***********************************!*\
  !*** ./src/app/models/comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
//export class Comment {
//  commentId: string;
//  message: string;
//  likes: number;
//}
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/dashboard.ts":
/*!*************************************!*\
  !*** ./src/app/models/dashboard.ts ***!
  \*************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
var Dashboard = /** @class */ (function () {
    function Dashboard() {
    }
    return Dashboard;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Role, Stats, User, Blog, Post, BlogImage, ApplicationError, Log, Comment, Dashboard, Vote, VoteCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ "./src/app/models/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_0__["Role"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats */ "./src/app/models/stats.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _stats__WEBPACK_IMPORTED_MODULE_1__["Stats"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["User"]; });

/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog */ "./src/app/models/blog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return _blog__WEBPACK_IMPORTED_MODULE_3__["Blog"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./src/app/models/post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _post__WEBPACK_IMPORTED_MODULE_4__["Post"]; });

/* harmony import */ var _blogImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogImage */ "./src/app/models/blogImage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogImage", function() { return _blogImage__WEBPACK_IMPORTED_MODULE_5__["BlogImage"]; });

/* harmony import */ var _applicationError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applicationError */ "./src/app/models/applicationError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationError", function() { return _applicationError__WEBPACK_IMPORTED_MODULE_6__["ApplicationError"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log */ "./src/app/models/log.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log__WEBPACK_IMPORTED_MODULE_7__["Log"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment */ "./src/app/models/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_8__["Comment"]; });

/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard */ "./src/app/models/dashboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_9__["Dashboard"]; });

/* harmony import */ var _vote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vote */ "./src/app/models/vote.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return _vote__WEBPACK_IMPORTED_MODULE_10__["Vote"]; });

/* harmony import */ var _vote_count__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vote-count */ "./src/app/models/vote-count.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoteCount", function() { return _vote_count__WEBPACK_IMPORTED_MODULE_11__["VoteCount"]; });















/***/ }),

/***/ "./src/app/models/log.ts":
/*!*******************************!*\
  !*** ./src/app/models/log.ts ***!
  \*******************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
var Log = /** @class */ (function () {
    function Log(userId, logType, source, message, dateCreated) {
        if (!(this instanceof Log)) {
            return new Log(userId, logType, source, message, dateCreated);
        }
        this.userId = userId;
        this.logType = logType;
        this.message = message;
        this.source = source;
    }
    return Log;
}());



/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
//export class Post {
//  postId: number;
//  title: string;
//  content: string;
//  blogId: number;
//  likes: number;
//  comments: Comment[];
//}
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/models/stats.ts":
/*!*********************************!*\
  !*** ./src/app/models/stats.ts ***!
  \*********************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
var Stats = /** @class */ (function () {
    function Stats() {
    }
    return Stats;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/vote-count.ts":
/*!**************************************!*\
  !*** ./src/app/models/vote-count.ts ***!
  \**************************************/
/*! exports provided: VoteCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteCount", function() { return VoteCount; });
var VoteCount = /** @class */ (function () {
    function VoteCount() {
    }
    return VoteCount;
}());



/***/ }),

/***/ "./src/app/models/vote.ts":
/*!********************************!*\
  !*** ./src/app/models/vote.ts ***!
  \********************************/
/*! exports provided: Vote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
var Vote = /** @class */ (function () {
    function Vote() {
    }
    return Vote;
}());



/***/ }),

/***/ "./src/app/page-not-found/index.ts":
/*!*****************************************!*\
  !*** ./src/app/page-not-found/index.ts ***!
  \*****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]; });




/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/index.ts":
/*!**********************************!*\
  !*** ./src/app/profile/index.ts ***!
  \**********************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileForm\" (ngSubmit)=\"submitHandler()\">\r\n  <!--value: {{profileForm.value  | json}}\r\n  <br />\r\n  user: {{user  | json}}-->\r\n  <div class=\"container\">\r\n    <div class=\"headerBar\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h1>Profile</h1>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      &nbsp;\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"row\"><img [src]=\"imageSrc\" id=\"bigPofileImg\"> </div>\r\n        <div class=\"row\">\r\n          &nbsp;\r\n        </div>\r\n        <div class=\"row\">\r\n          <input type=\"file\" (change)=\"onFileSelected($event)\" #fileInput multiple />\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-9\">\r\n        <!-- first name -->\r\n        <div class=\"form-group\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"firstName\" class=\"form-control\" id=\"profileFirstName\" placeholder=\"First Name\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <!-- last name -->\r\n        <div class=\"form-group\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"lastName\" class=\"form-control\" id=\"profileLastName\" placeholder=\"Last Name\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <!-- email -->\r\n        <div class=\"form-group\">\r\n          <mat-form-field>\r\n            <input matInput type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"profileEmail\" placeholder=\"Email\" >\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileForm.invalid\">Submit</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- image -->\r\n    <!-- <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input matInput type=\"file\" formControlName=\"file\" class=\"form-control\" id=\"profileFile\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n    </mat-form-field>\r\n  </div> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.isLoggedIn = false;
        this.imageSrc = '/assets/user.png';
        this.isAuthenticated = false;
        this.user = _services__WEBPACK_IMPORTED_MODULE_2__["ANONYMOUS_USER"];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    ProfileComponent.prototype.activate = function () {
        var _this = this;
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processData(data); });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        this.imageSrc = this.user.avatarImageType + this.user.avatarImage;
        this.profileForm = this.fb.group({
            firstName: [this.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [this.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ProfileComponent.prototype.processData = function (data) {
        this.user = data;
        //this.profileForm.controls.firstName.setValue(this.user.firstName);  //.get('firstName').setValue(this.user.firstName);
        console.log(data);
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        // set the selected file.
        this.selectedFile = event.target.files[0];
        // set image on user
        console.log(this.selectedFile);
        // setup reader to read input.
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imageSrc = e.target.result;
            _this.user.avatarImage = e.target.result.split('base64,')[1];
            _this.user.avatarImageType = e.target.result.split(',')[0] + ',';
        };
        reader.readAsDataURL(this.selectedFile);
    };
    ProfileComponent.prototype.base64ToArrayBuffer = function (base64) {
        var binaryString = atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };
    ProfileComponent.prototype.submitHandler = function () {
        this.auth.updateProfile(this.user).subscribe(function (data) { console.log(data); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/responses/no-roles/no-roles.component.css":
/*!***********************************************************!*\
  !*** ./src/app/responses/no-roles/no-roles.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3BvbnNlcy9uby1yb2xlcy9uby1yb2xlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/responses/no-roles/no-roles.component.html":
/*!************************************************************!*\
  !*** ./src/app/responses/no-roles/no-roles.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  no-roles works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/responses/no-roles/no-roles.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/responses/no-roles/no-roles.component.ts ***!
  \**********************************************************/
/*! exports provided: NoRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRolesComponent", function() { return NoRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoRolesComponent = /** @class */ (function () {
    function NoRolesComponent() {
    }
    NoRolesComponent.prototype.ngOnInit = function () {
    };
    NoRolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-roles',
            template: __webpack_require__(/*! ./no-roles.component.html */ "./src/app/responses/no-roles/no-roles.component.html"),
            styles: [__webpack_require__(/*! ./no-roles.component.css */ "./src/app/responses/no-roles/no-roles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoRolesComponent);
    return NoRolesComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: ANONYMOUS_USER, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANONYMOUS_USER", function() { return ANONYMOUS_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger.service */ "./src/app/services/logger.service.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./src/app/enums/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ANONYMOUS_USER = {
    password: null,
    email: null,
    token: undefined,
    id: null,
    roles: [],
    avatarImage: null,
    avatarImageType: null,
    avatarBase64: null,
    firstName: null,
    lastName: null,
    isAdmim: false,
};
var AuthService = /** @class */ (function () {
    function AuthService(http, log) {
        this.http = http;
        this.log = log;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ANONYMOUS_USER);
        this.className = 'AuthService>';
        this.storagekey = 'loggedInUser';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = {
            headers: this.headers
        };
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.map(function (user) { return !!user.id; });
        this.isLoggedOut$ = this.isLoggedIn$.map(function (isLoggedIn) { return !isLoggedIn; });
    }
    // attempt to login.
    AuthService.prototype.login = function (email, password) {
        // set options
        return this.http.post('/api/Account/Login', { email: email, password: password }, this.options).shareReplay().do(function (user) { return console.log(user); });
    };
    /* call logout */
    AuthService.prototype.logout = function () {
        // remove the current user
        localStorage.removeItem(this.storagekey);
        // call logout service.
        this.http.get('/api/Account/Logout');
        this.log.addLog(new _models__WEBPACK_IMPORTED_MODULE_2__["Log"](ANONYMOUS_USER.id, _enums__WEBPACK_IMPORTED_MODULE_6__["LogType"].Error, this.className, 'logout', ''));
        this.subject.next(ANONYMOUS_USER);
    };
    AuthService.prototype.loginAsync = function (email, password) {
        var _this = this;
        var options = {
            headers: this.headers
        };
        this.http.post('/api/Account/Login', { email: email, password: password }, options).subscribe(function (user) { _this.broardcastUpdate(user); });
    };
    AuthService.prototype.broardcastUpdate = function (user) {
        this.subject.next(user);
        localStorage.setItem(this.storagekey, JSON.stringify(user));
    };
    AuthService.prototype.isUserLoggedIn = function () {
        var user = new _models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        //const isAutherticated = this.isAuthenticated().subscribe();
        //if (this.isLoggedIn$) {
        user = JSON.parse(localStorage.getItem(this.storagekey));
        return user != null;
        //}
    };
    AuthService.prototype.loggedInUser = function () {
        var user = new _models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        user = JSON.parse(localStorage.getItem(this.storagekey));
        return user;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.get('/api/Account/isAuthenticated', this.options);
    };
    AuthService.prototype.register = function (user) {
        var options = {
            headers: this.headers
        };
        return this.http.post('/api/Account/Login', { user: user }, options).shareReplay().do(function (u) { return console.log(u); });
    };
    AuthService.prototype.updateProfile = function (user) {
        var options = {
            headers: this.headers,
        };
        return this.http.put('/api/Account/UpdateProfile', JSON.stringify(user), options); //.shareReplay().do(u => console.log(u));
    };
    AuthService.prototype.decode = function () {
        var user = new _models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        user = JSON.parse(localStorage.getItem(this.storagekey));
        if (user == null) {
            return '';
        }
        return jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(user.token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(_http) {
        this._http = _http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    BlogService.prototype.getBlogs = function () {
        return this._http.get('/api/Blogs')
            .catch(this.handleError);
    };
    BlogService.prototype.getLatestPost = function () {
        return this._http.get('/api/Blogs/LatestPost')
            .catch(this.handleError);
    };
    BlogService.prototype.getPosts = function () {
        return this._http.get('/api/Blogs/Posts')
            .catch(this.handleError);
    };
    BlogService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    BlogService.prototype.uploadIamge = function (blogFile) {
        var options = {
            headers: this.headers
        };
        this._http.post('/api/FileUpload', blogFile).subscribe(function (result) { console.log(result); });
    };
    BlogService.prototype.createComment = function (comment) {
        var options = {
            headers: this.headers
        };
        return this._http.post('/api/Blogs/Comment', comment, options).catch(this.handleError); //.subscribe(didUpdate => console.log(didUpdate)).catch(this.handleError);
    };
    BlogService.prototype.deletePost = function (postId) {
        var options = {
            headers: this.headers
        };
        //const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
        return this._http.delete('/api/Blogs/Post/' + postId, options)
            .catch(this.handleError);
    };
    BlogService.prototype.createPost = function (post) {
        var options = {
            headers: this.headers
        };
        return this._http.post('/api/Blogs/Post', post, options).catch(this.handleError);
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = /** @class */ (function () {
    function DashboardService(_http) {
        this._http = _http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    DashboardService.prototype.getDashboard = function () {
        return this._http.get('/api/Dashboard')
            .catch(this.handleError);
    };
    DashboardService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: ANONYMOUS_USER, AuthService, UserService, StatsService, BlogService, LoggerService, DashboardService, VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANONYMOUS_USER", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["ANONYMOUS_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.service */ "./src/app/services/stats.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return _stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]; });

/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.service */ "./src/app/services/blog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/services/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]; });

/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]; });

/* harmony import */ var _vote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vote.service */ "./src/app/services/vote.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return _vote_service__WEBPACK_IMPORTED_MODULE_6__["VoteService"]; });










/***/ }),

/***/ "./src/app/services/logger.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/logger.service.ts ***!
  \********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggerService = /** @class */ (function () {
    function LoggerService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    LoggerService.prototype.addLog = function (log) {
        var options = {
            headers: this.headers
        };
        console.log('log:' + log);
        this.http.post('/api/Logs', log).subscribe();
    };
    LoggerService.prototype.getLogs = function () {
        return this.http.get('/api/Logs').catch(this.handleError).shareReplay().do(function (log) { return console.log(log); });
    };
    LoggerService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/services/stats.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stats.service.ts ***!
  \*******************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
        this.stats = [];
    }
    StatsService.prototype.getStats = function () {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = {
            headers: httpHeaders
        };
        return this.http.get('/api/SpeedTestResults')
            .catch(this.handleError);
    };
    StatsService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    StatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.options = {
            headers: this.httpHeaders
        };
        this.user = _auth_service__WEBPACK_IMPORTED_MODULE_2__["ANONYMOUS_USER"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    //  {
    //  email: null,
    //  id: null,
    //  password: null,
    //  roles: [],
    //  token: undefined,
    //  avatarImageBas64: null,
    //  firstName: null,
    //  lastName: null
    //}
    UserService.prototype.getUsers = function () {
        return this._http.get('/api/Account/Users')
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function () {
        return this._http.get('/api/Account/User')
            .catch(this.handleError);
    };
    UserService.prototype.getRoles = function () {
        return this._http.get('/api/Role/Roles')
            .catch(this.handleError);
    };
    UserService.prototype.addRole = function (role) {
    };
    UserService.prototype.deleteRole = function (role) {
    };
    UserService.prototype.addUser = function (user) {
    };
    UserService.prototype.deleteUser = function (user) {
    };
    //addUserToRole(userName: string, role: string) {
    //}
    UserService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/vote.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/vote.service.ts ***!
  \******************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoteService = /** @class */ (function () {
    function VoteService(_http) {
        this._http = _http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = {
            headers: this.headers
        };
    }
    VoteService.prototype.getVote = function (vote) {
        return this._http.post('/api/Votes/MyVote', vote, this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.addVote = function (vote) {
        return this._http.post('/api/Votes', vote, this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.getAllVotes = function () {
        return this._http.get('/api/Votes', this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    VoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VoteService);
    return VoteService;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\r\n  color: hotpink;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaGVhcnQge1xyXG4gIGNvbG9yOiBob3RwaW5rO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar mt-5 fixed-bottom\">\r\n  <div class=\"navbar-expand m-auto navbar-text\">\r\n    Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://twitter.com/beeman_nl\">Netmonster</a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar mb-5\">\r\n  <a class=\"navbar-brand\" href=\"/\">My Network Stats</a>\r\n  <div class=\"navbar-expand mr-auto\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link active\" [routerLink]=\"['/']\">Home</a>\r\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/stats']\">Stats</a>\r\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/blog']\">Blog</a>\r\n      <a *ngIf=\"user.isAdmin\" class=\"nav-item nav-link\" [routerLink]=\"['/admin']\">Admin</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"navbar-expand ml-auto navbar-nav\">\r\n    <div class=\"navbar-nav\">\r\n      <div class=\"row\" *ngIf=\"user.id\">\r\n        <div class=\"col-sm-2\">\r\n          <img class=\"img-cir\" [src]=\"user.avatarBase64 \" alt=\"Avatar\" style=\"width:25px\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <a [routerLink]=\"['/profile']\" class=\"nav-item nav-link\">Welcome, {{user.firstName}}</a>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <button *ngIf=\"user.id\" (click)=\"logout()\" class=\"btn btn-danger\">SignOut </button>\r\n        </div>\r\n      </div>\r\n      <a *ngIf=\"!user.id\" class=\"nav-item nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      <!--<a [routerLink]=\"['/login']\" *ngIf=\"!user.email\" class=\"nav-item nav-link\">Login</a>\r\n  <a class=\"nav-item nav-link\" href=\"https://github.com/beeman\" target=\"_blank\">\r\n    <i class=\"fa fa-github\"></i>\r\n  </a>\r\n  <a class=\"nav-item nav-link\" href=\"https://twitter.com/beeman_nl\" target=\"_blank\">\r\n    <i class=\"fa fa-twitter\"></i>\r\n  </a>\r\n  <a class=\"nav-item nav-link\" href=\"https://medium.com/@beeman\" target=\"_blank\">\r\n    <i class=\"fa fa-medium\"></i>\r\n  </a>-->\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService, auth, router, route) {
        this._userService = _userService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.isAuthenticated = false;
        this.user = _services__WEBPACK_IMPORTED_MODULE_1__["ANONYMOUS_USER"];
        //  {
        //  email: null,
        //  id: null,
        //  password: null,
        //  roles: [],
        //  token: undefined,
        //  avatarImageBas64: null,
        //  firstName: null,
        //  lastName: null
        //}
        //user$: Observable<User>;
        this.isLoggedIn = false;
        this.isLoggedOut = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isAuthenticated().subscribe(function (data) {
            _this.isAuthenticated = data;
            _this.activate();
        });
    };
    HeaderComponent.prototype.activate = function () {
        var _this = this;
        if (!this.isAuthenticated) {
            this.auth.logout();
        }
        // check if user is logged in.
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processData(data); });
        this.auth.isLoggedIn$.subscribe(function (isLoggedIn) { return _this.isLoggedIn === isLoggedIn; });
        this.auth.isLoggedOut$.subscribe(function (isLoggedOut) { return _this.isLoggedOut === isLoggedOut; });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
        }
        else {
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigateByUrl('login');
    };
    HeaderComponent.prototype.processData = function (data) {
        this.user = data;
        if (this.user.avatarImage) {
            this.user.avatarBase64 = this.user.avatarImageType + this.user.avatarImage;
        }
        else {
            this.user.avatarBase64 = '/assets/user.png';
        }
        console.log(data);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/layout/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/stats/index.ts":
/*!********************************!*\
  !*** ./src/app/stats/index.ts ***!
  \********************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.component */ "./src/app/stats/stats.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return _stats_component__WEBPACK_IMPORTED_MODULE_0__["StatsComponent"]; });




/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stats.length > 0\">\r\n  <ul>\r\n    <li *ngFor=\"let item of stats; let i = index\">\r\n      <div>\r\n        {{item.upload}} | {{item.download}} | {{item.ping}}\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsComponent = /** @class */ (function () {
    function StatsComponent(_stat) {
        this._stat = _stat;
        this.stats = [];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.activate();
    };
    StatsComponent.prototype.activate = function () {
        var _this = this;
        // call service and pass in the username and password.
        // retuns a token. gets
        this._stat.getStats().subscribe(function (data) { return _this.stats = data; });
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["StatsService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\pi\speedtest\NetworkMonitor\NetworkMonitorApi\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map