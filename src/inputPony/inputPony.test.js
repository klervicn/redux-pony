import React from 'react';
import InputPony from './inputPony';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InputPony onClick={jest.fn} />).toJSON();

  expect(tree).toMatchSnapshot();
});
