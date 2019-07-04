import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../button';
import { Icon } from '../index';
import { classNames } from '../utils';
import './style/confirm.scss';

interface ConfirmDialogProps {
  visible: boolean;
  className?: string;
  iconType?: string;
  iconStyle?: React.CSSProperties;
  title?: string;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  buttons?: React.ReactElement[];
  children: React.ReactNode;
}

const ConfirmDialog: React.FunctionComponent<ConfirmDialogProps> = (
  props: ConfirmDialogProps
) => {
  const {
    visible,
    iconType,
    iconStyle,
    title,
    className,
    buttons,
    onClose,
    closeOnClickMask,
    children
  } = props;

  const onClickMask: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    closeOnClickMask && onClose(e);
  };

  const dialogDom = visible ? (
    <React.Fragment>
      <div className="algae-ui-confirm-dialog-mask" onClick={onClickMask} />
      <div className={classNames('algae-ui-confirm-dialog', className)}>
        <main>
          {iconType && (
            <div className="icon">
              <Icon type={iconType} style={iconStyle} />
            </div>
          )}
          <div className="info">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
          </div>
        </main>
        <footer>{buttons}</footer>
      </div>
    </React.Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

ConfirmDialog.displayName = 'Dialog';

ConfirmDialog.defaultProps = {
  visible: false,
  title: '温馨提示',
  closeOnClickMask: false,
  children: null
};

ConfirmDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  iconType: PropTypes.string,
  iconStyle: PropTypes.object,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  closeOnClickMask: PropTypes.bool,
  buttons: PropTypes.array,
  children: PropTypes.node.isRequired
};

export interface ConfirmProps {
  content: string;
  iconType?: string;
  iconStyle?: React.CSSProperties;
  onOk?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
}

const confirm = ({
  content,
  iconType,
  iconStyle,
  onOk,
  onCancel
}: ConfirmProps) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const onOkClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose();
    onOk && onOk(e);
  };

  const onCancelClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose();
    onCancel && onCancel(e);
  };

  const component = (
    <ConfirmDialog
      visible
      iconType={iconType}
      iconStyle={iconStyle}
      onClose={onClose}
      buttons={[
        <Button key="btn1" ghost onClick={onCancelClick}>
          cancel
        </Button>,
        <Button key="btn2" buttonType="success" onClick={onOkClick}>
          OK
        </Button>
      ]}
    >
      {content}
    </ConfirmDialog>
  );

  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);

  return onClose;
};

confirm.prototype = {
  content: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconStyle: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};

export default confirm;
