import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './scroll.example.scss';

import CodeDemo1 from './scroll.codeDemo1';
const code1 = require('!!raw-loader!./scroll.codeDemo1.tsx');

const ScrollExample: React.FunctionComponent = () => {
  return (
    <div className="scroll-example-page">
      <section>
        <h1>Scroll 滚动条</h1>
        <p>自定义滚动条</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>需要美化原生滚动条时。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>第一个滚动条</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            [
              'verticalGap',
              <>
                滚动条可移动区域与<code>Scroll</code>区域的上下间距，单位为
                <code>px</code>
              </>,
              'number',
              '0'
            ],
            [
              'rightGap',
              <>
                滚动条可移动区域与<code>Scroll</code>区域的右间距，单位为
                <code>px</code>
              </>,
              'number',
              '4'
            ],
            [
              'scrollBarWidth',
              <>
                滚动条的宽度，单位为<code>px</code>
              </>,
              'number',
              '8'
            ],
            [
              'scrollBarColor',
              '滚动条的颜色',
              'string',
              <>
                <code>#666</code>
              </>
            ],
            [
              'onScroll',
              <>
                <code>Scroll</code>滚动时的回调
              </>,
              'React.UIEventHandler',
              '-'
            ]
          ]}
        />
      </section>
    </div>
  );
};

export default ScrollExample;
