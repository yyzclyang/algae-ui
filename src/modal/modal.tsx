import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/modal.scss';
import { Icon } from '../index';
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
        <div
          className="algae-ui-close"
          onClick={() => {
            setVisible(false);
          }}
        >
          <Icon type="close"></Icon>
        </div>
        <header className="algae-ui-header">提示</header>
        <main>{children}</main>
        <footer>
          <button>ok</button>
          <button>cancel</button>
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
