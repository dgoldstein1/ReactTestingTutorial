// Puzzle.js

import React, { Component } from 'react';
import '../css/Puzzle.css';
import Square from './Square';

/**
 * the main display component. Displays a 9x9 grid of squares
 * - David Goldstein 
 **/ 

class Puzzle extends Component {
  render() {
    let squares = [];
    for (let i = 0 ; i < 81 ; i += 9) {
      let subGrid = [];
      for (let j = 0 ; j < 9 ; j ++) {
        subGrid.push(<Square key={i + j}/>);
      }
      squares.push(subGrid);
    }
    let currSubGrid = 0;
    return (
      <div className="puzzle">
        {squares.map(subGrid => 
          <div className="subGrid" key={currSubGrid += 1}>
            {subGrid.map(el => el)}
          </div>
        )}
      </div>
    );
  }
}

export default Puzzle;