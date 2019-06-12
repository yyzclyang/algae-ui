import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../index';

describe('icon', () => {
  it('name 为 wechat 的 Icon', () => {
    const json = renderer.create(<Icon name="wechat" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
