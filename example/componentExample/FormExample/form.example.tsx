import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './form.example.scss';

import CodeDemo1 from './form.codeDemo1';
const code1 = require('!!raw-loader!./form.codeDemo1.tsx');

const SwitchExample: React.FunctionComponent = () => {
  return (
    <div className="switch-example-page">
      <section>
        <h1>Form 表单</h1>
        <p>具有数据收集、校验和提交功能的表单</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>用于创建一个实体或收集信息。</p>
        <p>需要对输入的数据类型进行校验时。</p>
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
