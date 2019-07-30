import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import './input.example.scss';

import CodeDemo1 from './input.codeDemo1';
const code1 = require('!!raw-loader!./input.codeDemo1.tsx');
import CodeDemo2 from './input.codeDemo2';
const code2 = require('!!raw-loader!./input.codeDemo2.tsx');
import CodeDemo3 from './input.codeDemo3';
const code3 = require('!!raw-loader!./input.codeDemo3.tsx');
import CodeDemo4 from './input.codeDemo4';
const code4 = require('!!raw-loader!./input.codeDemo4.tsx');

const InputExample: React.FunctionComponent = () => {
  return (
    <div className="input-example-page">
      <h1>Input 输入框</h1>
      <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      <section>
        <h2>何时使用</h2>
        <p>需要用户输入表单内容时。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>第一个输入框</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="搜索框"
              content={<p>带有搜索按钮的输入框。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="带清除图标"
              content={<p>带清除图标的输入框，点击触发的函数需单独传入。</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="文本域"
              content={<p>用于多行文本输入。</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InputExample;
