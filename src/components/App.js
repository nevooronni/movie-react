import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
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
      </div>
    );
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }

}

export default App;
