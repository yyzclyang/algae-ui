import React from 'react';
import * as renderer from 'react-test-renderer';
import Star from '../star';

describe('Star', () => {
  it('渲染一个 Star', () => {
    const component = renderer.create(<Star />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
