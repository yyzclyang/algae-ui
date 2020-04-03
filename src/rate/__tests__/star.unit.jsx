import React from 'react';
import TestRenderer from 'react-test-renderer';
import Star from '../star';

describe('Star', () => {
  it('渲染一个 Star', () => {
    const component = TestRenderer.create(<Star />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
