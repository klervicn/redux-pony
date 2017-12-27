import React, { Component } from 'react';
import './App.css';
import Ponies from './ponies';
//import InputPony from './ponies/inputPony';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ponies />
      </div>
    );
  }
}

export default App;
