import React, { useState } from 'react';
import { TreeItemSourceData, Tree } from 'ROOT/src';

export default () => {
  const sourceData: TreeItemSourceData[] = [
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1-1',
          value: '1-1',
          children: [
            { text: '1-1-1', value: '1-1-1' },
            { text: '1-1-2', value: '1-1-2' }
          ]
        },
        { text: '1-2', value: '1-2' }
      ]
    },
    {
      text: '2',
      value: '2',
      children: [
        { text: '2-1', value: '2-1' },
        { text: '2-2', value: '2-2' }
      ]
    }
  ];
  const [values, setValues] = useState(['2', '1-2']);

  return (
    <div className="tree-example-list">
      <Tree
        sourceData={sourceData}
        checkable
        selectedValues={values}
        onSelect={(values) => {
          setValues(values);
        }}
      />
    </div>
  );
};
