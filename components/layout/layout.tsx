import React from 'react';
import Side from './side';
import { classNames, scopedClassMaker } from '../utils';
import './style/layout.scss';

const sc = scopedClassMaker('algae-ui-layout');

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { className, style, children, ...rest } = props;
  const childrenAsArray = children as React.ReactElement[];
  const hasSide =
    childrenAsArray.length &&
    childrenAsArray.reduce(
      (prevResult, node) => prevResult || node.type === Side,
      false
    );
  return (
    <div
      className={classNames(
        sc(''),
        className,
        hasSide ? 'algae-ui-layout-hasSide' : ''
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;
