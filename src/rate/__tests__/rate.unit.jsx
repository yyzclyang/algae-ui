import React from 'react';
import * as renderer from 'react-test-renderer';
import Rate from '../index';
import { mount } from 'enzyme';

describe('Rate', () => {
  it('渲染一个最基本的 Rate', () => {
    const component = renderer.create(<Rate />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个带参数的 Rate', () => {
    const component = renderer
      .create(
        <Rate
          value={2}
          count={5}
          allowClear
          allowHalf
          className="test"
          tips={['terrible', 'bad', 'normal', 'good', 'wonderful']}
          disabled
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Rate 激活的星星个数等于 value', () => {
    const component = mount(<Rate value={2} />);

    expect(component.find('.algae-ui-rate-star-full')).toHaveLength(2);
  });

  it('点击时响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} onChange={fn} />);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });

  it('disabled 点击时不响应 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} disabled onChange={fn} />);
    component.find('svg').simulate('click');
    expect(fn).not.toBeCalled();
  });

  it('鼠标滑进星星时触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} onHoverChange={fn} />);
    component.find('svg').simulate('mouseenter');
    expect(fn).toBeCalled();
  });

  it('allowHalf 鼠标在星星上左右两边滑动时会触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} allowHalf onHoverChange={fn} />);
    component.find('svg').simulate('mousemove');
    expect(fn).toBeCalled();
  });

  it('鼠标滑出 Rate 时触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} onHoverChange={fn} />);
    component.find('.algae-ui-rate').simulate('mouseleave');
    expect(fn).toBeCalled();
  });

  it('disabled 鼠标滑进星星时不触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} disabled onHoverChange={fn} />);
    component.find('svg').simulate('mouseenter');
    expect(fn).not.toBeCalled();
  });

  it('disabled allowHalf 鼠标在星星上左右两边滑动时不会触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(
      <Rate count={1} disabled allowHalf onHoverChange={fn} />
    );
    component.find('svg').simulate('mousemove');
    expect(fn).not.toBeCalled();
  });

  it('disabled 鼠标滑出 Rate 时不触发 onHoverChange', () => {
    const fn = jest.fn();
    const component = mount(<Rate count={1} disabled onHoverChange={fn} />);
    component.find('.algae-ui-rate').simulate('mouseleave');
    expect(fn).not.toBeCalled();
  });
});
