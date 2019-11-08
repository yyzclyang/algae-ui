import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './steps.example.scss';

import CodeDemo1 from './steps.codeDemo1';
const code1 = require('!!raw-loader!./steps.codeDemo1.tsx');
import CodeDemo2 from './steps.codeDemo2';
const code2 = require('!!raw-loader!./steps.codeDemo2.tsx');
import CodeDemo3 from './steps.codeDemo3';
const code3 = require('!!raw-loader!./steps.codeDemo3.tsx');
import CodeDemo4 from './steps.codeDemo4';
const code4 = require('!!raw-loader!./steps.codeDemo4.tsx');
import CodeDemo5 from './steps.codeDemo5';
const code5 = require('!!raw-loader!./steps.codeDemo5.tsx');
import CodeDemo6 from './steps.codeDemo6';
const code6 = require('!!raw-loader!./steps.codeDemo6.tsx');

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
            <CodeDemo
              title="带图标的步骤条"
              content={
                <p>
                  通过设置<code>Step</code>的<code>icon</code>
                  属性，可以启用自定义图标
                </p>
              }
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="步骤切换"
              content={<p>通常用来表示一个流程的处理</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="错误的 Step"
              content={
                <p>
                  使用<code>Step</code>的<code>status</code>
                  属性来制定当前步骤的状态
                </p>
              }
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
            <CodeDemo
              title="可点击的 Step"
              content={
                <p>
                  通过点击<code>Step</code>来改变当前的步骤和状态
                </p>
              }
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
            <CodeDemo
              title="垂直的步骤条"
              content={
                <p>
                  通过设置<code>direction</code>来变化步骤条的方向
                </p>
              }
              code={code6.default}
            >
              <CodeDemo6 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <h3>Steps</h3>
        <Api
          data={[
            ['className', '类名', 'string', '-'],
            ['current', '指定当前的步骤', 'number', '0'],
            [
              'status',
              '指定当前步骤的状态',
              'waiting | process | success | fail',
              '-'
            ],
            [
              'onChange',
              '点击切换步骤时的回调',
              '(current: number) => void',
              '-'
            ]
          ]}
        />
        <h3>Step</h3>
        <Api
          data={[
            ['className', '类名', 'string', '-'],
            ['style', '样式', 'React.CSSProperties', '-'],
            ['title', '标题', 'string', '-'],
            ['subTitle', '子标题', 'string', '-'],
            ['description', '详情描述', 'string', '-'],
            ['status', '制定状态', 'waiting | process | success | fail', '-'],
            ['icon', '图标的类型', 'string | ReactNode', '-'],
            ['disabled', '禁用点击', 'boolean', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default StepsExample;
