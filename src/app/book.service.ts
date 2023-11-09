import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookModel} from "./books/Book.Model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:5196/api/book";

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Object> {
    return this.http.get(this.baseUrl + "/getbooks");
  }

  addBook(book: BookModel) : Observable<any> {
    return this.http.post(this.baseUrl, book);
  }

  deleteBook(id: string) : Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getBook(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  updateBook(id: string, book: BookModel) : Observable<any> {
    return this.http.put(this.baseUrl + "/availability/" + id, book.available);
  }
}
