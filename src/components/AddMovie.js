import React, { Component } from 'react';

class AddMovie extends Component {
    render() {
        return (
            <form className="movie-form">
                <p>Add a Movie</p>
                <input ref={ ( input ) => this.title = input } type="input" placeholder="Title" />
                <input ref={ ( input ) => this.yeaer = input } type="text" placeholder="Year" />
                <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
                <textarea ref={ ( input ) => this.description } placeholder="Description"></textarea>
                <button type="submit">Add Movie</button>
            </form>
        );
    }
}

export default AddMovie;