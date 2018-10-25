import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private _usersService: UserService) { }
  Roles: Role[] = [];

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this._usersService.getRoles().subscribe((data: Role[]) => this.popData(data));
  }

  popData(roles: Role[]) {
    console.log(roles);
    this.Roles = roles;
  }
}
