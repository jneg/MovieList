import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-movie-list',
  templateUrl: './create-movie-list.component.html',
})
export class CreateMovieListComponent  {
  @Output() createMovieListName:EventEmitter<string> = new EventEmitter();
  createName: string = '';
  createMovieList(): void {
    this.createMovieListName.emit(this.createName);
    this.createName = '';
  }
}
