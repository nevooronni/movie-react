import React, { Component } from 'react';

//ES6 classes and encapsulate all data we need for our component
class Header extends Component {
    //at the very least all react components are expected to have a render method that returns some markup
    render() {
        return (
            <div className="App-header">
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

//this exports our components and make it availabel to other files in our project
export default Header;