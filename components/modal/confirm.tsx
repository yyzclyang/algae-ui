import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../button';
import { Icon } from '../icon';
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
    children
  } = props;

  const dialogDom = visible ? (
    <React.Fragment>
      <div className="algae-ui-confirm-dialog-mask" />
      <div className={classNames('algae-ui-confirm-dialog', className)}>
        <main>
          {iconType && (
            <div className="icon">
              <Icon type={iconType} style={iconStyle} />
            </div>
          )}
          <div className="confirm-dialog-message">
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

interface ConfirmButtonProps {
  buttonType?: 'default' | 'primary' | 'success' | 'danger';
  ghost?: boolean;
  onClick: React.MouseEventHandler;
  content: string;
}

export interface ConfirmProps {
  type?: string;
  title?: string;
  content: React.ReactNode;
  iconType?: string;
  iconStyle?: React.CSSProperties;
  okButton?: ConfirmButtonProps;
  cancelButton?: ConfirmButtonProps;
}

export interface UpdateProps {
  title: string;
  content: React.ReactNode;
}

const confirm = ({
  type,
  title,
  content,
  iconType,
  iconStyle,
  okButton,
  cancelButton
}: ConfirmProps) => {
  const onClose = () => {
    ReactDOM.render(
      React.cloneElement(confirmCom, { visible: false }),
      mountNode
    );
    ReactDOM.unmountComponentAtNode(mountNode);
    mountNode.remove();
  };

  const update = ({ title, content }: UpdateProps) => {
    ReactDOM.render(
      React.cloneElement(confirmCom, { title }, content),
      mountNode
    );
  };

  const onOkClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose();
    okButton && okButton.onClick(e);
  };

  const onCancelClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose();
    cancelButton && cancelButton.onClick(e);
  };

  const OkButton: React.ReactElement[] = !!okButton
    ? [
        <Button
          key="btn1"
          buttonType={okButton.buttonType}
          ghost={okButton.ghost}
          onClick={onOkClick}
        >
          {okButton.content}
        </Button>
      ]
    : [];
  const CancelButton: React.ReactElement[] = !!cancelButton
    ? [
        <Button
          key="btn2"
          buttonType={cancelButton.buttonType}
          ghost={cancelButton.ghost}
          onClick={onCancelClick}
        >
          {cancelButton.content}
        </Button>
      ]
    : [];
  const buttons = CancelButton.concat(OkButton);

  const confirmCom = (
    <ConfirmDialog
      visible
      className={type}
      title={title}
      iconType={iconType}
      iconStyle={iconStyle}
      onClose={onClose}
      buttons={buttons}
    >
      {content}
    </ConfirmDialog>
  );

  const mountNode = document.createElement('div');
  document.body.append(mountNode);
  ReactDOM.render(confirmCom, mountNode);

  return {
    destroy: onClose,
    update
  };
};

export default confirm;
