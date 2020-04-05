import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme/build';
import { Tree } from '../index';
import { Icon } from '../../index';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('Tree', () => {
  it('渲染带 Icon，可勾选，默认勾选，子节点默认不展开， 有节点禁止勾选的 Tree', () => {
    const component = TestRenderer.create(
      <Tree
        sourceData={[
          {
            text: '1',
            value: '1',
            icon: 'apple',
            expanded: false,
            children: [
              { text: '1-1', value: '1-1', icon: <Icon type="apple" /> },
              { text: '1-2', value: '1-2', disabledCheckbox: true }
            ]
          }
        ]}
        checkable
        defaultValues={['1']}
        switcherIcons={['apple', 'android']}
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('响应 expand', () => {
    const component = mount(
      <Tree
        sourceData={[
          {
            text: '1',
            value: '1',
            children: [
              { text: '1-1', value: '1-1' },
              { text: '1-2', value: '1-2' }
            ]
          }
        ]}
        checkable
      />
    );
    component.find('.algae-ui-tree-item-switcher').simulate('click');
    expect(component.render()).toMatchSnapshot();
    jest.runAllTimers();
    component.find('.algae-ui-tree-item-switcher').simulate('click');
    expect(component.render()).toMatchSnapshot();
  });
  it('autoCheck 的 Tree 响应勾选', () => {
    const onSelect = jest.fn();
    const component = mount(
      <Tree
        sourceData={[
          {
            text: '1',
            value: '1',
            children: [
              { text: '1-1', value: '1-1' },
              { text: '1-2', value: '1-2' }
            ]
          }
        ]}
        checkable
        autoCheck
        onSelect={onSelect}
      />
    );
    component
      .find('.algae-ui-tree-item-check-box')
      .find('input')
      .at(0)
      .simulate('change');
    expect(onSelect).toBeCalled();
  });
  it('受控 Tree 更新值', () => {
    const component = mount(
      <Tree
        sourceData={[
          {
            text: '1',
            value: '1',
            children: [
              { text: '1-1', value: '1-1' },
              { text: '1-2', value: '1-2' }
            ]
          }
        ]}
        checkable
        autoCheck
        selectedValues={[]}
        defaultValues={[]}
      />
    );
    component.setProps({ selectedValues: ['1'] });
    expect(component.render()).toMatchSnapshot();
  });
});
