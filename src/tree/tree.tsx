import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker, useControlState } from '../utils';
import TreeItem, { TreeItemSourceData } from './treeItem';
import './style/tree.scss';

const sc = scopedClassMaker('algae-ui-tree');

interface TreeProps {
  className?: string;
  autoCheck?: boolean;
  checkable?: boolean;
  selectedValues?: string[];
  onSelect?: (selectedValues: string[]) => void;
  sourceData: TreeItemSourceData[];
}

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const {
    className,
    autoCheck,
    checkable,
    selectedValues: initialSelectedValues,
    onSelect,
    sourceData
  } = props;

  const [selectedValues, setSelectedValues] = useControlState(
    [],
    initialSelectedValues
  );
  const onTreeSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };
  const onTreeItemSelect = (selectedValues: string[]) => {
    onSelect && onSelect(selectedValues);
    onTreeSelect(selectedValues);
  };

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('list')}>
        {sourceData.map((treeData) => (
          <TreeItem
            key={treeData.value}
            sourceData={treeData}
            autoCheck={autoCheck}
            level={0}
            checkable={checkable!}
            checked={selectedValues!.includes(treeData.value)}
            selectedValues={selectedValues!}
            onTreeSelect={onTreeSelect}
            onTreeItemSelect={onTreeItemSelect}
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
  checkable: false
};

export default Tree;
