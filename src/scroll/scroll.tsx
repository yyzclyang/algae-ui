import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classNames, getScrollBarWidth } from '../utils';
import './style/scroll.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  verticalGap?: number;
  rightGap?: number;
  scrollBarWidth?: number;
  scrollBarColor?: string;
}

const Scroll: React.FunctionComponent<ScrollProps> = (props: ScrollProps) => {
  const {
    children,
    className,
    verticalGap = 0,
    rightGap,
    scrollBarWidth,
    scrollBarColor,
    ...rest
  } = props;

  const [scrollWrapperHeight, setScrollWrapperHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollBarHeight, setScrollBarHeight] = useState<number>(0);
  const [scrollBarTop, setScrollBarTop] = useState<number>(verticalGap);

  const scrollWrapperRef = useCallback((element) => {
    const height = element.clientHeight;
    if (height !== scrollWrapperHeight) {
      setScrollWrapperHeight(height);
    }
  }, []);
  const scrollRef = useCallback((element) => {
    const height = element.scrollHeight;
    if (height !== scrollHeight) {
      setScrollHeight(height);
    }
  }, []);

  useEffect(() => {
    const height = (scrollWrapperHeight / scrollHeight) * scrollWrapperHeight;
    if (height !== scrollBarHeight) {
      setScrollBarHeight(height);
    }
  }, [setScrollWrapperHeight, scrollWrapperHeight]);

  const onScroll = (e: React.UIEvent<Element>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollBarCanMove =
      scrollWrapperHeight - scrollBarHeight - 2 * verticalGap;
    const scrollCanMove = scrollHeight - scrollWrapperHeight;
    const scrollBarTop =
      scrollBarCanMove * (scrollTop / scrollCanMove) + verticalGap;
    setScrollBarTop(scrollBarTop);
  };

  return (
    <div
      className={classNames('algae-ui-scroll-wrapper', className)}
      {...rest}
      ref={scrollWrapperRef}
    >
      <div
        className={classNames('algae-ui-scroll')}
        style={{ right: -getScrollBarWidth() }}
        ref={scrollRef}
        onScroll={onScroll}
      >
        {children}
      </div>
      <div
        className="algae-ui-scroll-bar"
        style={{
          right: `${rightGap}px`,
          width: `${scrollBarWidth}px`,
          height: `${scrollBarHeight}px`,
          top: `${scrollBarTop}px`,
          background: `${scrollBarColor}`
        }}
      />
    </div>
  );
};

Scroll.displayName = 'Scroll';

Scroll.defaultProps = {
  verticalGap: 0,
  rightGap: 4,
  scrollBarWidth: 8,
  scrollBarColor: '#666'
};

Scroll.propTypes = {
  verticalGap: PropTypes.number,
  rightGap: PropTypes.number,
  scrollBarWidth: PropTypes.number,
  scrollBarColor: PropTypes.string
};

export default Scroll;
