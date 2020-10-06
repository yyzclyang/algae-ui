import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Checkbox, { CheckboxGroup } from '../index';

describe('RadioGroup', () => {
  it('渲染一个 RadioGroup', () => {
    const component = TestRenderer.create(
      <CheckboxGroup>
        <Checkbox>radio1</Checkbox>
        <Checkbox>radio2</Checkbox>
      </CheckboxGroup>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('根据 options 来渲染 RadioGroup', () => {
    const options = [
      'a',
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c', disabled: true }
    ];
    const component = TestRenderer.create(
      <CheckboxGroup options={options} />
    ).toJSON();
    const component2 = TestRenderer.create(
      <CheckboxGroup disabled options={options} />
    ).toJSON();
    expect(component).toMatchSnapshot();
    expect(component2).toMatchSnapshot();
  });

  it('接受 name disabled', () => {
    const component = TestRenderer.create(
      <CheckboxGroup name="test" disabled>
        <Checkbox>radio1</Checkbox>
        <Checkbox>radio2</Checkbox>
      </CheckboxGroup>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('children 为 string', () => {
    const component = TestRenderer.create(
      <CheckboxGroup>radio</CheckboxGroup>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 value', () => {
    const component = TestRenderer.create(
      <CheckboxGroup value={['1']}>
        <Checkbox value="1">radio1</Checkbox>
        <Checkbox value="2">radio2</Checkbox>
      </CheckboxGroup>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('配置模式接受 value', () => {
    const options = [
      'a',
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c', disabled: true }
    ];
    const component = TestRenderer.create(
      <CheckboxGroup value={['a']} options={options} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('点击子 Checkbox 触发 onChange', () => {
    const fn = jest.fn();
    const component = mount(
      <CheckboxGroup onChange={fn}>
        <Checkbox>radio1</Checkbox>
      </CheckboxGroup>
    );
    component.find('input').simulate('change');
    expect(fn).toBeCalled();
  });

  it('点击已 checked 的子 Checkbox 触发 onChange', () => {
    let checkedList = ['A'];
    const component = mount(
      <CheckboxGroup
        onChange={(value) => {
          checkedList = value;
        }}
        value={checkedList}
      >
        <Checkbox value="A">radio1</Checkbox>
      </CheckboxGroup>
    );
    component.find('input').simulate('change');
    expect(checkedList).toEqual([]);
  });
});
