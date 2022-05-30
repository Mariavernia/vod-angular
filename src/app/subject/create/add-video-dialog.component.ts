import {Component, Inject, OnInit} from "@angular/core";
import {Video} from "../video.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Season} from "../season.model";
import {SubjectService} from "../subject.service";
import {SeasonService} from "../season.service";


@Component({
  templateUrl: 'add-video-dialog.component.html',
  styleUrls: ['../../share/dialog.component.css']
})
export class AddVideoDialogComponent implements OnInit{

  videos: Video[] = [];
  seasonReferences: String[]= [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:Video, private seasonService:SeasonService,
              public dialogRef: MatDialogRef<AddVideoDialogComponent>) {
  }

  ngOnInit(): void {
    this.getAllSeasonReferences();
  }

  getAllSeasonReferences() {
    // @ts-ignore
    this.seasonService.getAllSeasonReferences()
      .subscribe(dataValue => {
        this.seasonReferences = dataValue;
      })
  }

  onSubmit() {
    this.dialogRef.close();

  }
}
