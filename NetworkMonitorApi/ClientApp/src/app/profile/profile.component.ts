import { Component, OnInit } from '@angular/core';
import {User} from '../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ANONYMOUS_USER} from '../services';
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

 

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  user: User = ANONYMOUS_USER;
  //  {
  //  password: null,
  //  email: null,
  //  token: undefined,
  //  id: null,
  //  roles: [],
  //  avatarImageBas64: null,
  //  firstName: null,
  //  lastName: null
  //};
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
      this.user.avatarImage = this.base64ToArrayBuffer(e.target.result.split('base64,')[1]);
    };

    reader.readAsDataURL(this.selectedFile);
    //reader.readAsArrayBuffer(this.selectedFile);

    //const r = new FileReader();
    //r.onload = (e: any) => {
    //  this.imageSrc = e.target.result;
    //  this.user.avatarImageBas64 = e.target.result;
    //};

    //r.readAsArrayBuffer(this.selectedFile);

  }
  base64ToArrayBuffer(base64) {
    var binaryString = atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }
  submitHandler() {
    var u = this.user;
    //this.formData = new FormData();
    //this.formData.append("AvatarImage", this.user.avatarImage);
    //this.formData.append("FirstName", this.user.firstName);
    //this.formData.append("LastName", this.user.lastName);
    //this.formData.append("FirstName", this.user.firstName);
    //this.formData.append("Email", this.user.email);
    this.auth.updateProfile(this.user).subscribe(data => { console.log(data) });
  }

}
