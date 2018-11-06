var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ErrorDialogComponent } from './dialogs';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggerService, AuthService, ANONYMOUS_USER } from './services';
import * as StackTrace from 'stacktrace-js';
import { Log } from "./models";
import { LogType } from "./enums";
var ApplicationErrorHandler = /** @class */ (function () {
    function ApplicationErrorHandler(injector, dialog, logger, auth) {
        this.injector = injector;
        this.dialog = dialog;
        this.logger = logger;
        this.auth = auth;
        this.user = ANONYMOUS_USER;
    }
    ApplicationErrorHandler.prototype.handleError = function (error) {
        var _this = this;
        //const loggingService = this.injector.get(LoggingService);
        var location = this.injector.get(LocationStrategy);
        var message = error.message ? error.message : error.toString();
        var url = location instanceof PathLocationStrategy
            ? location.path() : '';
        // get the stack trace, lets grab the last 10 stacks only
        StackTrace.fromError(error).then(function (stackframes) {
            var stackString = stackframes
                .splice(0, 20)
                .map(function (sf) {
                return sf.toString();
            }).join('\n');
            // log on the server
            // get user.
            _this.user = _this.auth.loggedInUser();
            var usr = 'ANONYMOUS_USER';
            if (_this.user != null) {
                usr = _this.user.id;
            }
            _this.openDialog({ message: message, url: url, stack: stackString, userId: usr });
        });
    };
    //addError(error: ApplicationError) {
    //  //this.errors.push(error);
    //  this.openDialog(error);
    //}
    ApplicationErrorHandler.prototype.openDialog = function (error) {
        var log = new Log(error.userId, LogType.Error, error.url, 'Message: ${error.message} stack: ${error.stack}', '');
        //log.source = error.url;
        //log.logType = 0;
        //log.message = "message: " + error.message + " stack:" + error.stack;
        //log.userId = error.userId;
        this.logger.addLog(log);
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(ErrorDialogComponent, { width: '500px', hasBackdrop: false, data: error });
        dialogRef.afterClosed().subscribe(function (data) { return console.log('Dialog output:', data); });
    };
    ApplicationErrorHandler = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector, MatDialog, LoggerService, AuthService])
    ], ApplicationErrorHandler);
    return ApplicationErrorHandler;
}());
export { ApplicationErrorHandler };
//# sourceMappingURL=custom-error-handler.js.map