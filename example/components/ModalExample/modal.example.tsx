import React, { useState } from 'react';
import { Modal } from 'ROOT/src';
import { Button } from 'ROOT/src';

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
    </div>
  );
};

export default ModalExample;
