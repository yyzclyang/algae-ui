import React from 'react';
import * as renderer from 'react-test-renderer';
import Radio from '../index';
import { mount } from 'enzyme';

describe('Radio', () => {
  it('渲染一个 Radio', () => {
    const component = renderer.create(<Radio>radio</Radio>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 checked', () => {
    const component = renderer.create(<Radio checked>radio</Radio>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 disabled', () => {
    const component = renderer.create(<Radio disabled>radio</Radio>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('不传递子节点', () => {
    const component = renderer.create(<Radio disabled />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Radio onChange={fn}>radio</Radio>);
    component.find('input').simulate('change');
    expect(fn).toBeCalled();
  });

  it('disabled 时不可响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Radio disabled onChange={fn}>
        radio
      </Radio>
    );
    component.find('input').simulate('change');
    expect(fn).not.toBeCalled();
  });
});
