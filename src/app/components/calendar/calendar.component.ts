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
      room: "isabella1",
      date: "Fri Jul 07 2023 00:00:00 GMT-0400 (Eastern Daylight Time)",
      times: [
      '7:00',
      '7:15',
      '7:30']

    },

    {
      room: "isabella1",
      date: "Sun Jul 09 2023 00:00:00 GMT-0400 (Eastern Daylight Time)",
      times: [
      '8:00',
      '8:15',
      '8:30']

    },


    {
      room: "isabella2",
      date: "Sat Jul 08 2023 00:00:00 GMT-0400 (Eastern Daylight Time)",
      times: [
      '10:00',
      '10:15',
      '10:30']
    }
  ]

  // A test array that stores data for a specific date
  testIsa1 = [""];

  testIsa2 = [""];

  // This checks all reservations on a given date and room and pushes the reserved times to the test array
  // This data must be re-passed to the child upon changing the time or adding reservations
  getReserved(): void {

    // Clears the selected room's array
    this.testIsa1.length = 0;
    this.testIsa2.length = 0;

    // For each reservation...
    for (let i = 0; i < this.reservations.length; i++) {

      // ...if the date matches...
      if (this.reservations[i].date == this.date) {

        // ...push the reserved times to the isabella array- which is passed to the child component
        for (let x = 0; x < this.reservations[i].times.length; x++) {

          // Log the times that are in the reservation
          console.log("RESERVED: " + this.reservations[i].times)

          // Switch statement for rooms?
          switch (this.reservations[i].room) {
            case "isabella1":
              this.testIsa1.push(this.reservations[i].times[x])
              break;

            case "isabella2":
              this.testIsa2.push(this.reservations[i].times[x])
              break;

            default:
              break;
          }

        }
      }

    }

    console.log(this.testIsa1);
    console.log("2: " + this.testIsa2)
  }

  isabella2 = [
    '11:00',
    '11:15',
    '11:30',
    '11:45',
  ];

  booking = {date: "", times: ["12:00", "12:15", "12:30", "12:45"], room: "isabella1"}


  // Gets sends the times that the user selected
  getTimes(): void {
    console.log("Pressed");
    // Calls the child components' "sendTimes" function, which returns the selected times
    let timesArray = this.child.sendTimes();

    // It then pushes those values to the reservations array for the given room
    this.booking.date = this.date;
    console.log("Booking date: " + this.booking.date)

    // For each of the selected times...
    for (let i = 0; i < timesArray.length; i++) {

      const time = timesArray[i];

      // vvv This should work
      // this.booking.times.push[time];

      // Right now this is only logging 12-12:45 but can be easily updated with selected values
      this.reservations.push(this.booking);
    }

    this.availability();


  }

  pushTimes(): void {
    const x = this.testIsa1
    console.log("From cal: " + x)
    this.child.refreshList(x);
  }

  availability() {

    this.getReserved();
    this.pushTimes();
  }
}

