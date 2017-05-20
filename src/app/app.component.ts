import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  appTitle = 'Movies to Watch Vortex';
  movieLists = [
    {title: 'Horror', movies: ['The Shining', 'The Babadook', 'Scream', 'The Exorcist', 'The Conjuring']},
    {title: 'Comedy', movies: ['The Hangover', 'Anchorman: The Legend of Ron Burgundy', 'Groundhog Day']},
    {title: 'Drama', movies: ['The Godfather', '12 Angry Men', 'Good Will Hunting', 'The Social Network']}
  ];
  createMovieList(name: string): void {
    this.movieLists.push({title: name, movies: []});
  };
  addMovie(movie: string, list: string): void {
    this.movieLists.find(function(e) {
      return e.title === list;
    }).movies.push(movie);
  };
}
