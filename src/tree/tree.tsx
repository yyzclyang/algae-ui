import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker, useControlState } from '../utils';
import TreeItem, { TreeItemSourceData } from './treeItem';
import './style/tree.scss';

const sc = scopedClassMaker('algae-ui-tree');

interface TreeProps {
  className?: string;
  checkable?: boolean;
  selectedValues?: string[];
  onSelect?: (selectedValues: string[]) => void;
  sourceData: TreeItemSourceData[];
}

const Tree: React.FC<TreeProps> = (props: TreeProps) => {
  const {
    className,
    checkable,
    selectedValues: initialSelectedValues,
    sourceData
  } = props;

  const [selectedValues, setSelectedValues] = useControlState(
    [],
    initialSelectedValues
  );
  const onSelect = (checked: boolean, value: string) => {
    if (checked) {
      const newSelectedValues = [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      props.onSelect && props.onSelect(newSelectedValues);
    } else {
      const newSelectedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== value
      );
      setSelectedValues(newSelectedValues);
      props.onSelect && props.onSelect(newSelectedValues);
    }
  };

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('list')}>
        {sourceData.map((treeData) => (
          <TreeItem
            key={treeData.value}
            sourceData={treeData}
            level={0}
            checkable={checkable!}
            checked={selectedValues!.includes(treeData.value)}
            selectedValues={selectedValues!}
            onSelect={onSelect}
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
