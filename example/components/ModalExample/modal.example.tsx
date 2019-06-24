import React, { useState } from 'react';
import { Modal } from 'ROOT/src';
import Button from 'ROOT/src/button';

const ModalExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>Modal</Button>
      {visible && <Modal visible>Modal Message</Modal>}
    </div>
  );
};

export default ModalExample;
