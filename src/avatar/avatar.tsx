import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './style/avatar.scss';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-avatar');

interface AvatarProps {
  icon?: string;
  size?: number;
  shape?: 'circle' | 'square';
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
  children?: string;
}

const Avatar: React.FunctionComponent<AvatarProps> = (props: AvatarProps) => {
  const { icon, size, shape, src, alt, style, children } = props;

  return (
    <span
      className={classNames(sc(), sc(shape))}
      style={{
        ...style,
        ...{ width: size + 'px', height: size + 'px' },
        ...(!!src ? { background: 'transparent' } : {})
      }}
    >
      {!!children ? (
        children
      ) : !!src ? (
        <img className={sc('image')} src={src} alt={alt} />
      ) : (
        <Icon
          className={sc('icon')}
          style={{
            fontSize: (size! / 32) * 14 + 'px'
          }}
          type={icon}
          fill="#FFFFFF"
        />
      )}
    </span>
  );
};

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  icon: 'avatar',
  shape: 'circle',
  size: 32
};

Avatar.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  shape: PropTypes.oneOf(['circle', 'square']),
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.string
};

export default Avatar;
