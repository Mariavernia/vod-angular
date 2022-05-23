import {Component, Input, OnInit} from "@angular/core";
import {Subject} from "./subject.model";

@Component({
  selector: 'subject-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @Input() tittle = 'titulo';
  @Input() autor = 'Nombre Apellido'

}
