import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import './layout.example.scss';

import CodeDemo1 from './layout.codeDemo1';
const code1 = require('!!raw-loader!./layout.codeDemo1.tsx');
import CodeDemo2 from './layout.codeDemo2';
const code2 = require('!!raw-loader!./layout.codeDemo2.tsx');
import CodeDemo3 from './layout.codeDemo3';
const code3 = require('!!raw-loader!./layout.codeDemo3.tsx');

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div className="layout-example-page">
      <section>
        <h1>Layout 布局</h1>
        <p>用于协助进行页面布局。</p>
      </section>
      <section>
        <h2>组件概述</h2>
        <ul>
          <li>
            <p>
              <code>Layout</code>：布局容器。
            </p>
          </li>
          <li>
            <p>
              <code>Header</code>：顶部布局。
            </p>
          </li>
          <li>
            <p>
              <code>Side</code>：侧边栏。
            </p>
          </li>
          <li>
            <p>
              <code>Content</code>：内容部分。
            </p>
          </li>
          <li>
            <p>
              <code>Footer</code>：底部布局。
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="布局示例1"
              content={<p>典型的上中下布局。</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="布局示例3"
              content={<p>左右，右分上中下布局。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="布局示例2"
              content={<p>上中下，中带边栏的布局。</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayoutExample;
