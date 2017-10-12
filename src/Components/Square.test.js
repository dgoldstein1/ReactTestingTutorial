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
      // TODO
      expect(true);
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
      // TODO
      expect(true);
    });
    // negative tests
    it('does not accept 0', () => {
      // TODO
      expect(true);
    });
    it('does not accept non-numbers', () => {
      // TODO
      expect(true);
    });
    it('does not accept values', () => {
      // TODO
      expect(true);
    });
  });
});
