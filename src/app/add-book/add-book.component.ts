import {Component, EventEmitter, isStandalone, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {

  @Output() newBook: EventEmitter<any> = new EventEmitter<any>();

  addNewBook(formData: any) {
    this.newBook.emit(formData.value);
  }
}
