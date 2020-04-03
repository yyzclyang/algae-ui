import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './badge.example.scss';

import CodeDemo1 from './badge.codeDemo1';
const code1 = require('!!raw-loader!./badge.codeDemo1.tsx');
import CodeDemo2 from './badge.codeDemo2';
const code2 = require('!!raw-loader!./badge.codeDemo2.tsx');
import CodeDemo3 from './badge.codeDemo3';
const code3 = require('!!raw-loader!./badge.codeDemo3.tsx');
import CodeDemo4 from './badge.codeDemo4';
const code4 = require('!!raw-loader!./badge.codeDemo4.tsx');

const BadgeExample: React.FunctionComponent = () => {
  return (
    <div className="avatar-example-page">
      <section>
        <h1>Badge 徽标数</h1>
        <p>图标右上角的圆形徽标数字。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>
          一般出现在通知图标或者头像的右上角，用于显示需要处理的消息数量，通过醒目视觉形式吸引用户处理。
        </p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基本使用"
              content={
                <p>
                  基本的徽章展示，当<code>count</code>为<code>0</code>
                  时，默认不显示，可以设置<code>showZero</code>强制显示。
                </p>
              }
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="封顶数字"
              content={
                <p>
                  超过<code>overflowCount</code>的时候会显示为
                  <code>overflowCount+</code>，默认的<code>overflowCount</code>
                  为<code>99</code>。
                </p>
              }
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <div>
              <CodeDemo
                title="独立使用"
                content={<p>布包裹任何元素即为独立使用。</p>}
                code={code2.default}
              >
                <CodeDemo2 />
              </CodeDemo>
              <CodeDemo
                title="小红点"
                content={<p>没有具体数字，展现为一个小红点。</p>}
                code={code4.default}
              >
                <CodeDemo4 />
              </CodeDemo>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            ['count', '展示的元素', 'number | React.ReactElement', '-'],
            [
              'showZero',
              <>
                <code>count</code>为<code>0</code>
                时默认不展示，设置此选择可强制显示。
              </>,
              'boolean',
              'false'
            ],
            ['overflowCount', '可展示数字的最大值', 'number', '99'],
            ['dot', '不展示具体数字，呈现一个小红点', 'boolean', 'false'],
            ['style', '徽标的样式', 'React.CSSProperties', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default BadgeExample;
