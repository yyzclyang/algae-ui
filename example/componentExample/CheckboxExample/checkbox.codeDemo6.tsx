import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup } from 'ROOT/src';

export default () => {
  const options = ['A', 'B', 'C'];
  const defaultCheckList = ['A'];
  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckList);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  const onChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAll(e.currentTarget.checked);
    setCheckedList(e.currentTarget.checked ? options : []);
  };

  const onChange = (value: string[]) => {
    setCheckedList(value);
  };

  useEffect(() => {
    if (checkedList.length === options.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [checkedList]);

  useEffect(() => {
    if (checkedList.length > 0) {
      setIndeterminate(true);
    } else {
      setIndeterminate(false);
    }
  }, [checkedList]);

  return (
    <div className="checkbox-example-list">
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={onChangeAll}
      >
        全选
      </Checkbox>
      <CheckboxGroup
        options={options}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );
};
