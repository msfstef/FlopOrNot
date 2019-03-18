import React, { Component } from 'react';
import MovieGetter from './components/MovieGetter';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieGetter />
      </div>
    );
  }
}

export default App;
