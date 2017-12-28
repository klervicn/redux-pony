import React from 'react';
import PropTypes from 'prop-types';

export default class InputPony extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addPony = this.addPony.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  addPony(evt) {
    evt.preventDefault();
    this.props.onClick(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addPony}>
          <input
            type="text"
            onChange={this.updateInputValue}
            value={this.state.inputValue}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

InputPony.proptypes = {
  onClick: PropTypes.func.isRequired
};
