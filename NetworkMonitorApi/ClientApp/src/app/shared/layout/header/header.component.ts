import { Component, OnInit } from '@angular/core';
import { UserService, AuthService, ANONYMOUS_USER } from '../../../services';
import { User } from '../../../models';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private _userService: UserService, private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  user: User = ANONYMOUS_USER;
  //  {
  //  email: null,
  //  id: null,
  //  password: null,
  //  roles: [],
  //  token: undefined,
  //  avatarImageBas64: null,
  //  firstName: null,
  //  lastName: null
  //}

  //user$: Observable<User>;
  isLoggedIn: boolean = false;
  isLoggedOut: boolean = false;

  ngOnInit() {
    this.activate();
  }

  activate() {

    // check if user is logged in.
    this.isLoggedIn = this.auth.isUserLoggedIn();

    this.auth.user$.subscribe(data => this.processData(data));
    this.auth.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn === isLoggedIn);
    this.auth.isLoggedOut$.subscribe(isLoggedOut => this.isLoggedOut === isLoggedOut);

    if (this.isLoggedIn) {
      this.user = this.auth.loggedInUser();
    }
    else {
     
    }

   
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

  processData(data: User) {

    this.user = data;
    if (this.user.avatarImage) {
      this.user.avatarBase64 = this.user.avatarImageType + this.user.avatarImage;
    }
    else {
      this.user.avatarBase64 = '/assets/user.png';
    }
    
    console.log(data);
  }
}
