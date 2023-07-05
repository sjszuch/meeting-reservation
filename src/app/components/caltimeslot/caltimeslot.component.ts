import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-caltimeslot',
  templateUrl: './caltimeslot.component.html',
  styleUrls: ['./caltimeslot.component.scss']
})
export class CaltimeslotComponent {
  @Input() marker!: string;

  @Input() time!: string;

  // push a value to an array in the parent component
  @Output() timeSelected = new EventEmitter<any>();


  isClicked = false;

  toggleButton() {
    this.isClicked = !this.isClicked;
    this.timeSelected.emit(this.time);

  }
  



}




