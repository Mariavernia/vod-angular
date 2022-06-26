import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subject} from "../models/subject.model";
import {SubjectService} from "../subject.service";

@Component({
  templateUrl: 'create-subject-dialog.component.html',
  styleUrls: ['../../../share/dialog.component.css']
})
export class CreateSubjectDialogComponent {

  subjects: Subject[] = [];

  value: number = 1;
  constructor(public dialogRef: MatDialogRef<CreateSubjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:Subject,
              public subjectService: SubjectService) {
  }

  onSubmit(): void {
    console.log(this.data)
    this.subjectService.create(this.data)
      .subscribe(subject => this.subjects.push(subject));
    this.dialogRef.close();
  }

}


