import {Component, ElementRef} from '@angular/core';
import {Subject} from "./subject/models/subject.model";
import {of} from "rxjs";
import {SubjectService} from "./subject/subject.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  // @ts-ignore
  subject: Subject;
  subjectList: Subject[] = [];
  subjects = of([]);
  numberOfSubjects: number = 0;

  constructor(private elementRef:ElementRef, private subjectService:SubjectService) {
    this.subjectList = [];
  }


  ngOnInit(): void {
    this.subjectList = [];
    this.synchronizeSubjects();
    let d1 = this.elementRef.nativeElement.querySelector('.one');
    d1.insertAdjacentHTML('beforeend',"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2HevdEu3EMM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");

  }

  synchronizeSubjects(): void {
    // @ts-ignore
    this.subjects = this.subjectService.searchAll();
  }
}
