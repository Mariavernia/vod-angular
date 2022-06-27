import {Component} from '@angular/core';
import {Subject} from "./subject/models/subject.model";
import {of} from "rxjs";
import {SubjectService} from "./subject/subject.service";
import {Season} from "./subject/models/season.model";

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
  videosUPM:Season = {name: "Videos UPM", reference: "UPMvideos", subjectReference: ""};
  otrosVideos:Season = {name: "Otros videos", reference: "otrosVideos", subjectReference: ""};

  constructor(private subjectService:SubjectService) {
    this.subjectList = [];
  }


  ngOnInit(): void {
    this.subjectList = [];
    this.synchronizeSubjects();
  }

  synchronizeSubjects(): void {
    // @ts-ignore
    this.subjects = this.subjectService.searchAll();
  }
}
