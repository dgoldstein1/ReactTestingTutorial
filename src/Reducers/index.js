// index.js

import { combineReducers } from 'redux'
import puzzle from './puzzle'

const SudokuReducer = combineReducers({
  puzzle
});

export default SudokuReducer