import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import SudokuReducer from './Reducers'

import logger from 'redux-logger'

const store = createStore(
  SudokuReducer,
  applyMiddleware(logger)
)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
