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
  _handleValueChanged(testParam, testing=false) {
    let val = testing === true ? testParam : document.getElementById("square-input" + this.props.id).value;
    if (isNaN(val) || val.length > 1 || val < 1) return undefined;
    this.props.callback(this.props.id, val);
    return val;
  }

  render() {
    return (
      <input
        id={"square-input" + this.props.id}
        className={this.props.editable ? "Square-Input" : "Square-Permenant"}
        readOnly={!this.props.editable}
        value={this.props.value ? this.props.value : ""}
        maxLength={1}
        max={1}
        min={9}
        onChange={this._handleValueChanged}
      />
    );
  }
}

Square.propTypes = {
  id : PropTypes.number.isRequired,
  callback : PropTypes.func.isRequired,
  editable : PropTypes.bool.isRequired,
  value : PropTypes.number
};

export default Square;