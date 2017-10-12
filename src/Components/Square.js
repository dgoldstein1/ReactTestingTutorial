// Square.js

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import '../css/Square.css';
import 'chai';

/**
* Individual Squre with number in it
* - David Goldstein 
**/ 

class Square extends Component {
  constructor(props) {
    super(props);
    this._handleValueChanged = this._handleValueChanged.bind(this);
  }

  /**
   * validates new value
   * @param {int} testValue
   * @return {int} on success, else {undefined}
   **/
  _handleValueChanged(testParam) {
    let val = testParam ? testParam : document.getElementById("square-input").value;
    if (isNaN(val) || val.length > 1 || val < 1) return undefined;
    this.props.callback(val);
    return val;
  }

  render() {
    return (
      <input
        id={"square-input"}
        className="Square-Input"
        readOnly={!this.props.editable}
        defaultValue={this.props.defaultValue ? this.props.defaultValue : ""}
        maxLength={1}
        max={1}
        min={9}
        onKeyUp={this._handleValueChanged}
      />
    );
  }
}

Square.propTypes = {
  callback : PropTypes.func.isRequired,
  editable : PropTypes.bool.isRequired,
  value : PropTypes.number
};

export default Square;