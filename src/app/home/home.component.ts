import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterDialogComponent} from "../users/register-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  register(): void {
   this.dialog.open(RegisterDialogComponent)
  }
}
