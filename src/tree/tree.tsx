import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils';
import TreeItem, { TreeItemSourceData } from './treeItem';
import './style/tree.scss';

const sc = scopedClassMaker('algae-ui-tree');

interface TreeProps {
  className?: string;
  checkable?: boolean;
  checkValue?: string[];
  sourceData: TreeItemSourceData[];
}

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const { className, checkable, checkValue, sourceData } = props;

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('list')}>
        {sourceData.map((treeData) => (
          <TreeItem
            key={treeData.value}
            sourceData={treeData}
            level={0}
            checkable={checkable!}
            checked={checkValue!.includes(treeData.value)}
            checkValue={checkValue!}
          />
        ))}
      </div>
    </div>
  );
};

Tree.displayName = 'Tree';

Tree.propTypes = {
  sourceData: PropTypes.array.isRequired
};

Tree.defaultProps = {
  sourceData: [],
  checkable: false,
  checkValue: []
};

export default Tree;
