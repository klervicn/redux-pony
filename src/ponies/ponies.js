import React from 'react';
import PropTypes from 'prop-types';

/* gere le delete et l'update des pony ? */

export const Ponies = ({ poniesList }) => (
  <ul>{poniesList.map(pony => <li key={pony.id}>{pony.name}</li>)}</ul>
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
