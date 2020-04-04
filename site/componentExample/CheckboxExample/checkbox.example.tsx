import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './checkbox.example.scss';

import CodeDemo1 from './checkbox.codeDemo1';
const code1 = require('!!raw-loader!./checkbox.codeDemo1.tsx');
import CodeDemo2 from './checkbox.codeDemo2';
const code2 = require('!!raw-loader!./checkbox.codeDemo2.tsx');
import CodeDemo3 from './checkbox.codeDemo3';
const code3 = require('!!raw-loader!./checkbox.codeDemo3.tsx');
import CodeDemo4 from './checkbox.codeDemo4';
const code4 = require('!!raw-loader!./checkbox.codeDemo4.tsx');
import CodeDemo5 from './checkbox.codeDemo5';
const code5 = require('!!raw-loader!./checkbox.codeDemo5.tsx');
import CodeDemo6 from './checkbox.codeDemo6';
const code6 = require('!!raw-loader!./checkbox.codeDemo6.tsx');

const CheckboxExample: React.FunctionComponent = () => {
  return (
    <div className="checkbox-example-page">
      <section>
        <h1>Checkbox 多选框</h1>
        <p>多选框</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>在一组可选项中进行多项选择时</p>
        <p>单独使用可以表示两种状态之间的切换</p>
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
              title="受控组件"
              content={<p>受控的 Checkbox</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="CheckboxGroup"
              content={<p>通过 options 生成 CheckboxGroup</p>}
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="Disabled"
              content={<p>Checkbox 不可用状态</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="CheckboxGroup"
              content={<p>多个 Checkbox 组成的 CheckboxGroup</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
            <CodeDemo
              title="全选框"
              content={<p>实现全选框</p>}
              code={code6.default}
            >
              <CodeDemo6 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <h3>Checkbox</h3>
        <p>
          <code>Checkbox</code>拓展自
          <code>&lt;input type=&quot;checkbox&quot; /&gt;</code>，除了以下
          <code>Api</code>
          ，还支持<code>input</code>的其他<code>Api</code>。
        </p>
        <Api
          data={[
            ['checked', '是否选中', 'boolean', '-'],
            ['defaultChecked', '默认是否选中', 'boolean', 'false'],
            ['disabled', '是否禁用', 'boolean', 'false'],
            [
              'indeterminate',
              '设置半选中模式，用于设置全选框',
              'boolean',
              'false'
            ],
            ['onChange', '选取时的回调', 'React.ChangeEventHandler', '-']
          ]}
        />
        <h3>CheckboxGroup</h3>
        <p>
          用于设置一组<code>Checkbox</code>。
        </p>
        <Api
          data={[
            [
              'value',
              <>
                用于设置当前激活的<code>Checkbox</code>
              </>,
              'string',
              '-'
            ],
            [
              'name',
              <>
                为被包裹的<code>Checkbox</code>添加<code>name</code>属性
              </>,
              'string',
              '-'
            ],
            [
              'disabled',
              <>
                禁用所有的子<code>Checkbox</code>
              </>,
              'boolean',
              'false'
            ],
            [
              'options',
              <>
                使用配置模式配置子<code>Checkbox</code>。
              </>,
              'Array<{ label: string, value: string, disabled?: boolean } | string>',
              '-'
            ],
            ['onChange', '选项变化时的回调', 'React.ChangeEventHandler', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default CheckboxExample;
