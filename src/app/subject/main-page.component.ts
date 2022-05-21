import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'subject-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
