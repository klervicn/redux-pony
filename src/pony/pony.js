import React from 'react';
import PropTypes from 'prop-types';

export default class Pony extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.name
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
    this.props.deleteData(this.props.id);
  }

  updatePony(evt) {
    evt.preventDefault();
    this.props.updateData(this.props.id, this.state.inputValue);
  }

  render() {
    return (
      <li
        style={{
          listStyleType: 'none'
        }}
      >
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
Pony.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
