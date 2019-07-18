import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';

import CodeDemo1 from './scroll.codeDemo1';
const code1 = require('!!raw-loader!./scroll.codeDemo1.tsx');

const ScrollExample: React.FunctionComponent = () => {
  return (
    <div className="modal-example-page">
      <h1>Scroll 滚动条</h1>
      <p>自定义滚动条</p>
      <section>
        <h2>何时使用</h2>
        <p>需要美化原生滚动条时。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>第一个滚动条</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExample;
