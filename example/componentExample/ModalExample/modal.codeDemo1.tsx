import React, { useState } from 'react';
import { Modal, Button } from 'algae-ui/lib';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onClose = () => setVisible(false);

  return (
    <div className="modal-list">
      <Button buttonType="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        visible={visible}
        onClose={onClose}
        title="Modal Box"
        closeOnClickMask
        buttons={[
          <Button key="btn1" ghost onClick={onClose}>
            Cancel
          </Button>,
          <Button key="btn2" buttonType="success" onClick={onClose}>
            OK
          </Button>
        ]}
      >
        <p>Modal Message</p>
        <p>Modal Message</p>
        <p>Modal Message</p>
      </Modal>
    </div>
  );
};
