import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../Button';

describe('Button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});