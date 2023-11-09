import {Component, EventEmitter, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'update-availability',
  templateUrl: './update-availability.component.html',
  imports: [
    MatButtonModule
  ],
  styleUrls: ['./update-availability.component.css']
})
export class UpdateAvailabilityComponent {

  @Output() updateBook: EventEmitter<any> = new EventEmitter<any>();

  updateBookAvailability() {
    this.updateBook.emit();
  }
}
