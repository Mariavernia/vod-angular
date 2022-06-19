import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "./user.service";
import {UserRegister} from "./userRegister.model";
import {User} from "./user.model";
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['../share/dialog.component.css']
})
export class LoginDialogComponent {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, public userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data:UserRegister, private router: Router) {
  }


  onSubmit() {
    console.log("On submit: " + this.data.email);
    this.userService.login(this.data).subscribe(
      () => {
        if (this.userService.untilOperator()) {
          this.router.navigate(['home']).then()
            .finally(() => this.dialogRef.close())
        } else {
          this.dialogRef.close()
        }
      }
    );
    this.dialogRef.close();
  }
}
