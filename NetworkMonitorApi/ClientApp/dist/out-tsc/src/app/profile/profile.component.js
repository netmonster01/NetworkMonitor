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
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, ANONYMOUS_USER } from '../services';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.isLoggedIn = false;
        this.imageSrc = '/assets/user.png';
        this.isAuthenticated = false;
        this.user = ANONYMOUS_USER;
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
            firstName: [this.user.firstName, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            email: [this.user.email, Validators.required],
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
        var _this = this;
        this.auth.updateProfile(this.user).subscribe(function (data) { return _this.processData(data); });
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map