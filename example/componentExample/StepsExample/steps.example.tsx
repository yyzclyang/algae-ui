import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './steps.example.scss';

import CodeDemo1 from './steps.codeDemo1';
const code1 = require('!!raw-loader!./steps.codeDemo1.tsx');

const StepsExample: React.FunctionComponent = () => {
  return (
    <div className="scroll-example-page">
      <section>
        <h1>Steps 步骤条</h1>
        <p>引导用户按照流程完成任务的导航条</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>基础步骤条</p>}
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

export default StepsExample;
