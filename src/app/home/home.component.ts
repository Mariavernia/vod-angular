import {Component, ElementRef, OnInit} from '@angular/core';
import {Subject} from "../subject/subject.model";
import {SubjectService} from "../subject/subject.service";
import {of} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    var d1 = this.elementRef.nativeElement.querySelector('.one');
    d1.insertAdjacentHTML('beforeend',"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2HevdEu3EMM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");

  }

  synchronizeSubjects(): void {
    // @ts-ignore
    this.subjects = this.subjectService.searchAll();
  }




}
