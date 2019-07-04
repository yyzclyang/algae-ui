import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogProps } from './dialog';
import { ConfirmProps } from './confirm';

interface ModalFunc extends ConfirmProps {}

interface ModalProps extends DialogProps {}

class Modal extends React.Component<ModalProps> {
  static displayName = 'Modal';
  static defaultProps = {
    visible: false,
    title: '温馨提示',
    closeOnClickMask: false,
    children: null
  };
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    closeOnClickMask: PropTypes.bool,
    buttons: PropTypes.array,
    children: PropTypes.node.isRequired
  };

  static confirm: (props: ModalFunc) => () => void;
  render() {
    return <Dialog {...this.props} />;
  }
}

export default Modal;
