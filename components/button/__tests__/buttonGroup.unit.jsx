import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button, { ButtonGroup } from '../index';

describe('ButtonGroup', () => {
  it('渲染 ButtonGroup', () => {
    const component = TestRenderer.create(
      <ButtonGroup>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
