import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subject} from "../subject.model";
import {SubjectService} from "../subject.service";

@Component({
  templateUrl: 'create-subject-dialog.component.html',
  styleUrls: ['../../share/dialog.component.css']
})
export class CreateSubjectDialogComponent {

  subjects: Subject[] = [];
  author0: string = "";
  author1: string = "";
  author2: string = "";

  value: number = 1;
  constructor(public dialogRef: MatDialogRef<CreateSubjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:Subject,
              public subjectService: SubjectService) {
  }

  onSubmit(): void {
    this.addAuthor();
    let subject0 = this.subjectService.create(this.data)
      .subscribe(subject => this.subjects.push(subject));
    console.log('Subject: ', subject0);
    this.dialogRef.close();
  }

  addAuthor(): void {
    if(this.author0 != ""){
      console.log("author 1")
      this.data.authors = this.author0
    }
    if(this.author1 != ""){
      console.log("author 4")
      this.data.authors.concat(this.author1)
    }
    if(this.author2 != ""){
      console.log("author 3")
      this.data.authors.concat(this.author2)
    }
  }
}


