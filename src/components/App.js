import React, { Component } from 'react';
import '../App.css';
//imported components
import Header from './Header';
import Movie from './Movie';
import AddMovie from './AddMovie';
//JSON objects available via these variables
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {
  //initialize state object
  constructor() {
    //initialized component object before anything else
    super();

    //this keywored is available inside constructor now
    this.state = {
      //initialize movies state object with the initializeMovies json object
      movies: initialMovies
    };

    //bind the events in react in order for our component methods to work
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);

    //bind the new method to this so it's available throughour the class
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
  }

  render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">
            Sharing a few of our favorite movies
        </p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>      
        <AddMovie addMovie={this.addMovieToGallery}/>
      </div>
    );
  }

  //load additional movies
  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }

  //method to add new movies to the movie state object
  addMovieToGallery( movie ) {
    console.log( 'movie', movie );
    //add the movie details to the movies state object
    
    //set date
    var ts = Date.now();
    //new movie object
    var newMovie = {};
    //add the movie and time
    newMovie[ 'movie' + ts ] = movie;
    //get current movies
    var currentMovies = { ...this.state.movies };
    //assign all this to the currentmovies
    var newMovies = Object.assign( currentMovies, newMovie );
    //set state to this new bunch of movies
    this.setState({ movies: newMovies });
  }

}

export default App;
