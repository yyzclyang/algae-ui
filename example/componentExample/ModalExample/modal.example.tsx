import React, { useState } from 'react';
import { Modal } from 'ROOT/src';
import { Button } from 'ROOT/src';
import { confirm } from 'ROOT/src/modal';

const ModalExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Modal</Button>
      {visible && (
        <Modal
          visible
          onClose={() => setVisible(false)}
          buttons={[
            <Button key="btn1" ghost onClick={() => setVisible(false)}>
              cancel
            </Button>,
            <Button
              key="btn2"
              buttonType="success"
              onClick={() => setVisible(false)}
            >
              OK
            </Button>
          ]}
        >
          Modal Message
        </Modal>
      )}
      <Button
        buttonType="primary"
        onClick={() => {
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
          setTimeout(() => {
            modal.update({
              title: 'update',
              content: (
                <div>
                  <p>some messages has updated...</p>
                  <p>some messages has updated...</p>
                </div>
              )
            });
          }, 2000);
        }}
      >
        confirm
      </Button>
      <Button
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
              onClick: (e) => {
                console.log('你点击了 OK');
              }
            },
            cancelButton: {
              content: 'Cancel',
              onClick: (e) => {
                console.log('你点击了 Cancel');
              }
            }
          });
        }}
      >
        Modal.alert
      </Button>
      <Button
        buttonType="primary"
        onClick={() => {
          Modal.info({
            title: 'this is title',
            content: 'some message',
            onClick: (e) => {
              console.log(e);
            }
          });
        }}
      >
        Modal.info
      </Button>
      <Button
        buttonType="success"
        onClick={() => {
          Modal.success({
            title: 'this is title',
            content: 'some message',
            onClick: (e) => {
              console.log(e);
            }
          });
        }}
      >
        Modal.success
      </Button>
      <Button
        buttonType="danger"
        onClick={() => {
          Modal.error({
            title: 'this is title',
            content: 'some message',
            onClick: (e) => {
              console.log(e);
            }
          });
        }}
      >
        Modal.error
      </Button>
      <Button
        buttonType="default"
        onClick={() => {
          Modal.warning({
            title: 'this is title',
            content: 'some message',
            onClick: (e) => {
              console.log(e);
            }
          });
        }}
      >
        Modal.warning
      </Button>
    </div>
  );
};

export default ModalExample;
