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

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { }
 

  // attempt to login.
  login(email:string, password:string) {
    url: '/api/Account/Login';
    const httpHeaders= new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = {
      headers: httpHeaders
    }; 
    return this.http.post<User>('/api/Account/Login', { email, password }, options).shareReplay().do(user => console.log(user));
  }

  register(user: User) {
    url: '/api/Account/Register';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = {
      headers: httpHeaders
    };
    return this.http.post<User>('/api/Account/Login', { user }, options).shareReplay().do(user => console.log(user));
  }
}
