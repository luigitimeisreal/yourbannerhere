import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  @Input() textError = "";
}
