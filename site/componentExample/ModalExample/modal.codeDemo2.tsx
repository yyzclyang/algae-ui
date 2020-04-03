import React from 'react';
import { Modal, confirm, Button } from 'algae-ui';

export default () => {
  const showModal = () =>
    confirm({
      title: 'This is a confirm message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      iconType: 'question-circle',
      iconStyle: { fill: 'red' },
      okButton: {
        content: 'Ok',
        onClick: () => {
          console.log('你点击了 OK');
        }
      },
      cancelButton: {
        content: 'Cancel',
        onClick: () => {
          console.log('你点击了 Cancel');
        }
      }
    });

  const alert = () => {
    Modal.alert({
      title: 'This is a Modal.alert message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      iconType: 'question-circle',
      iconStyle: { fill: 'red' },
      okButton: {
        content: 'Ok',
        onClick: () => {
          console.log('你点击了 OK');
        }
      },
      cancelButton: {
        content: 'Cancel',
        onClick: () => {
          console.log('你点击了 Cancel');
        }
      }
    });
  };

  return (
    <div className="modal-example-list">
      <Button buttonType="primary" onClick={showModal}>
        confirm
      </Button>
      <Button onClick={alert}>Modal.alert</Button>
    </div>
  );
};
