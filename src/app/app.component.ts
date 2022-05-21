import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {RegisterDialogComponent} from "./users/register-dialog.component";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'tfm-angular';
  constructor(private elementRef: ElementRef, private dialog: MatDialog) {
  }
  username = undefined;

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor= "#2c2c54" ;
  }

  register(): void {
    this.dialog.open(RegisterDialogComponent)
  }

  login(): void {
    this.dialog.open(LoginDialogComponent)
  }
}
