import { Component, OnInit } from '@angular/core';
import {User} from '../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  selectedFile: File;
  formData: FormData;
  isLoggedIn: boolean = false;
  imageSrc = '/assets/user.png';
  profileForm: FormGroup;

  user: User = {
    password: null,
    email: null,
    token: undefined,
    id: null,
    roles: [],
    avatarImage: null
  };

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.isLoggedIn = this.auth.isUserLoggedIn();

    if (this.isLoggedIn) {
      this.user = this.auth.loggedInUser();
      var a = false;
    }
    else {
      this.auth.user$.subscribe(data => this.processData(data));
    }
  }

  processData(data: User) {
    this.user = data;
    console.log(data);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}
