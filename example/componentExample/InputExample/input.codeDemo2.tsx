import React, { useState } from 'react';
import { Input } from 'ROOT/src';

export default () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="input-example-list">
      <Input
        placeholder="input with clear icon"
        allowClear
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        clearFn={() => {
          setValue('');
        }}
      />
    </div>
  );
};
