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

describe("Components",() => {

  describe("Puzzle",() => {

    const defaultState = {
      puzzle : {
        values : puzzle,
        gameFinished : false
      }
    },
    middlewares = [thunk],
    mockStore = configureStore(middlewares);   
    describe("render",() => {

      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <Provider store={mockStore(defaultState)}>
            <Puzzle/>
          </Provider>
        );
      });   

      it("submit button",() => {
        expect(wrapper.html().includes(`<button class="button" name="button">Submit</button>`));
      });
      it("gridlayout",() => {
        expect(wrapper.html().includes(`<div class="subGrid">`));
      });
      it("all 80 boxes",() => {
        for (let i = 0 ; i < 80 ; i ++) {
          expect(wrapper.html().includes(`<input min="9" max="1" id="square-input${i}" class="Square-Input" value="" maxlength="1">`));
        }
      });
    });

    describe("handlers",() => {
      let wrapper = shallow(
        <Puzzle store={mockStore(defaultState)}/>
      );
      it("_handleNewValue ",() => {
        let dispatchResult;
        wrapper.dive().instance()._handleNewValue(10, 15, a => dispatchResult = a, true);
        expect(dispatchResult.type).toBe('SET_SQUARE_VALUE');
        expect(dispatchResult.id).toBe(10);
        expect(dispatchResult.newValue).toBe(15);
      });
      it("_handleSubmit",() => {
        let output = wrapper.dive().instance()._handleSubmit();
        expect(output).toBe(undefined);
      })
    })
  });
});