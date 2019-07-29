import React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Input from '../index';
import Button from '../../button';

describe('Input', () => {
  it('渲染一个 Input', () => {
    const component = renderer.create(<Input />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染 clear 按钮', () => {
    const component = mount(<Input allowClear value="v" onChange={() => {}} />);
    expect(component.find('svg')).toHaveLength(1);
  });

  it('点击 clear 按钮执行 clearFn', () => {
    const fn = jest.fn();
    const component = mount(
      <Input allowClear clearFn={fn} value="v" onChange={() => {}} />
    );
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });

  it('接受 inputAfterNode', () => {
    const node = <Button>node</Button>;
    const component = mount(
      <Input inputAfterNode={node} value="v" onChange={() => {}} />
    );
    expect(component.find('button')).toHaveLength(1);
  });
});
