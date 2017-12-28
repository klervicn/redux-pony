import React from 'react';
import PropTypes from 'prop-types';
import Pony from '../pony/pony';

/* gere le delete et l'update des pony ? */

export const Ponies = ({ poniesList, onUpdateClick, onDeleteClick }) => (
  <ul>
    {poniesList.map(pony => (
      <Pony
        key={pony.id}
        text={pony.name}
        onUpdateClick={onUpdateClick}
        onDeleteClick={onDeleteClick}
      />
    ))}
  </ul>
);

Ponies.proptypes = {
  poniesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      }
      /** Ajouter onDeleteClick, onUpdateClick */
    )
  )
};
