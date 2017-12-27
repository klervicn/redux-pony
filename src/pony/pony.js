import React from 'react';
import PropTypes from 'prop-types';
import InputPonies from '../inputPony/inputPony';

// component react ? need une input value donc surement

export const Pony = ({ onDeleteClick, onUpdateClick, text, id }) => (
  <li>
    <input type="text" value={text} />
    <button onClick={onDeleteClick}>Delete</button>
  </li>
);

InputPonies.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
