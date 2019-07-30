import React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { TextArea } from '../index';

describe('TextArea', () => {
  it('渲染一个 TextArea', () => {
    const component = renderer.create(<TextArea />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('TextArea 输入时触发 onChange', () => {
    const fn = jest.fn();
    const component = mount(<TextArea onChange={fn} />);
    component.find('textarea').simulate('change');
    expect(fn).toBeCalled();
  });

  it('测试 defaultValue', () => {
    const component = mount(
      <TextArea defaultValue="default value" value="" onChange={() => {}} />
    );
    expect(component.find('textarea').text()).toBe('default value');
  });

  it('value 的优先级高于 defaultValue', () => {
    const component = mount(
      <TextArea
        defaultValue="default value"
        value="value"
        onChange={() => {}}
      />
    );
    expect(component.find('textarea').text()).toBe('value');
  });
});
