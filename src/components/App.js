import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">
            Sharing a few of our favorite movies
        </p>
        <div className="movies">
          <Movie title="50 First Dates" year="2004" description="Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry thinks he's finally found the girl of his dreams." poster="" />
          <Movie title="Ferris Bueller's Day Off" year="1986" description="A high school wise guy is determined to have a day off from school, despite what the principal thinks of that." poster=""/>           
          <Movie title="Matilda" year="1996" description="Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs the worst parents ever and the worst school principal imaginable." />
          <Movie title="Dirty Dancing" year="1987" description="Spending the summer at a Catskills resort with her family, Frances 'Baby' falls in love with the camp's dance instructor, Johnny Castle." poster=""/>
        </div>
      </div>
    );
  }
}

export default App;
