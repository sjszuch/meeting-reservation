import { Component, ViewChild } from '@angular/core';
import { WeekdayComponent } from '../weekday/weekday.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @ViewChild(WeekdayComponent ) child!: WeekdayComponent ;

  date!: string;

  //  Dummy data containing created reservations
  reservations = [
    {
      date: "Fri Jul 07 2023 00:00:00 GMT-0400 (Eastern Daylight Time)",
      times: [
      '7:00',
      '7:15',
      '7:30'],
      room: "isabella1"
    }
  ]

  // A test array that stores data for a specific date
  testIsa1 = ["",
  '8:00',
  '8:15',
  '8:30'];

  // This checks all reservations on a given date and room and pushes the reserved times to the test array
  // This data must be re-passed to the child
  getReserved(): void {
    console.log(this.date);
    console.log(this.reservations[0].date);

    for (let i = 0; i < this.reservations.length; i++) {

      if (this.reservations[i].date == this.date) {

        for (let x = 0; x < this.reservations[i].times.length; x++) {

          // Switch statement for rooms?
          this.testIsa1.push(this.reservations[i].times[x])
        }
      }

    }

    console.log(this.testIsa1);
  }

  isabella1 = [
    '7:00',
    '7:15',
    '7:30',
    '7:45',
    '8:00',
    '8:15',
    '8:30',
  ];

  isabella2 = [
    '11:00',
    '11:15',
    '11:30',
    '11:45',
  ];

  // Submits the date that the user chose (sends to API and gets availability for each room)
  sendDate(): void {

  }


  // Gets sends the times that the user selected
  getTimes(): void {

    console.log(this.child.sendTimes());


    for (let i = 0; i < this.child.sendTimes().length; i++) {
      this.isabella1.push(this.child.sendTimes()[i]);
      console.log("Isabella1: " + this.isabella1);
    }


  }
}
