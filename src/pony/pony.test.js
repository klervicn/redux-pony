import React from 'react';
import Pony from './pony';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Pony
        key={120}
        id={130}
        name="Poney de test"
        onUpdateClick={jest.fn}
        onDeleteClick={jest.fn}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
