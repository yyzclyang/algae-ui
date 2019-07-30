import React, { useState } from 'react';
import { TextArea } from 'ROOT/src';

export default () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="input-example-list">
      <TextArea
        defaultValue="default"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
    </div>
  );
};
