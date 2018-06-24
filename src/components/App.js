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
              .map(key => <Movie key={key} meta={this.state.movies=[key]} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
