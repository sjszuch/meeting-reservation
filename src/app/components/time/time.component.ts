import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  selectedValue!: string;

  times = [
    {value: 'eight-am', viewValue: '8am'},
    {value: 'nine-am', viewValue: '9am'},
    {value: 'ten-am', viewValue: '10am'},
    {value: 'eleven-am', viewValue: '11am'},
    {value: 'twelve-pm', viewValue: '12pm'},
    {value: 'one-pm', viewValue: '1pm'},
    {value: 'two-pm', viewValue: '2pm'},
    {value: 'three-pm', viewValue: '3pm'},
    {value: 'four-pm', viewValue: '4pm'},
    {value: 'five-pm', viewValue: '5pm'}
  ];


  // Slider

  formatLabel(value: number): string {
    return `${value}`;
  }

}
