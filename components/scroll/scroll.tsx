import React, { useState, useRef, useEffect } from 'react';
import { classNames, scopedClassMaker, getScrollBarWidth } from '../utils';

const sc = scopedClassMaker('algae-ui-scroll');

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  rightGap?: number;
  scrollBarWidth?: number;
  scrollBarColor?: string;
  onScroll?: React.UIEventHandler<Element>;
}

const Scroll: React.FunctionComponent<ScrollProps> = (props: ScrollProps) => {
  const {
    children,
    className,
    rightGap,
    scrollBarWidth,
    scrollBarColor,
    onScroll,
    style,
    ...rest
  } = props;

  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollBarHeight, setScrollBarHeight] = useState<number>(0);
  const [scrollBarTop, setScrollBarTop] = useState<number>(0);

  const scrollContainerEl = useRef<HTMLDivElement>(null);
  const scrollEl = useRef<HTMLDivElement>(null);

  // 监听窗口大小变化
  useEffect(() => {
    setScrollViewHeight(scrollContainerEl.current!.scrollHeight);
    setScrollHeight(scrollEl.current!.scrollHeight);

    const resizeCallback = () => {
      setScrollViewHeight(scrollContainerEl.current!.scrollHeight);
      setScrollHeight(scrollEl.current!.scrollHeight);
    };

    // 监听 Scroll 的 style 变化
    const mutationObserver = new MutationObserver(resizeCallback);
    mutationObserver.observe(scrollContainerEl.current as Node, {
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

  // 设置滚动条的高度
  useEffect(() => {
    const height = (scrollViewHeight / scrollHeight) * scrollViewHeight;
    if (height !== scrollBarHeight) {
      setScrollBarHeight(scrollViewHeight < scrollHeight ? height : 0);
    }
  }, [scrollViewHeight, scrollHeight]);

  const scrollFn = (e: React.UIEvent<Element>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollBarTop = scrollViewHeight * (scrollTop / scrollHeight);
    setScrollBarTop(scrollBarTop);

    onScroll && onScroll(e);
  };

  return (
    <div
      className={classNames(sc('container'), className)}
      ref={scrollContainerEl}
      style={style}
    >
      <div
        className={classNames(sc())}
        style={{ right: -getScrollBarWidth() }}
        ref={scrollEl}
        onScroll={scrollFn}
        {...rest}
      >
        {children}
      </div>
      <div
        className={sc('track')}
        style={{ width: `${scrollBarWidth! + 2 * rightGap!}px` }}
      >
        <div
          className={sc('bar')}
          style={{
            borderRadius: `${scrollBarWidth! / 2}px`,
            right: `${rightGap}px`,
            width: `${scrollBarWidth}px`,
            height: `${scrollBarHeight}px`,
            transform: `translateY(${scrollBarTop}px)`,
            background: `${scrollBarColor}`
          }}
        />
      </div>
    </div>
  );
};

Scroll.displayName = 'Scroll';
Scroll.defaultProps = {
  rightGap: 2,
  scrollBarWidth: 8,
  scrollBarColor: '#666'
};

export default Scroll;
