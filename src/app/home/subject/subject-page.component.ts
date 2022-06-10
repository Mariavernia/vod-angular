import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "./models/subject.model";
import {SubjectService} from "./subject.service";
import {SeasonService} from "./season/season.service";
import {VideoService} from "./video/video.service";
import {Observable} from "rxjs";
import {Season} from "./models/season.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent implements OnInit{

  seasonsList: Season[] = [];
  //subject: Subject;
  title: string = "";
  // @ts-ignore
  selectedSeason: Season;
  // @ts-ignore
  activeSeason: Season;
  // @ts-ignore
  getedSeasons: Observable<Season[]>

  constructor(private route: ActivatedRoute, private subjectService:SubjectService,
              private seasonService:SeasonService, private videoService: VideoService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['name'];
    this.getSeasons(id);
    console.log("la lista de sesions: "+ this.seasonsList.length);
    this.activeSeason = this.seasonsList[0];

  }

  getSeasons(subjectReference: String){
    console.log("Ha llegado la referencia: "+ subjectReference);
    this.seasonService.getSeasonsBySubject(subjectReference)
      .subscribe(dataValue => {
        dataValue.forEach( data => {
          this.seasonsList.push(data);
        })
      });

  }



}
