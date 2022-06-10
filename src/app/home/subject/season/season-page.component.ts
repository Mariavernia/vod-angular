import {Component, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Season} from "../models/season.model";
import {Video} from "../models/video.model";
import {VideoService} from "../video/video.service";



@Component({
  selector: 'season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent{
  seasonControl = new FormControl();
  // @ts-ignore
  season: Season;
  videoList: Video[] = [];
  links: string[] = [];
  //videos = of([]);

  constructor(private videoService:VideoService, private elementRef:ElementRef, private renderer: Renderer2) {
  }

  @Input()
  set data(data: Season) {
    console.log("Ha llegado los datooos: "+data.name);
    this.season = data;
    this.getVideos();
    this.synchronizeLinks();
    for(let i = 0; i< this.videoList.length; i++){
      //this.renderer.setAttribute(this.elementRef.nativeElement, 'class', this.videoList[i].name);
      this.elementRef.nativeElement.querySelector('.'+this.videoList[i].name)
        .insertAdjacentHTML('beforeend', this.videoList[i].link);
    }
  }

  getVideos() {
    console.log("videitoosss");
    console.log("VIDEOS SEASON REFERENCE: " + this.season.reference);
    this.videoService.getVideosBySeason(this.season.reference)
      .subscribe(items => {
        this.videoList = items;
      });
  }

  synchronizeLinks() {
    this.videoList.forEach(video => this.links.concat(video.link))
  }
}
