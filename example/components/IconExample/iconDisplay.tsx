import React from 'react';
import { Icon } from 'ROOT/src';
import './iconDisplay.scss';

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
      <h2>图标列表</h2>
      {iconDisplayData.map(({ title, data }) => (
        <>
          <h3>{title}</h3>
          <ul className="icon-group">
            {data.map((type, index) => (
              <li key={index} className="icon-single">
                <Icon type={type} />
                <span className="icon-type">{type}</span>
              </li>
            ))}
          </ul>
        </>
      ))}
      }
    </div>
  );
};

export default IconDisplay;
