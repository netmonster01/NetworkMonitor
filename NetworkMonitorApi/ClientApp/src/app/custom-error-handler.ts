import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ErrorDialogComponent } from './dialogs';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggerService, AuthService, ANONYMOUS_USER } from './services';

import * as StackTrace from 'stacktrace-js';
import { Log, User } from "./models";

@Injectable()
export class ApplicationErrorHandler implements ErrorHandler {

  user: User = ANONYMOUS_USER;

  constructor(private injector: Injector, private dialog: MatDialog, private logger: LoggerService, private auth: AuthService) {
   
  }

  handleError(error: any): void {

    //const loggingService = this.injector.get(LoggingService);
    const location = this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy
      ? location.path() : '';
    // get the stack trace, lets grab the last 10 stacks only
    StackTrace.fromError(error).then(stackframes => {
      const stackString = stackframes
        .splice(0, 20)
        .map(function (sf) {
          return sf.toString();
        }).join('\n');
      // log on the server
      // get user.
      this.user = this.auth.loggedInUser();

      this.openDialog({ message: message, url: url, stack: stackString, userId: this.user.id });
    });
  }

  //addError(error: ApplicationError) {
  //  //this.errors.push(error);
  //  this.openDialog(error);
  //}

  openDialog(error) {

    const log = new Log();

    log.source = error.url;
    log.logType = 0;
    log.message = "message: " + error.message + " stack:" + error.stack;
    log.userId = error.userId;

    this.logger.addLog(log);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      hasBackdrop: false,
      width: '500px'
    };

    const dialogRef = this.dialog.open(ErrorDialogComponent, { width: '300px', hasBackdrop: false, data: error });

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }
}
