import React, { Component } from 'react';

class AddMovie extends Component {
    render() {
        return (
            <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
                <p>Add a Movie</p>
                <input ref={ ( input ) => this.title = input } type="input" placeholder="Title" />
                <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
                <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
                <textarea ref={ ( input ) => this.description = input } placeholder="Description"></textarea>
                <button type="submit">Add Movie</button>
            </form>
        );
    }

    addNewMovie(e) {
        e.preventDefault();
        //create a new movie object by grabbing the form input field values we stored as component class properties earlier
        var movie = {
            title: this.title.value,
            year: this.year.value,
            poster: this.poster.value,
            description: this.description.value   
        };
        this.props.addMovie( movie );
    }
}

export default AddMovie;