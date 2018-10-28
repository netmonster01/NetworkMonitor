import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

export const ANONYMOUS_USER: User = {
  password: null,
  email: null,
  token: undefined,
  id: null,
  roles: []
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { }
 

  // attempt to login.
  login(email:string, password:string) {
    
    // set options
    let options = {
      headers: this.headers
    };
     
    return this.http.post<User>('/api/Account/Login', { email, password }, options).shareReplay().do(user => console.log(user));
  }

  /* call logout */
  logout() {

    // remove the current user
    localStorage.removeItem('currentUser');

    // call logout service.
    this.http.get('/api/Account/Logout');
  }

  loginAsync(email: string, password: string) {
 
    let options = {
      headers: this.headers
    };

    this.http.post<User>('/api/Account/Login',
      { email, password },
      options).subscribe(user => { this.broardcastUpdate(user) });
  }

  broardcastUpdate(user: User) {
    this.subject.next(user)
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  isUserLoggedIn() {

  }

  register(user: User) {

    let options = {
      headers: this.headers
    };

    return this.http.post<User>('/api/Account/Login', { user }, options).shareReplay().do(user => console.log(user));
  }
}
