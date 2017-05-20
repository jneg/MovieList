import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { MovieListComponent }  from './movie-list.component';
import { CreateMovieListComponent }  from './create-movie-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MovieListComponent, CreateMovieListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
