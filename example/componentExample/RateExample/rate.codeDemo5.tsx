import React from 'react';
import { Rate } from 'ROOT/src';

export default () => {
  return (
    <div className="rate-example-list">
      <div className="rate-example">
        <Rate allowClear defaultValue={3} />
        <span className="tips">allowClear: true</span>
      </div>
      <br />
      <div className="rate-example">
        <Rate defaultValue={3} />
        <span className="tips">allowClear: false</span>
      </div>
    </div>
  );
};
