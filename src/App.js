import React, { Component } from 'react';
import MovieGetter from './components/MovieGetter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieGetter />
      </div>
    );
  }
}

export default App;
