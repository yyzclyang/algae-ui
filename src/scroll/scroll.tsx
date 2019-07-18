import React from 'react';
import { classNames, getScrollBarWidth } from '../utils';
import './style/scroll.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<ScrollProps> = (props: ScrollProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={classNames('algae-ui-scroll-wrapper', className)} {...rest}>
      <div
        className={classNames('algae-ui-scroll')}
        style={{ right: -getScrollBarWidth() }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
