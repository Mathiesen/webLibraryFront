import {Component, OnInit} from '@angular/core';
import { BookService } from "../book.service";
import {BookModel} from "./Book.Model";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  data: any;
  isDisabled = false;
  constructor(private service: BookService) {
  }

  onSubmit(formData: any) {
    let book = new BookModel();
    book.id = Guid.create().toString();
    book.name = formData.value.name;
    book.available = Boolean(formData.value.available);
    this.service.addBook(book).subscribe((response) => {
      console.log(response);
    });
    window.location.reload();
  }

  ngOnInit(): void {
    this.service.getBooks().subscribe(
      data => this.data = data);
    console.log(this.data);
  }

  addBook(book: any): void{
    this.service.addBook(book);

  }


  deleteBook(id: string) {
    this.service.deleteBook(id).subscribe(
      data => {
        console.log(data);
      });
    window.location.reload();
  }

  getBook(id: string) {
    this.service.getBook(id).subscribe(
      data => {
        alert(data.name);
       console.log(data);
      });


  }

  log(value: string) {
    console.log(value);
  }
}
