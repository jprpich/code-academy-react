import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="my-div">
        <h1>hello</h1>
        <p>hello world description</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
          width= "400px" />
      </div>
    );
  }
}

export default App;
