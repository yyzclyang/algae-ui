import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogProps } from './dialog';
import confirm, { ConfirmProps, UpdateProps } from './confirm';

type ButtonType = 'default' | 'primary' | 'success' | 'danger';

interface ModalFuncProps {
  title: string;
  content: React.ReactNode;
  buttonType?: ButtonType;
  buttonText?: string;
  onClick?: React.MouseEventHandler;
}

type ModalFunc = (
  props: ModalFuncProps
) => { destroy: () => void; update: (props: UpdateProps) => void };

type ModalConfirmFunc = (
  props: ConfirmProps
) => { destroy: () => void; update: (props: UpdateProps) => void };

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

  static alert: ModalConfirmFunc;
  static info: ModalFunc;
  static success: ModalFunc;
  static error: ModalFunc;
  static warning: ModalFunc;

  render() {
    return <Dialog {...this.props} />;
  }
}

Modal.alert = (props) => {
  return confirm(props);
};

type modalType = 'info' | 'success' | 'error' | 'warning';

interface ModalFuncExpandProps {
  type: modalType;
  iconType: string;
  iconStyle?: React.CSSProperties;
  defaultButtonType: ButtonType;
  defaultButtonText: string;
}

const modalExpandFunc = (
  baseConfig: ModalFuncProps,
  customConfig: ModalFuncExpandProps
) => {
  const { title, content, buttonType, buttonText, onClick } = baseConfig;
  const {
    type,
    iconType,
    iconStyle,
    defaultButtonType,
    defaultButtonText
  } = customConfig;
  return confirm({
    type,
    title,
    content,
    iconType,
    iconStyle,
    okButton: {
      buttonType: buttonType || defaultButtonType,
      content: buttonText || defaultButtonText,
      onClick: (e) => {
        onClick && onClick(e);
      }
    }
  });
};

Modal.info = (props) => {
  const defaultConfig = {
    type: 'info' as modalType,
    iconType: 'info-circle',
    iconStyle: { fill: '#1890ff' },
    defaultButtonType: 'primary' as ButtonType,
    defaultButtonText: '知道了'
  };

  return modalExpandFunc(props, defaultConfig);
};

Modal.success = (props) => {
  const defaultConfig = {
    type: 'success' as modalType,
    iconType: 'check-circle',
    iconStyle: { fill: '#52c41a' },
    defaultButtonType: 'success' as ButtonType,
    defaultButtonText: '知道了'
  };

  return modalExpandFunc(props, defaultConfig);
};

Modal.error = (props) => {
  const defaultConfig = {
    type: 'error' as modalType,
    iconType: 'close-circle',
    iconStyle: { fill: '#f5222d' },
    defaultButtonType: 'danger' as ButtonType,
    defaultButtonText: '知道了'
  };

  return modalExpandFunc(props, defaultConfig);
};

Modal.warning = (props) => {
  const defaultConfig = {
    type: 'warning' as modalType,
    iconType: 'warning-circle',
    iconStyle: { fill: '#faad14' },
    defaultButtonType: 'default' as ButtonType,
    defaultButtonText: '知道了'
  };

  return modalExpandFunc(props, defaultConfig);
};

export default Modal;
