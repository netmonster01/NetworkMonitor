import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { User, Role } from '../models';


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
      id: null,
      email: null,
      password: null,
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
