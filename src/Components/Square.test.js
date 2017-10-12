// Square.test.js

import React from 'react';
import Square from './Square';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// setup file

describe("Components",() => {

  const defaultProps = {
    editable : true,
  };

  describe("render",() => {
    it("renders <input> tag",() => {
      let wrapper = shallow(<Square {...defaultProps}/>);
      expect(wrapper.html().includes(` <input id="square-input" class="Square-Input"`));
    });
  });
  describe("_handleValueChanged",() => {
    let callBackValue, wrapper, _handleValueChanged;
    beforeEach(() => {
      callBackValue = false;
      wrapper = shallow(<Square {...defaultProps}/>);
      _handleValueChanged = wrapper.instance()._handleValueChanged;
    });

    let newProps = defaultProps;
    defaultProps.callback = newValue => callBackValue = newValue;

    // positive tests
    it("accecpts numbers 1-9",() => {
      for (let i = 1 ; i < 10 ; i ++) {
        let output = _handleValueChanged(i +'');
        expect(output).toBe(i + '');
        expect(callBackValue).toBe(i + '');
      }
    });
    // negative tests
    it("does not accept 0",() => {
      let output = _handleValueChanged("0");
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
    it("does not accept non-numbers",() => {
      let output = _handleValueChanged("a");
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
    it("does not accept values",() => {
      let output = _handleValueChanged("123");
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
  });
});