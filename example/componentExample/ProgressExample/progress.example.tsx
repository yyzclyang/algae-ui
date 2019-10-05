import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './progress.example.scss';

import CodeDemo1 from './progress.codeDemo1';
const code1 = require('!!raw-loader!./progress.codeDemo1.tsx');
import CodeDemo2 from './progress.codeDemo2';
const code2 = require('!!raw-loader!./progress.codeDemo2.tsx');
import CodeDemo3 from './progress.codeDemo3';
const code3 = require('!!raw-loader!./progress.codeDemo3.tsx');
import CodeDemo4 from './progress.codeDemo4';
const code4 = require('!!raw-loader!./progress.codeDemo4.tsx');
import CodeDemo5 from './progress.codeDemo5';
const code5 = require('!!raw-loader!./progress.codeDemo5.tsx');
import CodeDemo6 from './progress.codeDemo6';
const code6 = require('!!raw-loader!./progress.codeDemo6.tsx');
import CodeDemo7 from './progress.codeDemo7';
const code7 = require('!!raw-loader!./progress.codeDemo7.tsx');
import CodeDemo8 from './progress.codeDemo8';
const code8 = require('!!raw-loader!./progress.codeDemo8.tsx');

const ProgressExample: React.FunctionComponent = () => {
  return (
    <div className="avatar-example-page">
      <section>
        <h1>Progress进度条</h1>
        <p>展示操作的当前进度。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="进度条"
              content={<p>普通进度条。</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="仪表盘"
              content={<p>仪表盘样式的圆形进度条。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
            <CodeDemo
              title="自定义文案"
              content={
                <p>
                  可自定义进度条的文案。(默认的文案只展示整数进度，需要小数或其他展示文案的请使用自定义文案。)
                </p>
              }
              code={code5.default}
            >
              <CodeDemo5 />
            </CodeDemo>
            <CodeDemo
              title="自定义文案"
              content={
                <p>
                  可自定义进度条的文案。(默认的文案只展示整数进度，需要小数或其他展示文案的请使用自定义文案。)
                </p>
              }
              code={code7.default}
            >
              <CodeDemo7 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="进度圈"
              content={<p>圆形的进度条。</p>}
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="动态化"
              content={<p>进度条变化动画。</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
            <CodeDemo
              title="圆角/方角边缘"
              content={
                <p>
                  通过设置<code>strokeLinecap="square|round"</code>
                  可以调整进度条边缘的形状，默认为<code>round</code>
                </p>
              }
              code={code6.default}
            >
              <CodeDemo6 />
            </CodeDemo>
            <CodeDemo
              title="自定义颜色"
              content={<p>可自定义背景色和进度条颜色</p>}
              code={code8.default}
            >
              <CodeDemo8 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            ['type', '进度条的类型', 'normal | circle | dashboard', 'normal'],
            ['percent', '进度条的百分比', 'number', '-'],
            ['showInfo', '是否展示进度条数值或图标', 'boolean', 'true'],
            ['value', '自定义展示的文案', 'string', '-'],
            ['status', '进度条的状态', 'normal | success | fail', 'normal'],
            ['strokeLinecap', '进度条的边缘样式', 'square | round', 'round'],
            ['backgroundColor', '进度条的背景色', 'string', '#E5E5E5'],
            [
              'strokeColor',
              <>
                自定义进度条的颜色，优先级比<code>status</code>默认的颜色高
              </>,
              'string',
              '-'
            ]
          ]}
        />
      </section>
    </div>
  );
};

export default ProgressExample;
