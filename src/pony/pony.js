import React from 'react';
import PropTypes from 'prop-types';
import InputPonies from '../inputPony/inputPony';

export default class Pony extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deletePony = this.deletePony.bind(this);
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
    this.props.onUpdate(this.props.id, this.state.inputValue);
  }

  render() {
    <div>
      <li>
        <input type="text" value={text} onChange={this.updateInputValue} />
        <button onClick={this.updatePony}>Update</button>
        <button onClick={this.deletePony}>Delete</button>
      </li>
    </div>;
  }
}

InputPonies.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
