// Puzzle.js

import React, { Component } from 'react';
import '../css/Puzzle.css';
import Square from './Square';

import { connect } from 'react-redux';

import { setSquareValue } from '../Actions/PuzzleActions';

/**
 * the main display component. Displays a 9x9 grid of squares
 * - David Goldstein 
 **/

class Puzzle extends Component {
  constructor(props) {
    super(props);

    this._handleNewValue = this._handleNewValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  /**
   * handler for when an input is keyed in 
   * @param {int ID}
   * @param {int} new value   
   **/
  _handleNewValue(id, newValue, testParams, testing = false) {
    let dispatch = this.props.dispatch;
    if (testing === true) dispatch = testParams;
    dispatch(setSquareValue(id, parseInt(newValue)));
  }

  /**
   * handler for when user submits the end result. 
   * PROBLEM 5 -- testing handling submit
   * If success, alerts true, if not alerts false   
   **/
  _handleSubmit() {
    const puzzleValues = this.props.puzzle.values;

    // check that all values are filled and copy over to array
    let puzzleValueArray = [];
    for (let i in puzzleValues) {
      if (puzzleValues[i].value === undefined) return false;
      puzzleValueArray.push(puzzleValues[i].value);
    }

    // internal helper to check for duplicates in array
    let hasDuplicates = array => (new Set(array)).size !== array.length;

    for (let i = 0 ; i < puzzleValueArray.length ; i += 9) {      
      if (hasDuplicates(puzzleValueArray.slice(i,i+9))) return false;
    }


    // the trick here is that each cell # is equal to the row id + col id
    let rows = [0,1,2,9,10,11,18,19,20];
    let cols = [0,3,6,27,30,33,54,57,60];

    let tempCols, tempRows;
    for (let row = 0 ; row < 9 ; row++) {
      tempCols = [];
      tempRows = [];
      for (let col = 0 ; col < 9 ; col ++) {
        tempCols.push(puzzleValueArray[rows[row] + cols[col]]); // check that all cols are unique
        tempRows.push(puzzleValueArray[cols[row] + rows[col]]); // check that all rows are unique
      }
      if (hasDuplicates(tempCols) || hasDuplicates(tempRows)) return false;
    }


    

    // check that each subgrid has unique values
  
    alert('success!');

    return true; // valid solution
  }

  render() {
    let squares = [];
    for (let i = 0; i < 80; i += 9) {
      let subGrid = [];
      for (let j = 0; j < 9; j++) {
        subGrid.push(
          <Square
            callback={this._handleNewValue}
            key={i + j}
            editable={this.props.puzzle.values[i + j].editable}
            value={this.props.puzzle.values[i + j].value}
            id={i + j}
          />
        );
      }
      squares.push(subGrid);
    }
    let currSubGrid = 0;
    return (
      <div>
        <button className="button" onClick={this._handleSubmit} name="button">
          Submit
        </button>
        <div className="puzzle">
          {squares.map(subGrid => (
            <div className="subGrid" key={(currSubGrid += 1)}>
              {subGrid.map(el => el)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    puzzle: state.puzzle
  };
};

export default connect(mapStateToProps)(Puzzle);
