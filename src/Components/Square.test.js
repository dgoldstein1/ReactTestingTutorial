// Square.test.js

import React from 'react';
import Square from './Square';

// setup file
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// setup file

describe('Components', () => {
  const defaultProps = {
    id: -1,
    editable: true
  };

  // PROBLEM 1 -- testing rendering of <Square/>
  describe('render', () => {
    it('renders <input> tag', () => {
      let wrapper = mount(<Square {...defaultProps} />);
      expect(
        wrapper
          .html()
          .includes(` <input id="square-input" class="Square-Input"`)
      );
    });
  });

  // PROBLEM 3 -- testing handleValue Changed
  describe('_handleValueChanged', () => {
    let callBackValue, wrapper, _handleValueChanged;
    beforeEach(() => {
      callBackValue = false;
      wrapper = mount(<Square {...defaultProps} />);
      _handleValueChanged = wrapper.instance()._handleValueChanged;
    });

    let newProps = defaultProps;
    defaultProps.callback = (id, newValue) => (callBackValue = newValue);

    // positive tests
    it('accecpts numbers 1-9', () => {
      for (let i = 1; i < 10; i++) {
        let output = _handleValueChanged(i + '', true);
        expect(output).toBe(i + '');
        expect(callBackValue).toBe(i + '');
      }
    });
    // negative tests
    it('does not accept 0', () => {
      let output = _handleValueChanged('0', true);
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
    it('does not accept non-numbers', () => {
      let output = _handleValueChanged('a', true);
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
    it('does not accept values', () => {
      let output = _handleValueChanged('123', true);
      expect(output).toBe(undefined);
      expect(callBackValue).toBe(false);
    });
  });
});
