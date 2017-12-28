import React from 'react';
import PropTypes from 'prop-types';
import Pony from '../pony/pony';

export const Ponies = ({ poniesList, onUpdateClick, onDeleteClick }) => (
  <ul>
    {poniesList.map(pony => (
      <Pony
        key={pony.id}
        id={pony.id}
        name={pony.name}
        onUpdateClick={onUpdateClick}
        onDeleteClick={onDeleteClick}
      />
    ))}
  </ul>
);

Ponies.proptypes = {
  poniesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  onUpdateClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};
