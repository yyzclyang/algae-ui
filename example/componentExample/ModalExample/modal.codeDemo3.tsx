import React from 'react';
import { Modal, Button } from 'algae-ui/lib';

export default () => {
  const info = () =>
    Modal.info({
      title: 'this is title',
      content: 'some message',
      onClick: (e) => {
        console.log('点击了');
      }
    });

  const success = () =>
    Modal.success({
      title: 'this is title',
      content: 'some message',
      onClick: (e) => {
        console.log('点击了');
      }
    });

  const danger = () =>
    Modal.error({
      title: 'this is title',
      content: 'some message',
      onClick: (e) => {
        console.log('点击了');
      }
    });

  const warning = () =>
    Modal.warning({
      title: 'this is title',
      content: 'some message',
      onClick: (e) => {
        console.log('点击了');
      }
    });

  return (
    <div className="modal-example-list">
      <Button buttonType="primary" onClick={info}>
        Modal.info
      </Button>
      <Button buttonType="success" onClick={success}>
        Modal.success
      </Button>
      <Button buttonType="danger" onClick={danger}>
        Modal.error
      </Button>
      <Button buttonType="default" onClick={warning}>
        Modal.warning
      </Button>
    </div>
  );
};
