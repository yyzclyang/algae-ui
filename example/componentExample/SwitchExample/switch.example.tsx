import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './switch.example.scss';

import CodeDemo1 from './switch.codeDemo1';
const code1 = require('!!raw-loader!./switch.codeDemo1.tsx');
import CodeDemo2 from './switch.codeDemo2';
const code2 = require('!!raw-loader!./switch.codeDemo2.tsx');
import CodeDemo3 from './switch.codeDemo3';
const code3 = require('!!raw-loader!./switch.codeDemo3.tsx');
import CodeDemo4 from './switch.codeDemo4';
const code4 = require('!!raw-loader!./switch.codeDemo4.tsx');

const SwitchExample: React.FunctionComponent = () => {
  return (
    <div className="switch-example-page">
      <section>
        <h1>Switch 开关</h1>
        <p>开关选择器</p>
      </section>
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
            <CodeDemo
              title="文字和图标"
              content={<p>用文字和图标来表示当前的状态</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="不可用状态"
              content={<p>Switch 不可用状态</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="加载中"
              content={<p>表示相关操作正在进行中</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            [
              'className',
              <>
                <code>Switch</code>的类名
              </>,
              'string',
              '-'
            ],
            [
              'check',
              <>
                表示当前<code>Switch</code>的状态
              </>,
              'boolean',
              '-'
            ],
            [
              'defaultChecked',
              <>
                表示当前<code>Switch</code>的默认值。
              </>,
              'boolean',
              '-'
            ],
            [
              'disabled',
              <>
                是否禁用<code>Switch</code>
              </>,
              'boolean',
              'false'
            ],
            [
              'loading',
              <>
                表示加载状态中的<code>Switch</code>
              </>,
              'boolean',
              'false'
            ],
            [
              'onClick',
              <>
                <code>Switch</code>开关点击时的回调
              </>,
              'React.MouseEventHandler',
              '-'
            ],
            [
              'onChange',
              <>
                <code>Switch</code>状态改变时的回调，参数为即将变化到的状态值
              </>,
              '(arg1?: boolean) => void',
              '-'
            ],
            [
              'checkedEl',
              <>
                <code>Switch</code>选中状态时的内容
              </>,
              'string | React.ReactElement',
              '-'
            ],
            [
              'uncheckedEl',
              <>
                <code>Switch</code>未选中状态时的内容
              </>,
              'string | React.ReactElement',
              '-'
            ]
          ]}
        />
      </section>
    </div>
  );
};

export default SwitchExample;
