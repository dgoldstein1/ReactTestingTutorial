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

      // PROBLEM 2 -- rendering of puzzle component
      it('submit button', () => {
        expect(true);
      });
      it('gridlayout', () => {
        expect(true);
      });
      it('all 80 boxes', () => {
        expect(true);
      });
    });

    describe('handlers', () => {
      let wrapper = shallow(<Puzzle store={mockStore(defaultState)} />);

      // PROBLEM 4 -- testing handle new value function
      describe("_handleNewValue",() => {
        it('returns expected result ', () => {
          expect(true);
        });
      });
      // PROBLEM 5 -- testing handling submit
      describe('_handleSubmit',() => {
        let output = wrapper
          .dive()
          .instance()
          ._handleSubmit();
        it('checks that all boxes are filled', () => {
          expect(true);
        });
        it("checks that each group of 9 squares contains 9 unique numbers",() => {
          // TODO
          expect(true);
        });
        it("checks that each row has 9 unique squares",() => {
          // TODO
          expect(true);
        });
        it("checks that each column has 9 unique squares",() => {
          // TODO
          expect(true);
        });
      });
    });
  });
});
