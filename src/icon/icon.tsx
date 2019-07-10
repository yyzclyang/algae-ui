import React from 'react';
import PropTypes from 'prop-types';
import './importIcons';
import './icon.scss';
import classNames from '../utils/classNames';

interface SvgProps extends React.SVGAttributes<SVGElement> {
  type?: string;
  component?: React.ReactElement;
  style?: React.CSSProperties;
  rotate?: number;
}

const Svg: React.FunctionComponent<SvgProps> = (props: SvgProps) => {
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

Svg.displayName = 'SvgIcon';

interface IconProps extends SvgProps {}

interface CreateFromIconfontCNProps {
  scriptUrl: string;
}

class Icon extends React.Component<IconProps> {
  static propTypes = {
    type: PropTypes.string,
    component: PropTypes.element,
    rotate: PropTypes.number,
    style: PropTypes.object
  };
  static displayName = 'Icon';

  static createFromIconfontCN: (
    props: CreateFromIconfontCNProps
  ) => React.FunctionComponent<SvgProps>;

  render() {
    return <Svg {...this.props} />;
  }
}

Icon.createFromIconfontCN = ({ scriptUrl }) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = scriptUrl;
  document.body.appendChild(script);

  return Svg;
};

export default Icon;
