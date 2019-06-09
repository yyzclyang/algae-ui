import renderer from 'react-test-renderer';
import React from 'react';
import { Button } from '../index';

describe('button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});