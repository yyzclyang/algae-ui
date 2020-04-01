import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker, useToggle, useUpdate } from '../utils';
import Icon from '../icon';
import './style/treeItem.scss';
import Checkbox from '../checkbox';

const sc = scopedClassMaker('algae-ui-tree-item');

/**
 * 收集后代所有元素的值
 * @param sourceData 当前元素的 sourceData
 * @param excludesDisabled 是否排除不可选择元素的值
 */
const collectDescendantValues = (
  sourceData: TreeItemSourceData,
  excludesDisabled: boolean = false
): string[] => {
  return (
    sourceData.children?.reduce((result: string[], childSourceData) => {
      return result.concat(
        excludesDisabled && childSourceData.disabledCheckbox
          ? []
          : childSourceData.value,
        childSourceData.children ? collectDescendantValues(childSourceData) : []
      );
    }, []) ?? []
  );
};
/**
 * 计算已选中的值与后代元素的值的交集，判断后代的选择情况。全部选中？部分选中？全都没选中？
 * @param selectedValues 已选中的值
 * @param descendantValues 后代元素的值
 */
const calculatorCommonValues = (
  selectedValues: string[],
  descendantValues: string[]
): string[] => {
  return descendantValues.filter((descendantValue) =>
    selectedValues.includes(descendantValue)
  );
};
type CheckedStatus = 'checked' | 'indeterminate' | 'none';
/**
 * 根据后代元素的选择情况来判断当前元素的状态子影响父
 * @param selectedValues 已选中的值
 * @param descendantValues 后代元素的值
 */
const judgeCheckedStatus = (
  selectedValues: string[],
  descendantValues: string[]
): CheckedStatus => {
  const commonValuesLength = calculatorCommonValues(
    selectedValues,
    descendantValues
  ).length;
  return commonValuesLength > 0
    ? commonValuesLength < descendantValues.length
      ? 'indeterminate'
      : 'checked'
    : 'none';
};

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
  onTreeSelect: (selectedValues: string[]) => void;
  onTreeItemSelect: (selectedValues: string[]) => void;
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
    onTreeSelect
  } = props;

  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [expanded, toggleExpanded] = useToggle(initialExpand);
  const expandSwitcherOnClick: React.MouseEventHandler<HTMLInputElement> = () => {
    toggleExpanded();
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const descendantValues = collectDescendantValues(sourceData, true);
    const newSelectedValues = e.target.checked
      ? Array.from(
          new Set([...selectedValues, sourceData.value, ...descendantValues])
        )
      : selectedValues.filter(
          (selectedValue) =>
            selectedValue !== sourceData.value &&
            !descendantValues.includes(selectedValue)
        );
    setIsIndeterminate(false);
    props.onTreeItemSelect(newSelectedValues);
  };
  const onTreeItemSelect = (selectedValues: string[]) => {
    const descendantValues = collectDescendantValues(sourceData);
    const checkedStatus = judgeCheckedStatus(selectedValues, descendantValues);
    props.onTreeItemSelect(
      checkedStatus === 'checked'
        ? [
            ...selectedValues,
            ...(sourceData.disabledCheckbox ? [] : [sourceData.value])
          ]
        : selectedValues.filter(
            (selectedValue) => selectedValue !== sourceData.value
          )
    );
    setIsIndeterminate(
      !sourceData.disabledCheckbox && checkedStatus === 'indeterminate'
    );
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
              indeterminate={isIndeterminate}
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
              onTreeSelect={onTreeSelect}
              onTreeItemSelect={onTreeItemSelect}
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
