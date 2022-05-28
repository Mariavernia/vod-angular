import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubjectPageComponent} from "./subject/subject-page.component";
import {LoginDialogComponent} from "./users/login-dialog.component";
import {RegisterDialogComponent} from "./users/register-dialog.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginDialogComponent},
  {path: 'register', component: RegisterDialogComponent},
  {path: 'subject', component: SubjectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
