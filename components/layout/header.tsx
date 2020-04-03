import React from 'react';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-layout');

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { className, style, children, ...rest } = props;

  return (
    <div
      className={classNames(sc('header'), className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Header;
