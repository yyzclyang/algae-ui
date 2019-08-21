import React, { useState } from 'react';
import { CheckboxGroup } from 'ROOT/src';

export default () => {
  const [checkedList1, setCheckedList1] = useState<string[]>([]);
  const [checkedList2, setCheckedList2] = useState<string[]>([]);
  const [checkedList3, setCheckedList3] = useState<string[]>([]);

  const options = ['A', 'B', 'C'];
  const options2 = [
    { label: 'A', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'C', value: 'C' }
  ];
  const options3 = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C', disabled: true }
  ];

  return (
    <div className="checkbox-example-list">
      <CheckboxGroup
        options={options}
        value={checkedList1}
        onChange={(value) => {
          setCheckedList1(value);
        }}
      />
      <br />
      <CheckboxGroup
        options={options2}
        value={checkedList2}
        onChange={(value) => {
          setCheckedList2(value);
        }}
      />
      <br />
      <CheckboxGroup
        options={options3}
        value={checkedList3}
        onChange={(value) => {
          setCheckedList3(value);
        }}
      />
    </div>
  );
};
