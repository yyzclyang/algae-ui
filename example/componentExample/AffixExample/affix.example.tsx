import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import './affix.example.scss';

import CodeDemo1 from './affix.codeDemo1';
const code1 = require('!!raw-loader!./affix.codeDemo1.tsx');

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div className="affix-example-page">
      <h1>Affix 固钉</h1>
      <p>将页面元素钉在可视范围内。</p>
      <section>
        <h2>组件概述</h2>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础"
              content={<p>基础使用</p>}
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

export default LayoutExample;
