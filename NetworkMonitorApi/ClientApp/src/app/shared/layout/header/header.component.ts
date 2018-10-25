import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { User } from '../../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService: UserService) { }

  user: User = {
    email: null,
    id: undefined,
    password: null,
    roles: [],
    token: null
  }

  ngOnInit() {
    this.activate();
  }

  activate() {
    this._userService.getUser().subscribe((data: User) => this.popData(data));
  }

  popData(data: User): any {
    this.user = data;
  }
}
