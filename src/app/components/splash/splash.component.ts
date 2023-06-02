import { Component } from '@angular/core';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';




@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
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


  // Snackbar

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("Meeting reserved! 🎉", "Okay");
  }
}
