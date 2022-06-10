import {Component, Input, OnInit} from "@angular/core";
import {Subject} from "./models/subject.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {SubjectPageComponent} from "./subject-page.component";

@Component({
  selector: 'subject-case',
  templateUrl: './subject-case.component.html',
  styleUrls: ['./subject-case.component.css']
})
export class SubjectCaseComponent {

  // @ts-ignore
  subjectList: Subject[] = [];


  constructor(private router: Router) {
  }

  @Input()
  set data(data: Observable<any>) {
    data.subscribe(dataValue =>{
      this.subjectList = dataValue;
    })
  }

  onClick(subject: Subject) {
    console.log("ha entrado: "+ subject.reference)
    this.router.navigate(["/subject/" + subject.reference + '/' + subject.name]);
    //this.subjectPage.getData(subject);
  }
}
