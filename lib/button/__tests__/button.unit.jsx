import React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../index';
import { mount } from 'enzyme';

describe('Button', () => {
  it('buttonType 为 primary', () => {
    const component = renderer
      .create(<Button buttonType="primary">button</Button>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受字符串类型子节点', () => {
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

  it('接受 ghost', () => {
    const component = mount(
      <Button buttonType="primary" ghost>
        button
      </Button>
    );
    expect(component.find('button').hasClass('algae-ui-button-ghost')).toEqual(
      true
    );
  });

  it('接受自定义 style', () => {
    const component = mount(
      <Button buttonType="primary" style={{ height: '40px' }}>
        button
      </Button>
    );
    expect(component.find('button').get(0).props.style).toHaveProperty(
      'height',
      '40px'
    );
  });

  it('接受 full', () => {
    const component = mount(
      <Button buttonType="primary" full>
        button
      </Button>
    );
    expect(component.find('button').hasClass('algae-ui-button-full')).toEqual(
      true
    );
  });

  it('接受 loading', () => {
    const component = mount(
      <Button buttonType="primary" loading>
        button
      </Button>
    );
    expect(component.find('svg')).toHaveLength(1);
  });

  it('接受 icon', () => {
    const component = mount(
      <Button buttonType="primary" icon="wechat">
        button
      </Button>
    );
    expect(component.find('svg')).toHaveLength(1);
  });
});
