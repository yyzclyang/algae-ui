import React from 'react';
import * as renderer from 'react-test-renderer';
import Radio, { RadioGroup } from '../index';
// import { mount } from 'enzyme';

describe('RadioGroup', () => {
  it('渲染一个 RadioGroup', () => {
    const component = renderer
      .create(
        <RadioGroup>
          <Radio>radio1</Radio>
          <Radio>radio2</Radio>
        </RadioGroup>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('根据 options 来渲染 RadioGroup', () => {
    const options = [
      'a',
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c', disabled: true }
    ];
    const component = renderer
      .create(<RadioGroup options={options} />)
      .toJSON();
    const component2 = renderer
      .create(<RadioGroup disabled options={options} />)
      .toJSON();
    expect(component).toMatchSnapshot();
    expect(component2).toMatchSnapshot();
  });

  it('接受 name disabled', () => {
    const component = renderer
      .create(
        <RadioGroup name="test" disabled>
          <Radio>radio1</Radio>
          <Radio>radio2</Radio>
        </RadioGroup>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('children 为 string', () => {
    const component = renderer.create(<RadioGroup>radio</RadioGroup>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('接受 value', () => {
    const component = renderer
      .create(
        <RadioGroup value="1">
          <Radio value="1">radio1</Radio>
          <Radio value="2">radio2</Radio>
        </RadioGroup>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('配置模式接受 value', () => {
    const options = [
      'a',
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c', disabled: true }
    ];
    const component = renderer
      .create(<RadioGroup value="b" options={options} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
