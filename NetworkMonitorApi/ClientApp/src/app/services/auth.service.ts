import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import decode from 'jwt-decode';

export const ANONYMOUS_USER: User = {
  password: null,
  email: null,
  token: undefined,
  id: null,
  roles: [],
  avatarImage: null,
  firstName: null,
  lastName: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  storagekey = 'loggedInUser';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  options = {
    headers: this.headers
  };
  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { }

  // attempt to login.
  login(email: string, password: string) {
    // set options

    return this.http.post<User>('/api/Account/Login', { email, password }, this.options).shareReplay().do(user => console.log(user));
  }

  /* call logout */
  logout() {

    // remove the current user
    localStorage.removeItem(this.storagekey );

    // call logout service.
    this.http.get('/api/Account/Logout');
  }

  loginAsync(email: string, password: string) {

    const options = {
      headers: this.headers
    };

    this.http.post<User>('/api/Account/Login',
      { email, password },
      options).subscribe(user => { this.broardcastUpdate(user); });
  }

  broardcastUpdate(user: User) {

    this.subject.next(user);
    localStorage.setItem(this.storagekey , JSON.stringify(user));
  }

  isUserLoggedIn(): boolean {

    let user = new User();
    user = JSON.parse(localStorage.getItem(this.storagekey));
    var a = user != null;

    return user != null;
  }

  loggedInUser(): User {

    let user = new User();
    user = JSON.parse(localStorage.getItem(this.storagekey));

    return user;
  }

  isAuthenticated(): any {

    return this.http.get<boolean>('/api/Account/isAuthenticated', this.options);
  }

  register(user: User) {

    const options = {
      headers: this.headers
    };

    return this.http.post<User>('/api/Account/Login', { user }, options).shareReplay().do(u => console.log(u));
  }

  updateProfile(user: User) {

    const options = {
      headers: this.headers
    };

    return this.http.put<User>('/api/Account/UpdateProfile', JSON.stringify(user), options);//.shareReplay().do(u => console.log(u));
  }

  decode() {
    let user = new User();
    user = JSON.parse(localStorage.getItem(this.storagekey));
    return decode(user.token);
  }
}
