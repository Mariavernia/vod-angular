import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubjectCaseComponent} from "./subject/subject-case.component";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {RegisterDialogComponent} from "./users/register-dialog.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginDialogComponent},
  {path: 'register', component: RegisterDialogComponent},
  {path: 'subject', component: SubjectCaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
