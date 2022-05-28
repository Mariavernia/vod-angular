import {Component, Input, OnInit} from "@angular/core";
import {Subject} from "./subject.model";
import {Observable} from "rxjs";

@Component({
  selector: 'subject-case',
  templateUrl: './subject-case.component.html',
  styleUrls: ['./subject-case.component.css']
})
export class SubjectCaseComponent {

  // @ts-ignore
  subjectList: Subject[] = [];

  @Input()
  set data(data: Observable<any>) {
    data.subscribe(dataValue =>{
      this.subjectList = dataValue;
    })
  }

  onClick() {

  }
}
