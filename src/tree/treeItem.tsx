import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils';
import Icon from '../icon';
import './style/treeItem.scss';

const sc = scopedClassMaker('algae-ui-tree-item');

export interface TreeItemSourceData {
  text: string;
  value: string;
  icon?: string | React.ReactElement;
  children?: TreeItemSourceData[];
}
interface TreeItemProps {
  className?: string;
  sourceData: TreeItemSourceData;
  level: number;
  expanded?: boolean;
}

const TreeItem: React.FC<TreeItemProps> = (props: TreeItemProps) => {
  const { className, sourceData, level, expanded: initialExpand } = props;

  const [expanded, setExpanded] = useState<boolean>(initialExpand!);
  const expandOnClick: React.MouseEventHandler<HTMLInputElement> = () => {
    setExpanded((prevExpand) => !prevExpand);
  };

  const childrenRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!childrenRef.current) {
      return;
    }
    const { height } = childrenRef.current.getBoundingClientRect();
    childrenRef.current.style.height = height + 'px';
  }, []);

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('content')}>
        {sourceData.children && (
          <span
            className={classNames(sc('switcher'), expanded ? 'open' : 'close')}
            onClick={expandOnClick}
          >
            <Icon className={classNames(sc('switch'))} type="triangle-down" />
          </span>
        )}
        {typeof sourceData.icon === 'string' ? (
          <Icon className={sc('icon')} type={sourceData.icon} />
        ) : (
          sourceData.icon
        )}
        <span className={sc('text')}>{sourceData.text}</span>
      </div>
      {sourceData.children && (
        <div
          ref={childrenRef}
          className={classNames(sc('children'), expanded ? 'open' : 'close')}
        >
          {sourceData.children?.map((childrenTreeData) => (
            <TreeItem
              key={childrenTreeData.value}
              sourceData={childrenTreeData}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

TreeItem.displayName = 'TreeItem';
TreeItem.propTypes = {
  className: PropTypes.string,
  sourceData: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.array
  }).isRequired,
  level: PropTypes.number.isRequired,
  expanded: PropTypes.bool
};
TreeItem.defaultProps = {
  expanded: true
};

export default TreeItem;
