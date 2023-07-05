import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-takenslot',
  templateUrl: './takenslot.component.html',
  styleUrls: ['./takenslot.component.scss']
})
export class TakenslotComponent {
  @Input() marker!: string;
}
