import React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../index';
import { mount } from 'enzyme';

describe('Button', () => {
  it('渲染一个 buttonType 为 primary 的 Button', () => {
    const json = renderer
      .create(<Button buttonType="primary">button</Button>)
      .toJSON();
    expect(json).toMatchSnapshot();
  });

  it('渲染文本子节点', () => {
    const component = mount(<Button buttonType="primary">button</Button>);
    expect(component.text()).toEqual('button');
  });

  it('响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Button buttonType="primary" onClick={fn}>
        button
      </Button>
    );
    component.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('渲染 ghost 类型的 Button', () => {
    const component = mount(
      <Button buttonType="primary" ghost>
        button
      </Button>
    );
    expect(component.find('button').hasClass('ghost')).toEqual(true);
  });

  it('渲染自定义 style', () => {
    const component = mount(
      <Button buttonType="primary" style={{ height: '40px', width: '40px' }}>
        button
      </Button>
    );
    expect(component.find('button').get(0).props.style).toHaveProperty(
      'height',
      '40px'
    );
  });
  it('渲染 Icon', () => {
    const component = mount(
      <Button buttonType="primary" icon="wechat">
        button
      </Button>
    );
    expect(component.find('svg')).toHaveLength(1);
  });
});
