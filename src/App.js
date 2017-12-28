import React, { Component } from 'react';
import './App.css';
import Ponies from './ponies';
import InputPony from './inputPony';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputPony />
        <Ponies />
      </div>
    );
  }
}

export default App;
