import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './checkbox.example.scss';

import CodeDemo1 from './checkbox.codeDemo1';
const code1 = require('!!raw-loader!./checkbox.codeDemo1.tsx');

const CheckboxExample: React.FunctionComponent = () => {
  return (
    <div className="switch-example-page">
      <section>
        <h1>Checkbox 多选框</h1>
        <p>多选框</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>在一组可选项中进行多项选择时</p>
        <p>单独使用可以表示两种状态之间的切换</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>最简单的用法</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api data={[]} />
      </section>
    </div>
  );
};

export default CheckboxExample;
