import React from 'react';
import { classNames } from '../utils';
import './importIcons';
import './icon.scss';

interface SvgProps extends React.SVGAttributes<SVGElement> {
  type?: string;
  component?: React.ReactElement;
  style?: React.CSSProperties;
  rotate?: number;
}

const SvgIcon: React.FunctionComponent<SvgProps> = (props: SvgProps) => {
  const { className, type, component, style, rotate, ...restProps } = props;
  const rotateStyle = rotate ? { transform: `rotate(${rotate}deg)` } : {};

  return !!component ? (
    React.cloneElement(component, {
      className: classNames('algae-ui-icon', className),
      style: { ...style, ...rotateStyle },
      ...restProps
    })
  ) : (
    <svg
      className={classNames('algae-ui-icon', className)}
      style={{ ...style, ...rotateStyle }}
      {...restProps}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

SvgIcon.displayName = 'SvgIcon';

interface IconProps extends SvgProps {}

interface CreateFromIconfontCNProps {
  scriptUrl: string;
}

class Icon extends React.Component<IconProps> {
  static displayName = 'Icon';

  static createFromIconfontCN: (
    props: CreateFromIconfontCNProps
  ) => React.FunctionComponent<SvgProps>;

  render() {
    return <SvgIcon {...this.props} />;
  }
}

Icon.createFromIconfontCN = ({ scriptUrl }) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = scriptUrl;
  document.body.appendChild(script);

  return SvgIcon;
};

export default Icon;
