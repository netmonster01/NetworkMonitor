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
import { AuthService } from '../services';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.isLoggedIn = false;
        this.imageSrc = '/assets/user.png';
        this.user = {
            password: null,
            email: null,
            token: undefined,
            id: null,
            roles: [],
            avatarImage: null
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
        });
        this.isLoggedIn = this.auth.isUserLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            var a = false;
        }
        else {
            this.auth.user$.subscribe(function (data) { return _this.processData(data); });
        }
    };
    ProfileComponent.prototype.processData = function (data) {
        this.user = data;
        console.log(data);
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
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