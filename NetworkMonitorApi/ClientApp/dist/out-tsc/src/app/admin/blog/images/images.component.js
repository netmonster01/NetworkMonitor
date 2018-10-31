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
import { BlogService } from '../../../services';
import { FormBuilder, Validators } from '@angular/forms';
var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(blogService, fb) {
        this.blogService = blogService;
        this.fb = fb;
        this.formGroup = this.fb.group({
            file: [null, Validators.required]
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
        Component({
            selector: 'app-images',
            templateUrl: './images.component.html',
            styleUrls: ['./images.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, FormBuilder])
    ], ImagesComponent);
    return ImagesComponent;
}());
export { ImagesComponent };
//# sourceMappingURL=images.component.js.map