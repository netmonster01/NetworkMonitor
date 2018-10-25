import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Role } from '../models/role';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user: User;
  email: string;
  password: string;

  ngOnInit() {
    // this.user.userName = '';
    this.user = {
      id: undefined,
      email: '',
      password: '',
      token: undefined,
      roles: []

    }
    // this.user = new User
  }

  login() {
    //this.auth.user = this.user;
    this.auth.login(this.email, this.password)
      .subscribe(data => this.user = data, console.error);
    //alert('clicked');
  }
}
