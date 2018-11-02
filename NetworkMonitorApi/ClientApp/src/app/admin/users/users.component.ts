import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../services';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewUserDialogComponent } from '../../dialogs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService: UserService, private dialog: MatDialog) { }

  Users: User[] = [];
  userImage: string;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe((data: User[]) => this.popData(data));
  }

  popData(users: User[]) {
    console.log(users);
    this.Users = users;
    for (const entry of this.Users) {
      entry.avatarBase64 = entry.avatarImageType + entry.avatarImage;
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      hasBackdrop: false
    };

    this.dialog.open(NewUserDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(NewUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }
}
