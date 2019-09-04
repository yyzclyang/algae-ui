import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import './style/message.scss';
import { classNames, scopedClassMaker } from '../utils';

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

interface MessageExpandFunctionProps {
  iconType?: string;
  iconStyle?: React.CSSProperties;
  message?: string | React.ReactNode;
}

const messageExpandFunction = (props: MessageExpandFunctionProps) => {
  const { message, iconStyle, ...restProps } = props;

  const onClose = () => {
    ReactDOM.render(
      React.cloneElement(MessageCom, { visible: false }),
      messageMountNode
    );
    ReactDOM.unmountComponentAtNode(messageMountNode);
    messageMountNode.remove();
  };

  const container = document.getElementsByClassName(
    'algae-ui-message-container'
  )[0];
  const messageContainer = container || document.createElement('div');
  if (!container) {
    document.body.append(messageContainer);
  }

  const MessageCom = (
    <MessageDialog
      visible
      container={messageContainer}
      iconStyle={{
        fill: '#ffffff',
        borderRadius: '50%',
        ...iconStyle
      }}
      {...restProps}
    >
      {message}
    </MessageDialog>
  );

  const messageMountNode = document.createElement('div');
  ReactDOM.render(MessageCom, messageMountNode);

  return { destroy: onClose };
};

type messageFunction = (message: string, delay?: number) => () => void;
type MessageType = 'info' | 'success' | 'error' | 'warning' | 'loading';
type messageFunctionGenerator = (type: MessageType) => messageFunction;
const messagePropsList = {
  info: {
    iconType: 'info-circle',
    background: '#1890ff'
  },
  success: { iconType: 'check-circle', background: '#52c41a' },
  error: { iconType: 'close-circle', background: '#f5222d' },
  warning: { iconType: 'warning-circle', background: '#faad14' },
  loading: { iconType: 'loading', background: 'transparent' }
};

const messageFunctionGenerator: messageFunctionGenerator = (type) => {
  return (message, delay) => {
    const props = {
      iconType: messagePropsList[type].iconType,
      iconStyle: {
        background: messagePropsList[type].background,
        ...(type === 'loading' && {
          fill: '#506dfe',
          animation: 'spin 1.5s infinite'
        })
      },
      message
    };

    const { destroy } = messageExpandFunction(props);
    if (!!delay) {
      setTimeout(() => {
        destroy();
      }, delay || 3000);
    }
    return destroy;
  };
};

interface MessageProps {
  info: messageFunction;
  success: messageFunction;
  error: messageFunction;
  warning: messageFunction;
  loading: messageFunction;
}
const message: MessageProps = {
  info: messageFunctionGenerator('info'),
  success: messageFunctionGenerator('success'),
  error: messageFunctionGenerator('error'),
  warning: messageFunctionGenerator('warning'),
  loading: messageFunctionGenerator('loading')
};

export default MessageDialog;
export { message };
