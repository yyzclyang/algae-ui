import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style/modal.scss';
import { Icon } from '../index';
import { classNames } from '../utils';

interface ModalProps {
  visible: boolean;
  className?: string;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  buttons?: React.ReactElement[];
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    visible,
    className,
    buttons,
    onClose,
    closeOnClickMask,
    children
  } = props;
  const onClickClose: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    closeOnClickMask && onClose(e);
  };

  const modalDom = visible ? (
    <React.Fragment>
      <div className="algae-ui-modal-mask" onClick={onClickMask}></div>
      <div className={classNames('algae-ui-modal', className)}>
        <header className="algae-ui-header">
          <span>提示</span>
          <div className="algae-ui-close" onClick={onClickClose}>
            <Icon type="close" style={{ width: '12px', height: '12px' }} />
          </div>
        </header>
        <main>{children}</main>
        <footer>{buttons}</footer>
      </div>
    </React.Fragment>
  ) : null;

  return ReactDOM.createPortal(modalDom, document.body);
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
  visible: false,
  closeOnClickMask: false,
  children: null
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  closeOnClickMask: PropTypes.bool,
  buttons: PropTypes.array,
  children: PropTypes.node.isRequired
};

export default Modal;
