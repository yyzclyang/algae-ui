import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import './style/affix.scss';

interface AffixProps {
  offsetTop?: number;
  className?: string;
  onChange?: (arg1?: boolean) => void;
  children: React.ReactNode;
}
interface State {
  isActive: boolean;
  affixWrapperElStyle?: React.CSSProperties;
}

class Affix extends React.Component<AffixProps, State> {
  static displayName = 'Affix';
  static propTypes = {
    offsetTop: PropTypes.number,
    onChange: PropTypes.func
  };
  static defaultProps = { offsetTop: 0 };

  affixWrapperEl: HTMLDivElement;
  affixEl: HTMLDivElement;

  state: State = {
    isActive: false
  };

  componentDidMount(): void {
    window.addEventListener('scroll', this.scrollHandle);
    this.setAffixWrapperElSize(this.affixEl.getBoundingClientRect());
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.scrollHandle);
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

  scrollHandle: EventListenerOrEventListenerObject = () => {
    const { top } = this.affixWrapperEl.getBoundingClientRect();
    const { offsetTop, onChange } = this.props;
    if (top <= offsetTop! && !this.state.isActive) {
      this.setState({ isActive: true }, () => {
        onChange && onChange(this.state.isActive);
      });
    } else if (top > offsetTop! && this.state.isActive) {
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
          style={{ top: offsetTop + 'px' }}
          ref={this.saveAffixEl}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Affix;
