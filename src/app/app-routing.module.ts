import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginDialogComponent} from "./users/login-dialog.component";
import {RegisterDialogComponent} from "./users/register-dialog.component";
import {SubjectPageComponent} from "./home/subject/subject-page.component";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./home/main/main.component";
import {SeasonPageComponent} from "./home/subject/season/season-page.component";
import {SubjectCaseComponent} from "./home/subject/subject-case.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home',
    component: HomeComponent,
    children: [
    ]
  },
  {path: 'subject/:id/:name',
    component: SubjectPageComponent,
    children: [
      {path: 'season/:id', component: SeasonPageComponent},
    ]
  },
  {path: 'login', component: LoginDialogComponent},
  {path: 'register', component: RegisterDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
