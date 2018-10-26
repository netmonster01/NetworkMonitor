import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '../../../services';
import { User } from '../../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService: UserService, private auth: AuthService) { }

  user: User = {
    email: null,
    id: null,
    password: null,
    roles: [],
    token: undefined
  }

  //user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  ngOnInit() {
    this.activate();
  }

  activate() {
    this.auth.user$.subscribe(data => this.processData(data));
    //this.isLoggedIn$ = this.auth.isLoggedIn$.subscribe();
    //this.isLoggedOut$ = this.auth.isLoggedOut$;
    //this._userService.getUser().subscribe((data: User) => this.popData(data));
  }

  processData(data: User) {
    this.user = data;
    console.log(data);
  }
}
