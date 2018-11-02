import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ANONYMOUS_USER } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  user: User = ANONYMOUS_USER;

  constructor(private auth: AuthService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    // this.description = data.description;
  }

  form: FormGroup;
  description: string;

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]});
  }

  save() {

    this.user.email = this.form.controls.email.value;
    this.user.firstName = this.form.controls.firstName.value;
    this.user.lastName = this.form.controls.lastName.value;
    this.dialogRef.close(this.user);
  }

  close() {
    this.dialogRef.close();
  }

}
