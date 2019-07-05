import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Modal, { confirm } from '../index';
import Button from '../../button';

let visible = true;
const onClose = () => (visible = false);
const modal = (
  <Modal
    visible={visible}
    closeOnClickMask
    onClose={onClose}
    buttons={[
      <Button id="btn1" key="btn1" ghost onClick={onClose}>
        Cancel
      </Button>,
      <Button id="btn2" key="btn2" buttonType="success" onClick={onClose}>
        OK
      </Button>
    ]}
  >
    Modal Message
  </Modal>
);

const modalWithInvisible = (
  <Modal visible={false} onClose={onClose} className="modal-with-invisible">
    Modal Message
  </Modal>
);

const modalWithoutClosable = (
  <Modal
    className="modal-without-closable"
    visible={visible}
    closeOnClickMask
    closable={false}
    onClose={onClose}
    buttons={[
      <Button id="btn1" key="btn1" ghost onClick={onClose}>
        Cancel
      </Button>,
      <Button id="btn2" key="btn2" buttonType="success" onClick={onClose}>
        OK
      </Button>
    ]}
  >
    Modal Message
  </Modal>
);

describe('Modal', () => {
  it('渲染一个 Modal', () => {
    const component = mount(modal);
    expect(component.innerText).toBe(undefined);
    expect(document.body.querySelectorAll('.algae-ui-dialog-mask').length).toBe(
      1
    );
    expect(document.body.querySelectorAll('.algae-ui-dialog').length).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-close')[0]
    );
  });

  it('渲染一个 modalWithInvisible 的 Modal', () => {
    mount(modalWithInvisible);
    expect(
      document.body.querySelectorAll(
        '.algae-ui-dialog-mask.modal-with-invisible'
      ).length
    ).toBe(0);
    expect(
      document.body.querySelectorAll('.algae-ui-dialog.modal-with-invisible')
        .length
    ).toBe(0);
  });

  it('渲染一个没有关闭 Icon 的 Modal', () => {
    mount(modalWithoutClosable);
    expect(
      document.body.querySelectorAll(
        '.algae-ui-dialog.modal-without-closable > .algae-ui-header > .algae-ui-close'
      ).length
    ).toBe(0);
  });

  it('点击 Cancel 按钮 Modal 消失', () => {
    mount(modal);
    ReactTestUtils.Simulate.click(document.querySelectorAll('#btn1')[0]);
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-modal-mask').length
      ).toBe(0);
      expect(document.body.querySelectorAll('.algae-ui-modal').length).toBe(0);
    }, 100);
  });

  it('点击 OK 按钮 Modal 消失', () => {
    mount(modal);
    ReactTestUtils.Simulate.click(document.querySelectorAll('#btn2')[0]);
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-dialog-mask').length
      ).toBe(0);
      expect(document.body.querySelectorAll('.algae-ui-dialog').length).toBe(0);
    }, 100);
  });

  it('点击 Close 按钮 Modal 消失', () => {
    mount(modal);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-close')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-dialog-mask').length
      ).toBe(0);
      expect(document.body.querySelectorAll('.algae-ui-dialog').length).toBe(0);
    }, 100);
  });

  it('设置 closeOnClickMask 为 true 后，点击 Modal 浮层 Modal 消失', () => {
    mount(modal);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-dialog-mask')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-dialog-mask').length
      ).toBe(0);
      expect(document.body.querySelectorAll('.algae-ui-dialog').length).toBe(0);
    }, 100);
  });

  it('Modal.alert', () => {
    const button = (
      <Button
        id="alert-test"
        onClick={() => {
          Modal.alert({
            title: 'This is a notification message',
            content: (
              <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
              </div>
            ),
            iconType: 'like',
            okButton: {
              content: 'Ok',
              onClick: () => {}
            },
            cancelButton: {
              content: 'Cancel',
              onClick: () => {}
            }
          });
        }}
      >
        Modal.alert
      </Button>
    );
    const buttonDom = mount(button);
    buttonDom.find('button').simulate('click');
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-confirm-dialog .algae-ui-button')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
      ).toBe(0);
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog').length
      ).toBe(0);
    }, 100);
  });

  it('Modal.info', () => {
    const button = (
      <Button
        buttonType="primary"
        onClick={() => {
          Modal.info({
            title: 'this is title',
            content: 'some message',
            onClick: () => {}
          });
        }}
      >
        Modal.info
      </Button>
    );
    const buttonDom = mount(button);
    buttonDom.find('button').simulate('click');
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-confirm-dialog .algae-ui-button')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
      ).toBe(0);
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog').length
      ).toBe(0);
    }, 100);
  });

  it('Modal.success', () => {
    const button = (
      <Button
        buttonType="success"
        onClick={() => {
          Modal.success({
            title: 'this is title',
            content: 'some message',
            onClick: () => {}
          });
        }}
      >
        Modal.success
      </Button>
    );
    const buttonDom = mount(button);
    buttonDom.find('button').simulate('click');
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-confirm-dialog .algae-ui-button')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
      ).toBe(0);
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog').length
      ).toBe(0);
    }, 100);
  });

  it('Modal.error', () => {
    const button = (
      <Button
        buttonType="danger"
        onClick={() => {
          Modal.error({
            title: 'this is title',
            content: 'some message',
            onClick: () => {}
          });
        }}
      >
        Modal.error
      </Button>
    );
    const buttonDom = mount(button);
    buttonDom.find('button').simulate('click');
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-confirm-dialog .algae-ui-button')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
      ).toBe(0);
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog').length
      ).toBe(0);
    }, 100);
  });

  it('Modal.warning', () => {
    const button = (
      <Button
        buttonType="default"
        onClick={() => {
          Modal.warning({
            title: 'this is title',
            content: 'some message',
            onClick: () => {}
          });
        }}
      >
        Modal.warning
      </Button>
    );
    const buttonDom = mount(button);
    buttonDom.find('button').simulate('click');
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);
    ReactTestUtils.Simulate.click(
      document.querySelectorAll('.algae-ui-confirm-dialog .algae-ui-button')[0]
    );
    setTimeout(() => {
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
      ).toBe(0);
      expect(
        document.body.querySelectorAll('.algae-ui-confirm-dialog').length
      ).toBe(0);
    }, 100);
  });

  it('confirm', () => {
    const modal = confirm({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      iconType: 'like',
      okButton: {
        content: 'Ok',
        onClick: () => {}
      },
      cancelButton: {
        content: 'Cancel',
        onClick: () => {}
      }
    });
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(1);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(1);

    modal.update({ title: 'title', content: 'content' });
    expect(
      document.body.querySelectorAll('.confirm-dialog-message > .title')[0]
        .innerHTML
    ).toBe('title');
    expect(
      document.body.querySelectorAll('.confirm-dialog-message > .content')[0]
        .innerHTML
    ).toBe('content');

    modal.destroy();
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog-mask').length
    ).toBe(0);
    expect(
      document.body.querySelectorAll('.algae-ui-confirm-dialog').length
    ).toBe(0);
  });

  it('confirm 只接受一个 button', () => {
    const modal = confirm({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      iconType: 'like',
      cancelButton: {
        content: 'Cancel',
        onClick: () => {}
      }
    });
    expect(
      document.body.querySelectorAll(
        '.algae-ui-confirm-dialog .algae-ui-button'
      ).length
    ).toBe(1);

    modal.destroy();
  });
});
