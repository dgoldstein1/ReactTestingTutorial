// puzzle.js

import sudoku from './sudoku';

const defaultState = {
  values : sudoku,
  gameFinished : false,
};

const puzzle = (state = defaultState, action) => {
  return defaultState;
}

export default puzzle