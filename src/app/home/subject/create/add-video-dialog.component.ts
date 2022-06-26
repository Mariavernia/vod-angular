import {Component, Inject} from "@angular/core";
import {Video} from "../models/video.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SeasonService} from "../season/season.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {VideoService} from "../video/video.service";


@Component({
  templateUrl: 'add-video-dialog.component.html',
  styleUrls: ['../../../share/dialog.component.css']
})
export class AddVideoDialogComponent  {

  videos: Video[] = [];
  seasonReferences: string[]= [];
  // @ts-ignore
  seasonReferencesList: Observable<string[]>;
  seasonControl = new FormControl();


  constructor(@Inject(MAT_DIALOG_DATA) public data:Video, private seasonService:SeasonService,
              public dialogRef: MatDialogRef<AddVideoDialogComponent>, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.getAllSeasonReferences();
  }

  getAllSeasonReferences() {
    this.seasonReferencesList =  this.seasonService.getAllSeasonReferences();
    this.seasonReferencesList
      .subscribe(dataValue => {
        for (let data of dataValue) {
          this.seasonReferences = data.toString().split(",");
        }
      });
  }

  onSubmit() {
    this.dialogRef.close();
    this.data.seasonReference = this.seasonControl.value;
    this.videoService.create(this.data)
      .subscribe(video => this.videos.push(video));
  }
}
