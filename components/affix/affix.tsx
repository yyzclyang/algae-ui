import React from 'react';
import { classNames } from '../utils';

interface AffixProps {
  offsetTop?: number;
  className?: string;
  target?: () => HTMLElement | Window | null;
  onChange?: (arg1?: boolean) => void;
  children: React.ReactNode;
}
interface State {
  isActive: boolean;
  affixWrapperElStyle?: React.CSSProperties;
  prevTarget: HTMLElement | Window | null;
}

class Affix extends React.Component<AffixProps, State> {
  static displayName = 'Affix';

  static defaultProps = {
    offsetTop: 0,
    target: () => (typeof window !== 'undefined' ? window : null)
  };

  affixWrapperEl: HTMLDivElement;
  affixEl: HTMLDivElement;

  state: State = {
    isActive: false,
    prevTarget: null
  };

  timer: number;
  target: HTMLElement | Window | null;

  componentDidMount(): void {
    this.timer = setTimeout(() => {
      (this.props.target!() as HTMLElement).addEventListener(
        'scroll',
        this.scrollHandle
      );
    });
    this.setAffixWrapperElSize(this.affixEl.getBoundingClientRect());
  }

  componentDidUpdate() {
    const { prevTarget } = this.state;
    const newTarget = this.props.target!() || null;
    if (prevTarget !== newTarget) {
      this.target && clearTimeout(this.timer);
      if (prevTarget) {
        (prevTarget as HTMLElement).removeEventListener(
          'scroll',
          this.scrollHandle
        );
      }
      this.timer = setTimeout(() => {
        (this.props.target!() as HTMLElement).addEventListener(
          'scroll',
          this.scrollHandle
        );
      });
      this.setState({ prevTarget: newTarget });
    }
  }

  componentWillUnmount(): void {
    this.timer && clearTimeout(this.timer);
    if (this.state.prevTarget) {
      (this.state.prevTarget as HTMLElement).removeEventListener(
        'scroll',
        this.scrollHandle
      );
    }
  }

  saveAffixWrapperEl = (el: HTMLDivElement) => {
    this.affixWrapperEl = el;
  };
  saveAffixEl = (el: HTMLDivElement) => {
    this.affixEl = el;
  };

  setAffixWrapperElSize = (rect: ClientRect) => {
    const { width, height } = rect;
    this.setState({
      affixWrapperElStyle: {
        width: width + 'px',
        height: height + 'px'
      }
    });
  };

  getContainerRect = () => {
    const { target } = this.props;
    if (target && target() !== window) {
      return (target() as HTMLElement).getBoundingClientRect();
    } else {
      return {
        top: 0
      };
    }
  };

  scrollHandle: EventListenerOrEventListenerObject = () => {
    const { top: containerTop } = this.getContainerRect();
    const { top } = this.affixWrapperEl.getBoundingClientRect();
    const { offsetTop, onChange } = this.props;
    if (top - containerTop <= offsetTop! && !this.state.isActive) {
      this.setState({ isActive: true }, () => {
        onChange && onChange(this.state.isActive);
      });
    } else if (top - containerTop > offsetTop! && this.state.isActive) {
      this.setState({ isActive: false }, () => {
        onChange && onChange(this.state.isActive);
      });
    }
  };

  render() {
    const { className, children, offsetTop } = this.props;
    const { affixWrapperElStyle } = this.state;
    return (
      <div
        className="algae-ui-affix-wrapper"
        style={{ ...affixWrapperElStyle }}
        ref={this.saveAffixWrapperEl}
      >
        <div
          className={classNames(
            'algae-ui-affix',
            className,
            this.state.isActive ? 'algae-ui-affix-active' : ''
          )}
          style={
            this.state.isActive
              ? {
                  top:
                    (offsetTop ? offsetTop : 0) +
                    this.getContainerRect().top +
                    'px'
                }
              : {}
          }
          ref={this.saveAffixEl}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Affix;
