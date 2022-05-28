import {Component, Input, OnInit} from "@angular/core";
import {Subject} from "./subject.model";
import {Observable} from "rxjs";

@Component({
  selector: 'subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent {

  // @ts-ignore
  subjectList: Subject[] = [];

  @Input()
  set data(data: Observable<any>) {
    data.subscribe(dataValue =>{
      this.subjectList = dataValue;
    })
  }
}
