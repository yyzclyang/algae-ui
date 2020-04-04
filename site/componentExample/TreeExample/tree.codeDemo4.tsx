import React from 'react';
import { Icon, TreeItemSourceData, Tree } from 'algae-ui';

export default () => {
  const sourceData: TreeItemSourceData[] = [
    {
      text: '1',
      value: '1',
      icon: 'alert',
      children: [
        {
          text: '1-1',
          value: '1-1',
          icon: <Icon type="apple" />
        },
        { text: '1-2', value: '1-2', icon: 'windows' }
      ]
    }
  ];

  return (
    <div className="tree-example-list">
      <Tree sourceData={sourceData} checkable autoCheck />
    </div>
  );
};
