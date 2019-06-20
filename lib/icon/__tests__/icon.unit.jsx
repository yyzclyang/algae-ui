import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../index';
import { mount } from 'enzyme';

describe('icon', () => {
  it('渲染一个 type 为 wechat 的 Icon', () => {
    const json = renderer.create(<Icon type="wechat" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Icon type="wechat" onClick={fn} />);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });

  it('渲染自定义 style', () => {
    const component = mount(
      <Icon type="wechat" style={{ height: '40px', width: '40px' }} />
    );
    expect(component.find('svg').get(0).props.style).toHaveProperty(
      'height',
      '40px'
    );
  });

  it('渲染自定义 rotate', () => {
    const component = mount(<Icon type="wechat" rotate={180} />);
    expect(component.find('svg').get(0).props.style).toHaveProperty(
      'transform',
      'rotate(180deg)'
    );
  });
});
