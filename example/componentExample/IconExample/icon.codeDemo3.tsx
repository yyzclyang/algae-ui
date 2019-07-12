import React from 'react';
import { Icon } from 'algae-ui/lib';

export default () => {
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1286458_yno7x32gand.js'
  });
  return (
    <div className="icon-list">
      <IconFont type="icon-instagram" />
      <IconFont type="icon-email" />
      <IconFont type="icon-youtube" />
    </div>
  );
};
