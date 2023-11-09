import {Component, OnInit} from '@angular/core';
import { BookService } from "../book.service";
import {BookModel} from "./Book.Model";
import {Guid} from "guid-typescript";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  data: any;
  isDisabled = false;
  book: any;
  constructor(private service: BookService) {
  }

  onSubmit(formData: any) {

  }

  ngOnInit(): void {
    this.service.getBooks().subscribe(
      data => this.data = data);
    console.log(this.data);
  }

  addBook(book: BookModel): void{
    let newBook = new BookModel();
    newBook.id = Guid.create().toString();
    newBook.name = book.name;
    newBook.available = Boolean(book.available);
    this.service.addBook(newBook).subscribe((response) => {
      console.log(response);
      this.data.push(response);
    });
  }


  deleteBook(id: string) {
    this.service.deleteBook(id).subscribe(
      data => {
        console.log(data);
      });

    let index = this.data.findIndex((x: { id: string; }) => x.id === id);
    this.data.splice(index, 1);
  }

  getBook(id: string):any {
    return this.service.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  handleNewBookEvent($event: any) {
    this.addBook($event);
  }

  handleUpdateBook(id: string) {
     this.book = this.getBook(id);
    this.service.updateBook(id, this.book);
  }
}
