import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'ROOT/src';

export default () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  return (
    <div className="checkbox-example-list">
      <CheckboxGroup
        value={checkedList}
        onChange={(value) => {
          setCheckedList(value);
        }}
      >
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
