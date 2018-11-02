import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService: UserService) { }

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
    for (let entry of this.Users) {
      entry.avatarBase64 = entry.avatarImageType + entry.avatarImage;
    }
  }

}
