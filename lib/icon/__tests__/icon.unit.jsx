import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../index';
import { mount } from 'enzyme';

describe('icon', () => {
  it('渲染一个 name 为 wechat 的 Icon', () => {
    const json = renderer.create(<Icon name="wechat" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="wechat" onClick={fn} />);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
