import React from 'react';
import './index.scss';

type Api = string[];

interface ApiProps {
  data: Api[];
}

const Api: React.FunctionComponent<ApiProps> = (props: ApiProps) => {
  const { data } = props;
  const parameterType = [
    ['parameter', '参数'],
    ['explain', '说明'],
    ['type', '类型'],
    ['default', '默认值']
  ];
  return (
    <ul>
      <li className="table-header">
        {parameterType.map((item, index) => (
          <span key={index} className={item[0]}>
            {item[1]}
          </span>
        ))}
      </li>
      {data.map((api) => (
        <li key={api[0]} className="table-body">
          {api.map((item, index) => (
            <span key={index} className={parameterType[index][0]}>
              {item}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Api;
