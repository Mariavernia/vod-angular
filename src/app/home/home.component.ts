import {Component, OnInit} from '@angular/core';
import {Subject} from "../subject/subject.model";
import {Season} from "../subject/season.model";
import {Video} from "../subject/video.model";
import {User} from "../users/user.model";
import {Role} from "../users/role.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjectList: Subject[] = [];

  constructor() {
    this.subjectList = [];
  }


  ngOnInit(): void {
    this.subjectList = [];
    this.synchronizeSubjects();
  }

  synchronizeSubjects(): void {
    let video1: Video = {
      id: "jhwey", name: "video 1", description: "descr 1"
    };

    let season1: Season = {
      id: "a2w",
      name: "2016-2017",
      videoList: [video1]
    };
    let author1: User = {
      familyName: "apellido 1",
      firstName: "Autor 1",
      password: "wfqf",
      email: "autor1@gmail.com",
      role: Role.PROFESSOR
    };
    let author2: User = {
      familyName: "apellido 3",
      firstName: "Autor 1",
      password: "wfqf",
      email: "autor1@gmail.com",
      role: Role.PROFESSOR
    };
    let author3: User = {
      familyName: "apellido 2",
      firstName: "Autor 2",
      password: "wfqf",
      email: "autor1@gmail.com",
      role: Role.PROFESSOR
    };
    let subject1: Subject = {
      id: "234",
      name: "subject 1",
      description: "descripcion",
      seasonsList: [season1],
      authorList: [author1, author2, author3]
    };
    let subject2: Subject = {
      id: "234",
      name: "subject 2",
      description: "descripcion 2",
      seasonsList: [season1],
      authorList: [author1, author2]
    };
    this.subjectList = [subject1, subject2, subject1, subject1, subject1];
  }



}
