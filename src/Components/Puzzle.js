// Puzzle.js

import React, { Component } from 'react';
import '../css/Puzzle.css';
import Square from './Square';

import { store } from '../Reducers/index';
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
    let dispatch = store.dispatch;
    if (testing === true) dispatch = testParams;
    dispatch(setSquareValue(id, parseInt(newValue)));
  }

  /**
   * handler for when user submits the end result. 
   * If success, alerts true, if not alerts false   
   **/
  _handleSubmit() {
    // TODO
    // PROBLEM 5 -- testing handling submit

    // As a hint, look at how the row and col cell IDs translate to the IDs of the grid.
    alert('Incorrect Submission');
  }

  render() {
    let squares = [];
    for (let i = 0; i < 81; i += 9) {
      let subGrid = [];
      for (let j = 0; j < 9; j++) {
        subGrid.push(
          <Square
            callback={this._handleNewValue}
            key={i + j}
            editable={store.getState().puzzle.values[i + j].editable}
            value={store.getState().puzzle.values[i + j].value}
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
