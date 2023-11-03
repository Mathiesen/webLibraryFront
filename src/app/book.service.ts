import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
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
}
