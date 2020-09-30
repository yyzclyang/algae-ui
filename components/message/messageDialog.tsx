import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import { classNames, scopedClassMaker } from '../utils';
import './style/message.scss';

const sc = scopedClassMaker('algae-ui-message');

interface MessageDialogProps {
  className?: string;
  visible: boolean;
  iconType?: string;
  iconStyle?: React.CSSProperties;
  container: Element;
  children: string | React.ReactNode;
}

const MessageDialog: React.FunctionComponent<MessageDialogProps> = (
  props: MessageDialogProps
) => {
  const {
    className,
    visible,
    iconType,
    iconStyle,
    container,
    children
  } = props;
  const messageCom = visible ? (
    <div className={classNames(sc(), className)}>
      {iconType && <Icon type={iconType} style={iconStyle} />}
      {typeof children === 'string' ? (
        <span className={classNames(sc('content'))}>{children}</span>
      ) : (
        children
      )}
    </div>
  ) : null;

  return ReactDOM.createPortal(messageCom, container);
};

MessageDialog.displayName = 'MessageDialog';

export default MessageDialog;
