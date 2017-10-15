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

import defaultPuzzleSolution from '../Mocks/solution';

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
        expect(
          wrapper
            .html()
            .includes(`<button class="button" name="button">Submit</button>`)
        );
      });
      it('gridlayout', () => {
        expect(wrapper.html().includes(`<div class="subGrid">`));
      });
      it('all 80 boxes', () => {
        for (let i = 0; i < 80; i++) {
          expect(
            wrapper
              .html()
              .includes(
                `<input min="9" max="1" id="square-input${i}" class="Square-Input" value="" maxlength="1">`
              )
          );
        }
      });
    });

    describe('handlers', () => {

      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Puzzle store={mockStore(defaultState)} />);
      });

      // PROBLEM 4 -- testing handle new value function
      describe("_handleNewValue",() => {
        it('returns expected result ', () => {
          let dispatchResult;
          wrapper
            .dive()
            .instance()
            ._handleNewValue(10, 15, a => (dispatchResult = a), true);
          expect(dispatchResult.type).toBe('SET_SQUARE_VALUE');
          expect(dispatchResult.id).toBe(10);
          expect(dispatchResult.newValue).toBe(15);
        });
      });
      // PROBLEM 5 -- testing handling submit
      describe('_handleSubmit',() => {
        it("accepts a valid solution ",() => {

          let newState = JSON.parse(JSON.stringify(defaultState));

          newState.puzzle.values = defaultPuzzleSolution;
          wrapper = shallow(<Puzzle store={mockStore(newState)}/>)

          let output = wrapper
            .dive()
            .instance()
            ._handleSubmit();

          expect(output).toBe(true);

        });
        it('checks that all boxes are filled', () => {
          // boxes not filled in by default
          wrapper = shallow(<Puzzle store={mockStore(defaultState)} />);
          let output = wrapper
            .dive()
            .instance()
            ._handleSubmit();

          expect(output).toBe(false);
        });
        it("checks that each group of 9 squares contains 9 unique numbers",() => {
          let newState = JSON.parse(JSON.stringify(defaultState));
          newState.puzzle.values = defaultPuzzleSolution;
          newState.puzzle.values[0] = { value : 1};
          newState.puzzle.values[5] = { value : 1};
          wrapper = shallow(<Puzzle store={mockStore(newState)} />);


          let output = wrapper
            .dive()
            .instance()
            ._handleSubmit();
          expect(output).toBe(false);

        });
        it.only("checks that each row has 9 unique squares",() => {
          let newState = JSON.parse(JSON.stringify(defaultState));

          newState.puzzle.values = defaultPuzzleSolution;
          newState.puzzle.values[0] = { value : 1};
          newState.puzzle.values[9] = { value : 1};
          wrapper = shallow(<Puzzle store={mockStore(newState)} />);
          let output = wrapper
            .dive()
            .instance()
            ._handleSubmit();
          expect(output).toBe(false);
        });
        it("checks that each column has 9 unique squares",() => {
          let newState = JSON.parse(JSON.stringify(defaultState));
          newState.puzzle.values = defaultPuzzleSolution;
          newState.puzzle.values[0] = { value : 1};
          newState.puzzle.values[27] = { value : 1};
          wrapper = shallow(<Puzzle store={mockStore(newState)} />);
          let output = wrapper
            .dive()
            .instance()
            ._handleSubmit();
          expect(output).toBe(false);
        });
      });
    });
  });
});
