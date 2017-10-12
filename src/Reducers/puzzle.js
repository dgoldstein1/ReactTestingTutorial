// puzzle.js

import puzzleValues from './puzzleValues';
import { SET_SQUARE_VALUE } from '../Actions/PuzzleActions';

const initialState = {
  values: puzzleValues,
  gameFinished: false
};

const puzzle = (state = initialState, action) => {
  let defaultState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_SQUARE_VALUE:
      defaultState.values[action.id].value = action.newValue;
  }

  return defaultState;
};

export default puzzle;
