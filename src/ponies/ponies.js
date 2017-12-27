import React from 'react';
import PropTypes from 'prop-types';

export const Ponies = ({ poniesList }) => (
  <ul>{poniesList.map(pony => <li>{pony.name}</li>)}</ul>
);
