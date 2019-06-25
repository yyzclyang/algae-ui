import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/modal.scss';
import { Icon, Button } from '../index';
import { classNames } from '../utils';

interface ModalProps {
  visible: boolean;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { className, children } = props;
  const [visible, setVisible] = useState<boolean>(props.visible);
  return visible ? (
    <React.Fragment>
      <div className="algae-ui-modal-mask"></div>
      <div className={classNames('algae-ui-modal', className)}>
        <header className="algae-ui-header">
          <span>提示</span>
          <div
            className="algae-ui-close"
            onClick={() => {
              setVisible(false);
            }}
          >
            <Icon type="close" style={{ width: '12px', height: '12px' }} />
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <Button ghost style={{ width: '6em' }}>
            cancel
          </Button>
          <Button buttonType="success" style={{ width: '6em' }}>
            OK
          </Button>
        </footer>
      </div>
    </React.Fragment>
  ) : null;
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
  visible: false,
  children: null
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Modal;
