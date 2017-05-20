import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent  {
  @Input() title: string;
  @Input() movies: string[];
  @Output() addMovie:EventEmitter<string> = new EventEmitter();
  addMovieName: string = ''
  addMovieByName(): void {
    this.addMovie.emit(this.addMovieName);
    this.addMovieName = '';
  }
}
