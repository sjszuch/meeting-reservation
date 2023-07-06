import { Component, Input, OnChanges, SimpleChanges, IterableDiffers, IterableDiffer, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss']
})
export class WeekdayComponent implements OnChanges  {




  getRange(limit: number): number[] {
    return Array.from({ length: limit }, (_, i) => i);
  }

  // Matching the time to the input
  selected: string = '7:30';
  @Input() room!: string;

  @Input() date!: string;


  // Input of an object from the parent component
  @Input() isabella1!: any;
  @Input() isabella2!: any;

  @Input() isabella1Array!: any;
  @Input() isabella2Array!: any;




  roomCheck(x: string): boolean {
    switch (this.room) {
      case "isabella1":
        if(this.isabella1Array.includes(x)) {
          return true;
        }
        else return false;
        break;

      case "isabella2":
        if(this.isabella2Array.includes(x)) {
          return true;
        }
        else return false;
        break;

      default:
        return false;
        break;
    }

  }

  // Array of times that are selected
  selectedTimes: string[] = [];


  // When a time is clicked, displays that value on the console- then adds it to the array of selected times
  addTime($time: string) {

    // If the time is already in the array, remove it
    if (this.selectedTimes.includes($time)) {
      this.selectedTimes.splice(this.selectedTimes.indexOf($time), 1);
    }
    else {
      this.selectedTimes.push($time);
    }


  }

  // Returns the selected times when called- used in the calendar component to add the selected times to the reserved times array
  sendTimes() {
    return this.selectedTimes;
  }

  sendRoom() {
    return this.room;
  }

  @Output("refresh") refresh: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['date'];
    this.refresh.emit();
  }

  refreshList(x: any[]) {



    console.log("From week: " + x)

    this.isabella1Array = x;
    console.log("List: " + this.isabella1Array);

    // for (let i = 0; i < x.length; i++) {
    //   this.isabella1Array.push("1");
    // }
  }






}


