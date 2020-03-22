import React from 'react';
import PropTypes from 'prop-types';
import './style/treeItem.scss';
import { classNames, scopedClassMaker } from '../utils';
import Icon from '../icon';
import { SourceDataItem } from './tree';

const sc = scopedClassMaker('algae-ui-tree-item');

interface TreeItemProps {
  className?: string;
  data: SourceDataItem;
  level: number;
}

const TreeItem: React.FC<TreeItemProps> = (props: TreeItemProps) => {
  const { className, data, level } = props;
  return (
    <div className={classNames(sc(), className)}>
      {data.children && <Icon type="triangle-down" />}
      {typeof data.icon === 'string' ? (
        <Icon className={sc('item-icon')} type={data.icon} />
      ) : (
        data.icon
      )}
      <span className={sc('item-text')}>{data.text}</span>
      <div className={sc('item-children')}>
        {data.children?.map((childrenTreeData) => (
          <TreeItem
            key={childrenTreeData.value}
            data={childrenTreeData}
            level={level + 1}
          />
        ))}
      </div>
    </div>
  );
};

TreeItem.displayName = 'TreeItem';

TreeItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.object
  }).isRequired,
  level: PropTypes.number.isRequired
};

export default TreeItem;
