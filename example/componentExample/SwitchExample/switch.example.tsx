import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './switch.example.scss';

import CodeDemo1 from './switch.codeDemo1';
const code1 = require('!!raw-loader!./switch.codeDemo1.tsx');

const SwitchExample: React.FunctionComponent = () => {
  return (
    <div className="switch-example-page">
      <h1>Switch 开关</h1>
      <p>开关选择器</p>
      <section>
        <h2>何时使用</h2>
        <p>需要表示开关状态/两种状态之间的切换时。</p>
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

export default SwitchExample;
