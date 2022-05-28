import {Component, Inject, OnInit} from "@angular/core";
import {Season} from "../season.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subject} from "../subject.model";
import {SubjectService} from "../subject.service";
import {of} from "rxjs";

@Component({
  templateUrl: 'create-season-dialog.component.html',
  styleUrls: ['../../share/dialog.component.css']
})
export class CreateSeasonDialogComponent implements OnInit{

  seasons: Season[] = [];
  subjectReferences: String[]= [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:Season, private subjectService:SubjectService,
              public dialogRef: MatDialogRef<CreateSeasonDialogComponent>) {
  }

  ngOnInit(): void {
    this.getAllSubjectReferences();
  }

  onSubmit() {
    this.dialogRef.close();

  }

  getAllSubjectReferences() {
    // @ts-ignore
    this.subjectService.getAllSubjectsReferences()
      .subscribe(dataValue => {
        this.subjectReferences = dataValue;
      })
  }


}
