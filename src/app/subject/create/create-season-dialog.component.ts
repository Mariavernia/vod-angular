import {Component, Inject, OnInit} from "@angular/core";
import {Season} from "../season.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SubjectService} from "../subject.service";
import {SeasonService} from "../season.service";
import {Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  templateUrl: 'create-season-dialog.component.html',
  styleUrls: ['../../share/dialog.component.css']
})
export class CreateSeasonDialogComponent implements OnInit{

  seasons: Season[] = [];
  // @ts-ignore
  subjectReferenceList: Observable<String[]>;
  subjectReferences: String[]= [];

  subjectControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data:Season, private subjectService:SubjectService,
              public dialogRef: MatDialogRef<CreateSeasonDialogComponent>, private seasonService:SeasonService) {
  }

  ngOnInit(): void {
    this.getAllSubjectReferences();
  }

  onSubmit() {
    this.dialogRef.close();
    this.data.subjectReference = this.subjectControl.value;
    this.seasonService.create(this.data)
      .subscribe(season => this.seasons.push(season));
  }

  getAllSubjectReferences() {
    this.subjectReferenceList = this.subjectService.getAllSubjectsReferences();
    this.subjectReferenceList
      .subscribe(dataValue => {
        for(let data of dataValue){
          this.subjectReferences = data.toString().split(",");
        }
      });
  }


}
