import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  appTitle = 'Movies to Watch';
  movieLists = [
    {title: 'Horror', movies: ['The Shining', 'The Babadook', 'Scream', 'The Exorcist', 'The Conjuring']},
    {title: 'Comedy', movies: ['The Hangover', 'Anchorman: The Legend of Ron Burgundy', 'Groundhog Day']},
    {title: 'Drama', movies: ['The Godfather', '12 Angry Men', 'Good Will Hunting', 'The Social Network']}
  ];
  createMovieList(name: string): void {
    this.movieLists.push({title: name, movies: []});
  };
  deleteMovieList(name: string): void {
    const movieList = this.movieLists.find(function(e) {
      return e.title === name;
    });
    const i = this.movieLists.indexOf(movieList);
    this.movieLists.splice(i,1);
  };
  createMovie(list: string, movie: string): void {
    const movieList = this.movieLists.find(function(e) {
      return e.title === list;
    })
    movieList.movies.push(movie);
  };
  updateMovie(list: string, movie: string, newName: string): void {
    const movieList = this.movieLists.find(function(e) {
      return e.title === list;
    });
    const i = movieList.movies.indexOf(movie);
    movieList[i] = newName;
  };
  deleteMovie(list: string, movie: string): void {
    const movieList = this.movieLists.find(function(e) {
      return e.title === list;
    });
    const i = movieList.movies.indexOf(movie);
    movieList.movies.splice(i,1);
  };
}
