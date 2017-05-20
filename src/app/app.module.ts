import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MovieListComponent }  from './movie-list.component';
import { CreateMovieListComponent }  from './create-movie-list.component';
import { TmdbService } from './tdmb.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, MovieListComponent, CreateMovieListComponent ],
  providers: [ TmdbService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
