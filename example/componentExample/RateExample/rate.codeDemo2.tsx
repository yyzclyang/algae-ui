import React from 'react';
import { Rate } from 'ROOT/src';

export default () => {
  return (
    <div className="rate-example-list">
      <Rate allowHalf defaultValue={2.5} />
    </div>
  );
};
