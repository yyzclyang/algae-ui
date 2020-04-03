import React from 'react';
import { mount } from 'enzyme';
import { Scroll } from '../index';

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

describe('Scroll', () => {
  it('渲染 Scroll', () => {
    const component = mount(
      <Scroll>
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </Scroll>
    );
    expect(component.find('.algae-ui-scroll-container')).toHaveLength(1);
    expect(component.find('.algae-ui-scroll')).toHaveLength(1);
    expect(component.find('p')).toHaveLength(3);
  });

  it('接受自定义属性', () => {
    const component = mount(
      <Scroll rightGap={5} scrollBarWidth={10} scrollBarColor="red">
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </Scroll>
    );
    expect(
      component.find('.algae-ui-scroll-bar').get(0).props.style
    ).toHaveProperty('right', '5px');
  });

  it('响应 onScroll 事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Scroll onScroll={fn}>
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </Scroll>
    );
    component.find('.algae-ui-scroll').simulate('scroll');
    expect(fn).toBeCalled();
  });
});
