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
    return (
      <Square
        callback={(newValue) => console.log(newValue)}
        editable={true}
        value={1}
      />
    );
  }
}

export default Puzzle;