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
import { Component, Inject, Injector } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
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
        Component({
            selector: 'app-error-dialog',
            templateUrl: './error-dialog.component.html',
            styleUrls: ['./error-dialog.component.css']
        }),
        __param(2, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Injector, MatDialogRef, Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());
export { ErrorDialogComponent };
//# sourceMappingURL=error-dialog.component.js.map