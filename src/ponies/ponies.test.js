import React from 'react';
import Ponies from './ponies';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Ponies
        poniesList={[
          { id: 15, name: 'Petit Poney' },
          { id: 20, name: 'Mycroft' }
        ]}
        onUpdateClick={jest.fn}
        onDeleteClick={jest.fn}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
