import React from 'react';
import * as renderer from 'react-test-renderer';
import Switch from '../index';
import { Icon } from '../../index';
import { mount } from 'enzyme/build';

describe('Switch', () => {
  it('渲染一个基本的 Switch', () => {
    const component = renderer.create(<Switch />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个禁用的 Switch', () => {
    const component = renderer.create(<Switch disabled />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个 loading 状态的 Switch', () => {
    const component = renderer.create(<Switch loading />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个选中状态内容为 string 的 Switch', () => {
    const component = renderer
      .create(<Switch defaultChecked checkedEl="开" uncheckedEl="关" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个选中状态内容为 React.Element 的 Switch', () => {
    const component = renderer
      .create(
        <Switch
          defaultChecked
          checkedEl={<Icon type="check" />}
          uncheckedEl={<Icon type="close" />}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('响应点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Switch onClick={fn} />);
    component.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('点击时触发 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Switch onChange={fn} />);
    component.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('disabled 点击时不可触发 onChange 事件', () => {
    const fn = jest.fn();
    const component = mount(<Switch disabled onChange={fn} />);
    component.find('button').simulate('click');
    expect(fn).not.toBeCalled();
  });

  it('点击时改变 Switch 的状态', () => {
    let checked = false;
    const component = mount(
      <Switch
        checked={checked}
        onChange={(value) => {
          checked = value;
        }}
      />
    );
    component.find('button').simulate('click');
    expect(checked).toEqual(true);
  });
});
