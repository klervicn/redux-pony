import React from 'react';
import Ponies from './ponies';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const ponies = renderer
    .create(
      <Ponies
        poniesList={[
          { id: 15, name: 'Petit Poney' },
          { id: 20, name: 'Mycroft' }
        ]}
        isLoading={false}
        errorMessage="This is an error"
        onUpdateClick={jest.fn}
        onDeleteClick={jest.fn}
      />
    )
    .toJSON();

  expect(ponies).toMatchSnapshot();
});

it('loads correctly', () => {
  const poniesLoading = renderer
    .create(
      <Ponies
        poniesList={[
          { id: 45, name: 'Petit Poney' },
          { id: 20, name: 'Mycroft' }
        ]}
        isLoading={true}
        errorMessage=""
        onUpdateClick={jest.fn}
        onDeleteClick={jest.fn}
      />
    )
    .toJSON();

  expect(poniesLoading).toMatchSnapshot();
});
