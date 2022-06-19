import {Component, Inject} from '@angular/core';
import {UserService} from "./user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserRegister} from "./userRegister.model";
import {Role} from "./role.model";

@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['../share/dialog.component.css']
})
export class RegisterDialogComponent {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>, public userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data:UserRegister) {
  }

  users: UserRegister[] = [];

  onSubmit() {
    console.log("On submit: " + this.data.email);
    this.userService.create(this.data)
      .subscribe(user => this.users.push(user));
    this.dialogRef.close();
  }
}
