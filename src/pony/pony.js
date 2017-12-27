import React from 'react';
import PropTypes from 'prop-types';

// component react ? need une input value donc surement

export const Pony = ({ onDeleteClick, onUpdateClick, text, id }) => (
  <li>
    <input type="text" value={text} />
    <button onClick={onDeleteClick}>Delete</button>
  </li>
);
