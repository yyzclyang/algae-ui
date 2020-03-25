import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker, useUpdate } from '../utils';
import Icon from '../icon';
import './style/treeItem.scss';
import Checkbox from '../checkbox';

const sc = scopedClassMaker('algae-ui-tree-item');

export interface TreeItemSourceData {
  text: string;
  value: string;
  expanded?: boolean;
  icon?: string | React.ReactElement;
  disabledCheckbox?: boolean;
  children?: TreeItemSourceData[];
}
interface TreeItemProps {
  className?: string;
  sourceData: TreeItemSourceData;
  level: number;
  checkable: boolean;
  checked: boolean;
  selectedValues: string[];
  onSelect: (checked: boolean, value: string) => void;
}

const TreeItem: React.FC<TreeItemProps> = (props: TreeItemProps) => {
  const {
    className,
    sourceData,
    sourceData: { expanded: initialExpand = true },
    level,
    checkable,
    checked,
    selectedValues,
    onSelect
  } = props;

  const [expanded, setExpanded] = useState<boolean>(initialExpand!);
  const expandSwitcherOnClick: React.MouseEventHandler<HTMLInputElement> = () => {
    setExpanded((prevExpand) => !prevExpand);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onSelect(e.target.checked, sourceData.value);
  };

  const childrenRef = useRef<HTMLDivElement>(null);
  useUpdate(() => {
    if (!childrenRef.current) {
      return;
    }
    const afterExpand = () => {
      if (!childrenRef.current) {
        return;
      }
      childrenRef.current.style.height = 'auto';
      childrenRef.current.removeEventListener('transitionend', afterExpand);
    };
    if (expanded) {
      childrenRef.current.style.height = 'auto';
      const { height } = childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = '0px';
      childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = height + 'px';
      childrenRef.current.addEventListener('transitionend', afterExpand);
    } else {
      childrenRef.current.style.height = 'auto';
      const { height } = childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = height + 'px';
      childrenRef.current.getBoundingClientRect();
      childrenRef.current.style.height = '0px';
    }
    return () => {
      childrenRef.current?.removeEventListener('transitionend', afterExpand);
    };
  }, [expanded]);

  return (
    <div className={classNames(sc(), className)}>
      <div className={sc('content')}>
        {sourceData.children ? (
          <span
            className={classNames(sc('switcher'), expanded ? 'open' : 'close')}
            onClick={expandSwitcherOnClick}
          >
            <Icon className={classNames(sc('switch'))} type="triangle-down" />
          </span>
        ) : (
          <span className={sc('switcher-empty')} />
        )}
        {checkable && (
          <span className={sc('checker')}>
            <Checkbox
              className={sc('check-box')}
              checked={checked}
              disabled={sourceData.disabledCheckbox}
              onChange={onChange}
            />
          </span>
        )}
        {typeof sourceData.icon === 'string' ? (
          <Icon type={sourceData.icon} />
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
              checkable={checkable}
              checked={selectedValues!.includes(childrenTreeData.value)}
              selectedValues={selectedValues}
              onSelect={onSelect}
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
    expanded: PropTypes.bool,
    disabledCheckbox: PropTypes.bool,
    children: PropTypes.array
  }).isRequired,
  level: PropTypes.number.isRequired,
  checkable: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
TreeItem.defaultProps = {
  checkable: false,
  checked: false
};

export default TreeItem;
