import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { Icon } from 'ROOT/src';
import './iconDisplay.scss';

interface IconItemProps {
  type: string;
}

const IconItem: React.FunctionComponent<IconItemProps> = (props) => {
  const { type } = props;

  const [copyVisible, setCopyVisible] = useState<boolean>(false);
  const [resetCopyVisibleClock, setResetCopyVisibleClock] = useState<
    ReturnType<typeof setTimeout>
  >();
  useEffect(() => {
    return () => {
      resetCopyVisibleClock && clearTimeout(resetCopyVisibleClock);
    };
  }, [resetCopyVisibleClock]);

  return (
    <div
      onClick={() => {
        copy(`<Icon type="${type}" />`);
        setCopyVisible(true);
        setResetCopyVisibleClock(
          setTimeout(() => {
            setCopyVisible(false);
          }, 1000)
        );
      }}
      className={copyVisible ? 'active' : ''}
    >
      <Icon type={type} />
      <span className="icon-type">{type}</span>
    </div>
  );
};

interface IconDisplayProps {
  iconDisplayData: IconData[];
}

export interface IconData {
  title: string;
  data: string[];
}

const IconDisplay: React.FunctionComponent<IconDisplayProps> = (
  props: IconDisplayProps
) => {
  const { iconDisplayData } = props;
  return (
    <div className="icon-display">
      {iconDisplayData.map(({ title, data }, index) => (
        <div className="icons" key={index}>
          <h3>{title}</h3>
          <ul>
            {data.map((type, index) => (
              <li key={index}>
                <IconItem type={type} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IconDisplay;
