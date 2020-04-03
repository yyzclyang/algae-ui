import React from 'react';
import './api.scss';

type Api = Array<string | React.ReactNode>;
interface ApiProps {
  data: Api[];
}

const Api: React.FunctionComponent<ApiProps> = (props: ApiProps) => {
  const { data } = props;
  const parameterType = ['参数', '说明', '类型', '默认值'];
  return (
    <table className="algae-ui-api">
      <thead>
        <tr>
          {parameterType.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((api, index) => (
          <tr key={index}>
            {api.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Api;
