import React from 'react';
import PropTypes from 'prop-types';
import Pony from '../pony/pony';

const Ponies = ({
  poniesList,
  isLoading,
  errorMessage,
  onUpdateClick,
  onDeleteClick
}) =>
  isLoading ? (
    <div>
      <p>Chargement en cours</p>
    </div>
  ) : (
    <div>
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
      <p>{errorMessage}</p>
    </div>
  );

Ponies.proptypes = {
  poniesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  onUpdateClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Ponies;
