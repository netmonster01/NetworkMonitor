import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatInputModule, MatSelectModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ANONYMOUS_USER, UserService } from '../../services';

@Component({
  selector: 'app-new-blog-dialog',
  templateUrl: './new-blog-dialog.component.html',
  styleUrls: ['./new-blog-dialog.component.css']
})
export class NewBlogDialogComponent implements OnInit {
    form: FormGroup;

  constructor(private auth: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewBlogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  close() {
    this.dialogRef.close();
  }
}
