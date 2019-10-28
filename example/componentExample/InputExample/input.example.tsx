import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
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
      <section>
        <h1>Input 输入框</h1>
        <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      </section>
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
              content={<p>带清除图标的输入框。</p>}
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
      <section>
        <h2>API</h2>
        <h3>Input</h3>
        <p>
          <code>Input</code>为一个单独的输入框。拓展自<code>input</code>
          ，除了以下<code>API</code>，还支持<code>input</code>的所有
          <code>API</code>。
        </p>
        <Api
          data={[
            [
              'value',
              <>
                <code>Input</code>输入框的值。
              </>,
              'string',
              '-'
            ],
            [
              'onChange',
              <>
                <code>Input</code>输入时的回调。
              </>,
              'React.ChangeEventHandler',
              '-'
            ],
            ['allowClear', '是否附带清除按钮。', 'boolean', 'false'],
            [
              'clearFn',
              '点击清除按钮时的回调。',
              'React.MouseEventHandler',
              '-'
            ],
            [
              'wrapperClassName',
              <>
                <code>Input</code>输入框包裹容器的<code>className</code>
              </>,
              'string',
              '-'
            ],
            [
              'className',
              <>
                <code>Input</code>输入框的<code>className</code>
              </>,
              'string',
              '-'
            ]
          ]}
        />
        <h3>Search</h3>
        <p>
          <code>Search</code>为一个带有搜索按钮的输入框，是从<code>Input</code>
          的基础上拓展来的，所以除了以下的<code>API</code>，还支持
          <code>Input</code>所有的<code>API</code>。
        </p>
        <Api
          data={[
            [
              'searchButton',
              <>
                搜索按钮的类型。值为<code>string</code>时为<code>primary</code>
                按钮；值为<code>boolean</code>类型且为<code>true</code>时为
                <code>icon</code>按钮。
              </>,
              'string | boolean',
              '-'
            ],
            [
              'onSearch',
              '点击搜索按钮时的回调。',
              '( inputValue ) => void',
              '-'
            ]
          ]}
        />
        <h3>TextArea</h3>
        <p>
          <code>TextArea</code>为一个文本输入域。拓展自<code>textarea</code>
          ，所以除了以下<code>API</code>，还支持<code>textarea</code>的所有
          <code>API</code>。
        </p>
        <Api
          data={[
            [
              'value',
              <>
                <code>TextArea</code>输入框的值。
              </>,
              'string',
              '-'
            ],
            [
              'onChange',
              <>
                <code>TextArea</code>输入时的回调。
              </>,
              'React.ChangeEventHandler',
              '-'
            ],
            [
              'defaultValue',
              <>
                <code>TextArea</code>的默认值。
              </>,
              'string',
              '-'
            ],
            [
              'cols',
              <>
                <code>TextArea</code>的列数。
              </>,
              'number',
              '32'
            ],
            [
              'rows',
              <>
                <code>TextArea</code>的行数。
              </>,
              'number',
              '4'
            ]
          ]}
        />
      </section>
    </div>
  );
};

export default InputExample;
