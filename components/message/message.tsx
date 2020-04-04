import React from 'react';
import ReactDOM from 'react-dom';
import MessageDialog from './messageDialog';

interface MessageExpandFunctionProps {
  iconType?: string;
  iconStyle?: React.CSSProperties;
  message?: string | React.ReactNode;
}

const messageExpandFunction = (props: MessageExpandFunctionProps) => {
  const { message, iconStyle, ...restProps } = props;

  const onClose = (callback?: () => void) => {
    ReactDOM.render(
      React.cloneElement(MessageCom, {
        className: 'algae-ui-message-hidden'
      }),
      messageMountNode
    );
    setTimeout(() => {
      ReactDOM.render(
        React.cloneElement(MessageCom, { visible: false }),
        messageMountNode
      );
      ReactDOM.unmountComponentAtNode(messageMountNode);
      messageMountNode.remove();
      callback && callback();
    }, 300);
  };

  const container = document.getElementsByClassName(
    'algae-ui-message-container'
  )[0];
  const messageContainer =
    container ||
    (() => {
      const container = document.createElement('div');
      container.className = 'algae-ui-message-container';
      return container;
    })();
  if (!container) {
    document.body.append(messageContainer);
  }

  const MessageCom = (
    <MessageDialog
      className="algae-ui-message-visible"
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

export type MessageType = 'info' | 'success' | 'error' | 'warning' | 'loading';
type messageFunction = (
  message: string,
  delay?: number,
  closeCallback?: () => void
) => () => void;
type messageFunctionGenerator = (type: MessageType) => messageFunction;

const messagePropsList: {
  [key in MessageType]: { iconType: string; background: string };
} = {
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
  return (message, delay = 3000, closeCallback) => {
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
    // delay 不为 0 时，自动销毁
    if (delay !== 0) {
      setTimeout(() => {
        destroy(closeCallback);
      }, delay);
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

export default message;
