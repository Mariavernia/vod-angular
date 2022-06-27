import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectPageComponent} from "./home/subject/subject-page.component";
import {HomeComponent} from "./home/home.component";
import {SeasonPageComponent} from "./home/subject/season/season-page.component";
import {RoleGuardService} from "./core/role-guard.service";
import {Role} from "./users/role.model";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home',
    component: HomeComponent,
    //canActivate:[RoleGuardService],
    //data: {roles: [Role.PROFESSOR, Role.STUDENT, Role.ADMIN]},
    children: [
    ]
  },
  {path: 'subject/:id/:name',
    component: SubjectPageComponent,
    canActivate:[RoleGuardService],
    data: {roles: [Role.PROFESSOR, Role.STUDENT, Role.ADMIN]},
    children: [
      {path: 'season/:id', component: SeasonPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
