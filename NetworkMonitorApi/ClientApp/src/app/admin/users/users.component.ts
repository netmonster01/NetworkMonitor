import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService: UserService) { }

  Users: User[] = []; 

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe((data: User[]) => this.popData(data));
  }

  popData(users: User[]) {
    console.log(users);
    this.Users = users;
  }

}
