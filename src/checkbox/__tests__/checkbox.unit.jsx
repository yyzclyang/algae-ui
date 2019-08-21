import React from 'react';
import * as renderer from 'react-test-renderer';
import Checkbox from '../index';
import { mount } from 'enzyme';

describe('Checkbox', () => {
  it('渲染一个 Checkbox', () => {
    const component = renderer.create(<Checkbox>radio</Checkbox>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 checked', () => {
    const component = renderer
      .create(<Checkbox checked>radio</Checkbox>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 indeterminate', () => {
    const component = renderer
      .create(<Checkbox indeterminate>radio</Checkbox>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 disabled', () => {
    const component = renderer
      .create(<Checkbox disabled>radio</Checkbox>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('不传递子节点', () => {
    const component = renderer.create(<Checkbox disabled />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Checkbox onChange={fn}>radio</Checkbox>);
    component.find('input').simulate('change');
    expect(fn).toBeCalled();
  });

  it('disabled 时不可响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Checkbox disabled onChange={fn}>
        radio
      </Checkbox>
    );
    component.find('input').simulate('change');
    expect(fn).not.toBeCalled();
  });
});
