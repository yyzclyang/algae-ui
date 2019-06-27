import React from 'react';
// import * as renderer from 'react-test-renderer';
import Modal from '../index';
import Button from '../../button';
import { mount } from 'enzyme';

describe('Modal', () => {
  it('渲染一个 Modal', () => {
    let visible = true;
    const component = mount(
      <Modal
        visible={visible}
        onClose={() => (visible = false)}
        buttons={[
          <Button key="btn1" ghost onClick={() => (visible = false)}>
            cancel
          </Button>,
          <Button
            key="btn2"
            buttonType="success"
            onClick={() => (visible = false)}
          >
            OK
          </Button>
        ]}
      >
        Modal Message
      </Modal>
    );
    expect(component.innerText).toBe(undefined);
    expect(document.body.querySelectorAll('.algae-ui-modal-mask').length).toBe(
      1
    );
    expect(document.body.querySelectorAll('.algae-ui-modal').length).toBe(1);
  });
});
