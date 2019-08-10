import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './affix.example.scss';

import CodeDemo1 from './affix.codeDemo1';
const code1 = require('!!raw-loader!./affix.codeDemo1.tsx');
import CodeDemo2 from './affix.codeDemo2';
const code2 = require('!!raw-loader!./affix.codeDemo2.tsx');

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div className="affix-example-page">
      <h1>Affix 固钉</h1>
      <p>将页面元素钉在可视范围内。</p>
      <section>
        <h2>何时使用</h2>
        <p>
          当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
        </p>
        <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础"
              content={<p>最基本的用法</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="固定状态改变时添加回调"
              content={<p>可以获得是否固定的状态信息</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            [
              'offsetTop',
              <>
                距离窗口顶部达到指定偏移量后触发，单位为<code>px</code>
              </>,
              'number',
              0
            ],
            [
              'target',
              <>
                设置<code>Affix</code>需要监听其滚动事件的元素
              </>,
              'HTMLElement | Window',
              'window'
            ],
            [
              'onChange',
              <>
                固定状态触发时的回调函数，参数为固定状态的<code>boolean</code>值
              </>,
              '(isAffixed) => void',
              '-'
            ],
            ['children', '需要触发固定的组件', 'React.ReactNode', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default LayoutExample;
