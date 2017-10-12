// index.js

import { combineReducers } from 'redux';
import puzzle from './puzzle';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const SudokuReducer = combineReducers({
  puzzle
});

const store = createStore(SudokuReducer, applyMiddleware(logger));

export { store };
