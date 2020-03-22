import React from 'react';
import PropTypes from 'prop-types';
import './style/tree.scss';
import { classNames, scopedClassMaker } from '../utils';
import TreeItem from 'ROOT/src/tree/treeItem';

const sc = scopedClassMaker('algae-ui-tree');

export interface SourceDataItem {
  text: string;
  value: string;
  icon?: string | React.ReactNode;
  children?: SourceDataItem[];
}
interface TreeProps {
  className?: string;
  sourceData: SourceDataItem[];
}

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const { className, sourceData } = props;

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('list')}>
        {sourceData.map((treeData) => (
          <TreeItem key={treeData.value} data={treeData} level={0} />
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
  sourceData: []
};

export default Tree;
