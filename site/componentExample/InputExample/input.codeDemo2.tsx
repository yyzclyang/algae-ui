import React, { useState } from 'react';
import { Input } from 'algae-ui';

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
      />
    </div>
  );
};
