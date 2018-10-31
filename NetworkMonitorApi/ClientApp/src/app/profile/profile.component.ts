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
    avatarImage: null,
    firstName: null,
    lastName: null
  };

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.isLoggedIn = this.auth.isUserLoggedIn();
    this.auth.user$.subscribe(data => this.processData(data));

    if (this.isLoggedIn) {
      this.user = this.auth.loggedInUser();
      var a = false;
    }
   
  }

  processData(data: User) {
    this.user = data;
    console.log(data);
  }

  onFileSelected(event) {
    // set the selected file.
    this.selectedFile = <File>event.target.files[0];
    // set image on user


    console.log(this.selectedFile);
    // setup reader to read input.
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
      this.user.avatarImage = e.target.result;
    };

    reader.readAsDataURL(this.selectedFile);

  }

  submitHandler() {
    var u = this.user;
    this.formData = new FormData();
    this.formData.append("AvatarImage", this.user.avatarImage);
    this.formData.append("FirstName", this.user.firstName);
    this.formData.append("LastName", this.user.lastName);
    this.formData.append("FirstName", this.user.firstName);
    this.formData.append("Email", this.user.email);
    this.auth.updateProfile(this.user).subscribe(data => { console.log(data) });
  }

}
