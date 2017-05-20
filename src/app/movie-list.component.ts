import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TmdbService } from './tdmb.service'

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent  {
  constructor (private tmdbService: TmdbService) {}
  @Input() title: string;
  @Input() movies: string[];
  @Output() addMovie:EventEmitter<string> = new EventEmitter();
  @Output() updateMovie:EventEmitter<{oldName: string, newName: string}> = new EventEmitter();
  @Output() deleteMovie:EventEmitter<string> = new EventEmitter();
  @Output() deleteList:EventEmitter<string> = new EventEmitter();
  showList: boolean = false;
  addMovieName: string = '';
  apiMovies: string[] = [];
  updateMovieName: string[] = [];
  toggleShow(): void {
    this.showList = !this.showList;
  };
  addMovieByName(): void {
    this.addMovie.emit(this.addMovieName);
    this.addMovieName = '';
  };
  updateMovieByName(oldName: string, i: number): void {
    this.updateMovie.emit({oldName: oldName, newName: this.updateMovieName[i]});
    this.updateMovieName[i] = '';
  };
  deleteMovieByName(name: string): void {
    this.deleteMovie.emit(name);
  };
  deleteMovieList(): void {
    this.deleteList.emit();
  };
  showApiMovies(): void {
    if (this.addMovieName.length >= 3) {
      this.tmdbService.searchMovies(this.addMovieName).subscribe(
        movies => this.apiMovies = movies,
        error => console.log(error)
      );
    }
  }
}
