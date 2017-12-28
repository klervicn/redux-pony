import React from 'react';
import PropTypes from 'prop-types';

export default class Pony extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.text
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deletePony = this.deletePony.bind(this);
    this.updatePony = this.updatePony.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  deletePony(evt) {
    evt.preventDefault();
    this.props.onDeleteClick(this.props.id);
  }

  updatePony(evt) {
    evt.preventDefault();
    this.props.onUpdateClick(this.props.id, this.state.inputValue);
  }

  render() {
    return (
      <li>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button onClick={this.updatePony}>Update</button>
        <button onClick={this.deletePony}>Delete</button>
      </li>
    );
  }
}
/*
Pony.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
*/
