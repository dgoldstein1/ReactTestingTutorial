// Puzzle.js

import React, { Component } from 'react';
import '../css/Puzzle.css';
import Square from './Square';
import { store } from '../Reducers/index';


/**
 * the main display component. Displays a 9x9 grid of squares
 * - David Goldstein 
 **/ 

class Puzzle extends Component {

  constructor(props) {
    super(props);

    this._handleNewValue = this._handleNewValue.bind(this);
  }

  /**
   * handler for when an input is keyed in 
   * @param {int ID}
   * @param {int} new value   
   **/
  _handleNewValue(id, newValue) {
    
  }

  render() {

    console.log(store.getState());

    let squares = [];
    for (let i = 0 ; i < 81 ; i += 9) {
      let subGrid = [];
      for (let j = 0 ; j < 9 ; j ++) {
        subGrid.push(
          <Square
            callback={this._handleNewValue}
            key={i + j}
            editable={true}
            value={i + j}
            id={i + j}
          />
        );
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