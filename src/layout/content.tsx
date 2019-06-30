import React from 'react';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';
import './style/content.scss';

const sc = scopedClassMaker('algae-ui-layout');

interface ContentProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<ContentProps> = (
  props: ContentProps
) => {
  const { className, style, children, ...rest } = props;

  return (
    <div
      className={classNames(sc('content'), className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Content;
