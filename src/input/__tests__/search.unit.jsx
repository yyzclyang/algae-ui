import React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Search } from '../index';

describe('Search', () => {
  it('渲染一个 Search', () => {
    const component = renderer
      .create(<Search searchButton="Search" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染一个 Search2', () => {
    const component = renderer.create(<Search searchButton={true} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('点击 SearchButton 触发 onSearch', () => {
    const fn = jest.fn();
    const component = mount(<Search searchButton="Search" onSearch={fn} />);
    component.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('点击 SearchButton 触发 onSearch 2', () => {
    const fn = jest.fn();
    const component = mount(<Search searchButton={true} onSearch={fn} />);
    component.find('button').simulate('click');
    expect(fn).toBeCalled();
  });

  it('Search 输入时触发 onChange', () => {
    const fn = jest.fn();
    const component = mount(<Search searchButton={true} onChange={fn} />);
    component.find('input').simulate('change');
    expect(fn).toBeCalled();
  });
});
