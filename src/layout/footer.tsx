import React from 'react';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';

const sc = scopedClassMaker('algae-ui-layout');

interface FooterProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  const { className, style, children, ...rest } = props;

  return (
    <div
      className={classNames(sc('footer'), className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Footer;
