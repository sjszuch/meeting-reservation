import { Component } from '@angular/core';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';




@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  startTime!: string;

  times = [
    {value: '0600', viewValue: '6am'},
    {value: '0630', viewValue: '6:30am'},
    {value: '0700', viewValue: '7am'},
    {value: '0730', viewValue: '7:30am'},
    {value: '0800', viewValue: '8am'},
    {value: '0830', viewValue: '8:30am'},
    {value: '0900', viewValue: '9:am'},
    {value: '0930', viewValue: '9:30am'},
    {value: '1000', viewValue: '10am'},
    {value: '1030', viewValue: '10:30am'},
    {value: '1100', viewValue: '11am'},
    {value: '1130', viewValue: '11:30am'},
    {value: '1200', viewValue: '12pm'},
    {value: '1230', viewValue: '12:30am'},
    {value: '1300', viewValue: '1pm'},
    {value: '1330', viewValue: '1:30pm'},
    {value: '1400', viewValue: '2pm'},
    {value: '1430', viewValue: '2:30pm'},
    {value: '1500', viewValue: '3pm'},
    {value: '1530', viewValue: '3:30pm'},
    {value: '1600', viewValue: '4pm'},
    {value: '1630', viewValue: '4:30pm'},
    {value: '1700', viewValue: '5pm'},
    {value: '1730', viewValue: '5:30pm'},
    {value: '1800', viewValue: '6pm'},
    {value: '1830', viewValue: '6:30pm'},
  ];


  // Slider

  formatLabel(value: number): string {
    return `${value}`;
  }


  // Snackbar

  constructor(private _snackBar: MatSnackBar) {}


  // Variables for the form that include start date, name, time, and length
  startDate = new Date();
  name!: string;
  date!: string;
  length!: string;

  roomSelected = "Room 1";


  // An array of reservations called bookings that includes the date, time, and room number of each
  bookings = [
    {date: "Thu Jun 29 2023 00:00:00 GMT-0400 (Eastern Daylight Time)", time: "0800", room: "Room 1"},
    {date: "Thu Jun 29 2023 00:00:00 GMT-0400 (Eastern Daylight Time)", time: "1230", room: "Room 1"},
  ]

  Submit() {
   

    // Display the name, date, time, and length fields in the console
    console.log(this.name);
    console.log(this.date)
    console.log(this.startTime)
    console.log(this.length)
    console.log(this.bookings[0].date)
    console.log(this.bookings[0].time)
    console.log(this.bookings[0].room)
    console.log(this.roomSelected)
    


    // If any of the fields are empty, display an error message
    if (this.name == null || this.date == null || this.startTime == null || this.length == null) {
      this._snackBar.open("Please fill out all fields", "Okay");
    } else {

      var NotAvailable = false;
      for (var i = 0; i < this.bookings.length; i++) {
        if (this.bookings[i].date == this.date && this.bookings[i].time == this.startTime && this.bookings[i].room == this.roomSelected) {
          NotAvailable = true;
          console.log("Not available");
          this._snackBar.open("Unavailable", "Okay");
          console.log(this.bookings[i].date)
          
          break;
        } 
      }

      if (NotAvailable == false) {
        this._snackBar.open("Room Reserved", "Okay");
        
        // In the future, this will send the data to the database
        this.bookings.push({date: this.date, time: this.startTime, room: this.roomSelected});
        console.log(this.bookings);
        
      }
      else {
        this._snackBar.open("Unavailable", "Okay");
      }
      

      
    }




  }
}