import React, { useState } from 'react';
import { RadioGroup } from 'ROOT/src';

export default () => {
  const [value1, setValue1] = useState<string>('a');
  const [value2, setValue2] = useState<string>('a');
  const [value3, setValue3] = useState<string>('a');

  const options1 = ['a', 'b', 'c'];
  const options2 = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' }
  ];
  const options3 = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c', disabled: true }
  ];

  return (
    <div className="radio-example-list">
      <RadioGroup
        options={options1}
        value={value1}
        onChange={(e) => {
          setValue1(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <br />
      <br />
      <RadioGroup
        options={options2}
        value={value2}
        onChange={(e) => {
          setValue2(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <br />
      <br />
      <RadioGroup
        options={options3}
        value={value3}
        onChange={(e) => {
          setValue3(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
    </div>
  );
};
