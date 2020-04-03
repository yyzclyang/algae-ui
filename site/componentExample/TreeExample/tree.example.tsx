import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './tree.example.scss';

import CodeDemo1 from './tree.codeDemo1';
const code1 = require('!!raw-loader!./tree.codeDemo1.tsx');
import CodeDemo2 from './tree.codeDemo2';
const code2 = require('!!raw-loader!./tree.codeDemo2.tsx');
import CodeDemo3 from './tree.codeDemo3';
const code3 = require('!!raw-loader!./tree.codeDemo3.tsx');
import CodeDemo4 from './tree.codeDemo4';
const code4 = require('!!raw-loader!./tree.codeDemo4.tsx');
import CodeDemo5 from './tree.codeDemo5';
const code5 = require('!!raw-loader!./tree.codeDemo5.tsx');

const TreeExample: React.FunctionComponent = () => {
  return (
    <div className="tree-example-page">
      <section>
        <h1>Tree 树形控件</h1>
        <p>多层次的结构列表</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>
          使用树控件可以完整展现数据之间的层级关系，并具有展开收起选择等交互功能
        </p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>最基础的用法，展示勾选，禁用，展开等功能。</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="自动选取"
              content={<p>节点在选取的时候会影响父子节点。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="自定义展开折叠图标"
              content={<p>自定义展开折叠图标</p>}
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="受控使用"
              content={<p>受控用法</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="自定义 Icon"
              content={<p>节点可自定义 Icon</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <h3>Tree</h3>
        <Api
          data={[
            [
              'autoCheck',
              '节点在选取的时候是否影响父子节点',
              'boolean',
              'false'
            ],
            ['checkable', '是否出现选取框', 'boolean', 'false'],
            [
              'switcherIcons',
              '自定义展开折叠的图标',
              '[string | ReactElement, string | ReactElement]',
              '默认三角图标'
            ],
            ['defaultValues', '默认勾选的值', 'Array<string>', '[]'],
            ['selectedValues', '勾选的值', 'Array<string>', '[]'],
            [
              'onSelect',
              '节点勾选时的回调',
              '(selectedValues: Array<string>) => void',
              '-'
            ],
            ['sourceData', '节点数据列表', 'Array<TreeItemSourceData>', '[]']
          ]}
        />
        <h3>TreeItemSourceData</h3>
        <Api
          data={[
            ['text', '节点需要展示的文字', 'string', '-'],
            ['value', '节点代表的值', 'string', '-'],
            ['expanded', '节点是否展开', 'boolean', 'true'],
            ['icon', '节点的图标类型', 'string | ReactElement', '-'],
            ['disabledCheckbox', '节点是否禁止选取', 'boolean', 'false'],
            ['children', '节点子代的值', 'Array<TreeItemSourceData>', '[]']
          ]}
        />
      </section>
    </div>
  );
};

export default TreeExample;
