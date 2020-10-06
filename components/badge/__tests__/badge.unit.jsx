import React from 'react';
import TestRenderer from 'react-test-renderer';
import Badge from '../index';
import { Avatar, Icon } from '../../index';

describe('Badge', () => {
  it('渲染普通 Badge', () => {
    const component = TestRenderer.create(
      <Badge count={5}>
        <Avatar shape="square" />
      </Badge>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染 count 为 0 的 Badge', () => {
    const component = TestRenderer.create(
      <Badge count={0} showZero>
        <Avatar shape="square" />
      </Badge>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染图标型 Badge', () => {
    const component = TestRenderer.create(
      <Badge
        count={
          <Icon
            type="warning-circle"
            style={{ fill: '#e23c39', fontSize: '12px' }}
          />
        }
      >
        <Avatar shape="square" />
      </Badge>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染小红点型 Badge', () => {
    const component = TestRenderer.create(
      <Badge count={5} dot>
        <Avatar shape="square" />
      </Badge>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染独立的 Badge', () => {
    const component = TestRenderer.create(
      <Badge
        count={0}
        showZero
        style={{
          background: '#FFFFFF',
          color: '#8F8F8F',
          boxShadow: '0 0 0 1px #d9d9d9 inset'
        }}
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染封顶数字的 Badge', () => {
    const component = TestRenderer.create(
      <Badge count={11} overflowCount={10}>
        <Avatar shape="square" />
      </Badge>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
