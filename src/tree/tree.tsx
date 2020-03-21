import React from 'react';
import PropTypes from 'prop-types';
import './style/tree.scss';
import { classNames, scopedClassMaker } from 'ROOT/src/utils';

const sc = scopedClassMaker('algae-ui-tree');

export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
interface TreeProps {
  sourceData: SourceDataItem[];
}

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const { sourceData } = props;

  const renderTreeItem = (treeData: SourceDataItem, level: number) => {
    return (
      <div className={sc('item')} key={treeData.value}>
        <span className={sc('item-text')}>{treeData.text}</span>
        {treeData.children?.map((childrenTreeData) =>
          renderTreeItem(childrenTreeData, level + 1)
        )}
      </div>
    );
  };
  return (
    <div className={classNames(sc())}>
      <div className={sc('list')}>
        {sourceData.map((treeData) => renderTreeItem(treeData, 0))}
      </div>
    </div>
  );
};

Tree.displayName = 'Tree';

Tree.propTypes = {
  sourceData: PropTypes.array.isRequired
};

Tree.defaultProps = {
  sourceData: []
};

export default Tree;
