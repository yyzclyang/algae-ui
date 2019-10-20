import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classNames, getScrollBarWidth } from '../utils';
import './style/scroll.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  verticalGap?: number;
  rightGap?: number;
  scrollBarWidth?: number;
  scrollBarColor?: string;
  onScroll?: React.UIEventHandler<Element>;
}

const Scroll: React.FunctionComponent<ScrollProps> = (props: ScrollProps) => {
  const {
    children,
    className,
    verticalGap = 0,
    rightGap,
    scrollBarWidth,
    scrollBarColor,
    onScroll,
    style,
    ...rest
  } = props;

  const [scrollWrapperHeight, setScrollWrapperHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollBarHeight, setScrollBarHeight] = useState<number>(0);
  const [scrollBarTop, setScrollBarTop] = useState<number>(verticalGap);

  const scrollWrapperEl = useRef<null | HTMLDivElement>(null);
  const scrollEl = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setScrollWrapperHeight(scrollWrapperEl.current!.scrollHeight);
    setScrollHeight(scrollEl.current!.scrollHeight);

    const resizeCallback = () => {
      setScrollWrapperHeight(scrollWrapperEl.current!.scrollHeight);
      setScrollHeight(scrollEl.current!.scrollHeight);
    };

    // 监听 Scroll 的 style 变化
    const mutationObserver = new MutationObserver(resizeCallback);
    mutationObserver.observe(scrollWrapperEl.current as Node, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    });
    window.addEventListener('resize', resizeCallback);

    return () => {
      mutationObserver.disconnect();
      mutationObserver.takeRecords();
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);

  useEffect(() => {
    const height = (scrollWrapperHeight / scrollHeight) * scrollWrapperHeight;
    if (height !== scrollBarHeight) {
      setScrollBarHeight(scrollWrapperHeight < scrollHeight ? height : 0);
    }
  }, [scrollWrapperHeight, scrollHeight]);

  const scroll = (e: React.UIEvent<Element>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollBarCanMove =
      scrollWrapperHeight - scrollBarHeight - 2 * verticalGap;
    const scrollCanMove = scrollHeight - scrollWrapperHeight;
    const scrollBarTop =
      scrollBarCanMove * (scrollTop / scrollCanMove) + verticalGap;
    setScrollBarTop(scrollBarTop);
    onScroll && onScroll(e);
  };

  return (
    <div
      className={classNames('algae-ui-scroll-wrapper', className)}
      ref={scrollWrapperEl}
      style={style}
    >
      <div
        className={classNames('algae-ui-scroll')}
        style={{ right: -getScrollBarWidth() }}
        ref={scrollEl}
        onScroll={scroll}
        {...rest}
      >
        {children}
      </div>
      <div
        className="algae-ui-scroll-bar"
        style={{
          borderRadius: `${scrollBarWidth! / 2}px`,
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
  rightGap: 0,
  scrollBarWidth: 8,
  scrollBarColor: '#666'
};

Scroll.propTypes = {
  verticalGap: PropTypes.number,
  rightGap: PropTypes.number,
  scrollBarWidth: PropTypes.number,
  scrollBarColor: PropTypes.string,
  onScroll: PropTypes.func
};

export default Scroll;
