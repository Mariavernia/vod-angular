import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {RegisterDialogComponent} from "./users/register-dialog.component";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSubjectDialogComponent} from "./home/subject/create/create-subject-dialog.component";
import {CreateSeasonDialogComponent} from "./home/subject/create/create-season-dialog.component";
import {AddVideoDialogComponent} from "./home/subject/create/add-video-dialog.component";

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

  createNewSubject() {
    this.dialog.open(CreateSubjectDialogComponent, {
      data: {reference: " ",name: " ",description: " ",authorList: [" "," "," "]}
    })
  }

  createNewSeason() {
    this.dialog.open(CreateSeasonDialogComponent, {
      data: {reference: " ", name: " ", subjectReference: " "}
    })
  }

  addNewVideo() {
    this.dialog.open(AddVideoDialogComponent, {
      data: {name: " ", description: " ", link: " ", seasonReference: " "}
    })
  }
}
