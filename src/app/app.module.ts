import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {AddBookComponent} from "./add-book/add-book.component";
import { UpdateAvailabilityComponent } from './update-availability/update-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        AddBookComponent,
        UpdateAvailabilityComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
