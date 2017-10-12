import React, { Component } from 'react';
import '../css/App.css';
import Puzzle from '../Components/Puzzle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Sudoku : Live by the Test, Die by the Test</h2>
        </header>
        <Puzzle/>
      </div>
    );
  }
}

export default App;
