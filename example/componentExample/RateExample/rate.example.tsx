import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './rate.example.scss';

import CodeDemo1 from './rate.codeDemo1';
const code1 = require('!!raw-loader!./rate.codeDemo1.tsx');
import CodeDemo2 from './rate.codeDemo2';
const code2 = require('!!raw-loader!./rate.codeDemo2.tsx');
import CodeDemo3 from './rate.codeDemo3';
const code3 = require('!!raw-loader!./rate.codeDemo3.tsx');
import CodeDemo4 from './rate.codeDemo4';
const code4 = require('!!raw-loader!./rate.codeDemo4.tsx');
import CodeDemo5 from './rate.codeDemo5';
const code5 = require('!!raw-loader!./rate.codeDemo5.tsx');

const RateExample: React.FunctionComponent = () => {
  return (
    <div className="rate-example-page">
      <section>
        <h1>Rate 评分</h1>
        <p>评分组件</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>对评价进行展示</p>
        <p>对事物进行快速的评级操作</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础"
              content={<p>最基础的用法</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="文案展示"
              content={<p>hover 时展示文案</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="清除"
              content={<p>允许重复点击时清除</p>}
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="半星"
              content={<p>支持选中半星</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="只读"
              content={<p>不可改变状态</p>}
              code={code4.default}
            >
              <CodeDemo4 />
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

export default RateExample;
