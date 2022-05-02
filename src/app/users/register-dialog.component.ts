import {Component} from '@angular/core';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
@Component({
  templateUrl: 'register-dialog.component.html',
  styleUrls: ['user-dialog.component.css']
})
export class RegisterDialogComponent {

  faEnvelope = faEnvelope;
  constructor() {
  }
}
