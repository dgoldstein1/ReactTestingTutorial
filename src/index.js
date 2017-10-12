import React from 'react';
import './css/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './Reducers/index';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
