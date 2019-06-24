import React from 'react';
import * as renderer from 'react-test-renderer';
import Button, { ButtonGroup } from '../index';

describe('ButtonGroup', () => {
  it('渲染 ButtonGroup', () => {
    const component = renderer
      .create(
        <ButtonGroup>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
        </ButtonGroup>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
