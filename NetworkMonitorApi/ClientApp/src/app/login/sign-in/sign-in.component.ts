import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, AuthService } from '../../services';
import { User, Role } from '../../models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loading: boolean;
  success: boolean;
  signInForm : FormGroup;
  user: User = {
    password: null,
    email: null,
    token: undefined,
    id: null,
    roles: null
  }

  constructor(private fb: FormBuilder, private auth: AuthService) { }
  

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signInForm.valueChanges.subscribe(console.log);
  }

  async logInHandler() {
    this.loading = true;

    const formValue = this.signInForm.value;

    try {
      // todo call api.
      this.auth.login(this.user.email, this.user.password).subscribe((user: User) => this.user = user);
      this.success = true;
    } catch (err) {
      console.error(err)
    }

    this.loading = false;
  }

}
