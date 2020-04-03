import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './button.example.scss';

import CodeDemo1 from './button.codeDemo1';
const code1 = require('!!raw-loader!./button.codeDemo1.tsx');
import CodeDemo2 from './button.codeDemo2';
const code2 = require('!!raw-loader!./button.codeDemo2.tsx');
import CodeDemo3 from './button.codeDemo3';
const code3 = require('!!raw-loader!./button.codeDemo3.tsx');
import CodeDemo4 from './button.codeDemo4';
const code4 = require('!!raw-loader!./button.codeDemo4.tsx');
import CodeDemo5 from './button.codeDemo5';
const code5 = require('!!raw-loader!./button.codeDemo5.tsx');
import CodeDemo6 from './button.codeDemo6';
const code6 = require('!!raw-loader!./button.codeDemo6.tsx');

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className="button-example-page">
      <section>
        <h1>Button 按钮</h1>
        <p>用于开始一个即时操作。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>响应用户点击行为，触发相应业务逻辑。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="按钮类型"
              content={
                <p>按钮有四种类型：主按钮、默认按钮、成功按钮、危险按钮。</p>
              }
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="不可用状态"
              content={
                <p>
                  添加<code>disabled</code>
                  属性即可让按钮处于不可用状态，同时按钮样式也会改变。
                </p>
              }
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="按钮组合"
              content={
                <p>
                  将多个<code>Button</code>放入<code>ButtonGroup</code>
                  中来形成按钮组合。
                </p>
              }
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="图标按钮"
              content={
                <>
                  <p>
                    图标按钮有两种使用方式。第一种是设置<code>Button</code>的
                    <code>icon</code>属性，第二种是直接在<code>Button</code>
                    内传入
                    <code>Icon</code>组件。
                  </p>
                  <p>
                    在使用<code>icon</code>
                    属性时，可传入
                    <code>iconPosition</code>属性控制图标的位置，默认为
                    <code>left</code>。
                  </p>
                </>
              }
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="加载中状态"
              content={
                <p>
                  添加<code>loading</code>属性即可让按钮处于加载状态。
                </p>
              }
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
            <CodeDemo
              title="幽灵按钮"
              content={
                <p>
                  添加<code>ghost</code>
                  属性即可让按钮变成幽灵按钮。边框、内容变成主色，背景变为透明。
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
        <Api
          data={[
            [
              'buttonType',
              <>
                按钮类型，可选值为<code>primary</code> <code>default</code>{' '}
                <code>success</code> <code>danger</code>
              </>,
              'string',
              'default'
            ],
            ['icon', '设置按钮上的图标', 'string', '-'],
            ['iconPosition', '设置按钮上图标的位置', 'right | left', 'left'],
            ['disabled', '按钮不可用状态', 'boolean', 'false'],
            ['loading', '设置按钮的加载状态', 'boolean', 'false'],
            ['ghost', '设置幽灵按钮', 'boolean', 'false'],
            [
              'full',
              <>
                按钮默认有<code>margin</code>，<code>full</code>可设置按钮的左右
                <code>margin</code>为 0
              </>,
              'boolean',
              'false'
            ],
            ['onClick', '点击按钮的回调', '(event) => void', '-']
          ]}
        />
        <p>支持原生的其他所有属性。</p>
      </section>
    </div>
  );
};

export default ButtonExample;
