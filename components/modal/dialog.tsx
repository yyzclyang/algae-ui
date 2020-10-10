import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import { classNames } from '../utils';

export interface DialogProps {
  visible: boolean;
  closable?: boolean;
  className?: string;
  title?: string;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  buttons?: React.ReactElement[];
  children: React.ReactNode;
}

const Dialog: React.FunctionComponent<DialogProps> = (props: DialogProps) => {
  const {
    visible,
    closable,
    className,
    title,
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

  const dialogDom = visible ? (
    <React.Fragment>
      <div
        className={classNames('algae-ui-dialog-mask', className)}
        onClick={onClickMask}
      />
      <div className={classNames('algae-ui-dialog', className)}>
        <header className="header">
          <span>{title}</span>
          {closable ? (
            <div className="close" onClick={onClickClose}>
              <Icon type="close" style={{ width: '12px', height: '12px' }} />
            </div>
          ) : (
            <div />
          )}
        </header>
        <main>{children}</main>
        <footer>{buttons}</footer>
      </div>
    </React.Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  visible: false,
  closable: true,
  closeOnClickMask: false,
  children: null
};

export default Dialog;
