import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from "./users/register-dialog.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {SubjectCaseComponent} from "./home/subject/subject-case.component";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {CreateSubjectDialogComponent} from "./home/subject/create/create-subject-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HomeService} from "./home/home.service";
import {HttpService} from "./core/http.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MessageService} from "./core/message.service";
import {HttpErrorHandler} from "./core/http-error-handler.service";
import {CreateSeasonDialogComponent} from "./home/subject/create/create-season-dialog.component";
import {AddVideoDialogComponent} from "./home/subject/create/add-video-dialog.component";
import {MatSelectModule} from '@angular/material/select';
import {SubjectPageComponent} from "./home/subject/subject-page.component";
import {MainComponent} from "./home/main/main.component";
import {SeasonPageComponent} from "./home/subject/season/season-page.component";
import {SubjectService} from "./home/subject/subject.service";
import {VideoService} from "./home/subject/video/video.service";
import {SeasonService} from "./home/subject/season/season.service";
import {PruebaCompenente} from "./home/subject/prueba.compenente";
import {MatTabsModule} from "@angular/material/tabs";
import {SafePipe} from "./home/subject/safe.pipe";

@NgModule({
  declarations: [
    AddVideoDialogComponent,
    AppComponent,
    CreateSeasonDialogComponent,
    CreateSubjectDialogComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    HomeComponent,
    MainComponent,
    SubjectCaseComponent,
    SeasonPageComponent,
    SubjectPageComponent,
    PruebaCompenente,
    SafePipe,
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
        MatSnackBarModule,
        MatSelectModule,
        MatTabsModule,
    ],
  providers: [
    HomeService,
    HttpService,
    MessageService,
    HttpErrorHandler,
    SubjectService,
    VideoService,
    SeasonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
