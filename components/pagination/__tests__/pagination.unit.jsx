import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Pagination from '../index';

describe('Pagination', () => {
  it('渲染普通 Pagination', () => {
    const component = TestRenderer.create(
      <Pagination total={50} current={2} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染更多分页的 Pagination', () => {
    const component = TestRenderer.create(
      <Pagination total={150} current={7} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Pagination total={150} current={7} onChange={fn} />
    );
    component.find('.algae-ui-pagination-page-item-6').simulate('click');
    expect(fn).toBeCalledWith(6);
  });
  it('disable 之后不能响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Pagination disable total={150} current={7} onChange={fn} />
    );
    component.find('.algae-ui-pagination-page-item-6').simulate('click');
    expect(fn).not.toHaveBeenCalled();
  });
  it('渲染更多分页时，会出现 prev 的省略 item，可响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(
      <Pagination total={150} current={7} onChange={fn} />
    );
    component
      .find('.algae-ui-pagination-page-item-ellipsis-prev')
      .simulate('click');
    expect(fn).toBeCalledWith(2);
  });
  it('渲染更多分页时，会出现向前向后的省略按钮，可响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Pagination total={150} onChange={fn} />);
    component
      .find('.algae-ui-pagination-page-item-ellipsis-next')
      .simulate('click');
    expect(fn).toBeCalledWith(6);
    component
      .find('.algae-ui-pagination-page-item-ellipsis-prev')
      .simulate('click');
    expect(fn).toBeCalledWith(1);
  });
  it('当页码数大于 1 时，会出现上一个下一个的按钮，可响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Pagination total={50} onChange={fn} />);
    component
      .find('.algae-ui-pagination-page-item-action-right')
      .simulate('click');
    expect(fn).toBeCalledWith(2);
    component
      .find('.algae-ui-pagination-page-item-action-left')
      .simulate('click');
    expect(fn).toBeCalledWith(1);
  });
  it('当页码数大于 1 时，会出现上一个下一个的按钮，当当前页为 1 时，上一个按钮不可用', () => {
    const fn = jest.fn();
    const component = mount(<Pagination total={50} onChange={fn} />);
    expect(
      component
        .find('.algae-ui-pagination-page-item-action-left')
        .hasClass('algae-ui-pagination-page-item-disable')
    ).toEqual(true);
    component
      .find('.algae-ui-pagination-page-item-action-left')
      .simulate('click');
    expect(fn).not.toHaveBeenCalled();
  });
  it('当页码数大于 1 时，会出现上一个下一个的按钮，当当前页为最大页时，下一个按钮不可用', () => {
    const fn = jest.fn();
    const component = mount(<Pagination total={50} onChange={fn} />);
    component.find('.algae-ui-pagination-page-item-5').simulate('click');
    expect(fn).toBeCalledTimes(1);
    expect(
      component
        .find('.algae-ui-pagination-page-item-action-right')
        .hasClass('algae-ui-pagination-page-item-disable')
    ).toEqual(true);
    component
      .find('.algae-ui-pagination-page-item-action-right')
      .simulate('click');
    expect(fn).toBeCalledTimes(1);
  });
});
