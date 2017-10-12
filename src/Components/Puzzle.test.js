// Puzzle.test.js

import React from 'react';
import Puzzle from './Puzzle';

// setup file
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store';
import puzzle from '../Reducers/puzzleValues';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('Components', () => {
  describe('Puzzle', () => {
    const defaultState = {
        puzzle: {
          values: puzzle,
          gameFinished: false
        }
      },
      middlewares = [thunk],
      mockStore = configureStore(middlewares);
    describe('render', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <Provider store={mockStore(defaultState)}>
            <Puzzle />
          </Provider>
        );
      });

      it('submit button', () => {
        // TODO
        expect(true);
      });
      it('gridlayout', () => {
        // TODO
        expect(true);
      });
      it('all 80 boxes', () => {
        // TODO
        expect(true);
      });
    });

    describe('handlers', () => {
      let wrapper = shallow(<Puzzle store={mockStore(defaultState)} />);
      it('_handleNewValue ', () => {
        let dispatchResult;

        // TODO
        expect(true);
      });
      it('_handleSubmit', () => {

        // TODO
        expect(true);
      });
    });
  });
});
