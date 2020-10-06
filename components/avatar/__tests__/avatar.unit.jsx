import React from 'react';
import TestRenderer from 'react-test-renderer';
import Avatar from '../index';

describe('Avatar', () => {
  it('渲染默认 Avatar', () => {
    const component = TestRenderer.create(<Avatar />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染方形的 Avatar', () => {
    const component = TestRenderer.create(<Avatar shape="square" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染自定义尺寸的 Avatar', () => {
    const component = TestRenderer.create(
      <Avatar size={48} shape="square" />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染自定义图片的 Avatar', () => {
    const component = TestRenderer.create(
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="头像"
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染自定义文案的 Avatar', () => {
    const component = TestRenderer.create(<Avatar>User</Avatar>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染自定义样式的 Avatar', () => {
    const component = TestRenderer.create(
      <Avatar style={{ color: 'red', background: '#FADFC9' }}>U</Avatar>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
