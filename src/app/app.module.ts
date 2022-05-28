import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from "./users/register-dialog.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {SubjectPageComponent} from "./subject/subject-page.component";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {CreateSubjectDialogComponent} from "./subject/create-subject-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SubjectService} from "./subject/subject.service";
import {HomeService} from "./home/home.service";
import {HttpService} from "./core/http.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MessageService} from "./core/message.service";
import {HttpErrorHandler} from "./core/http-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateSubjectDialogComponent,
    HomeComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    SubjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    ScrollingModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    SubjectService,
    HomeService,
    HttpService,
    MessageService,
    HttpErrorHandler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
