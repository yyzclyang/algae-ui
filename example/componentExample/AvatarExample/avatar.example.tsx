import React from 'react';
import { CodeDemo } from '../CommonDispalyComponents';
import { Api } from '../CommonDispalyComponents';
import './avatar.example.scss';

import CodeDemo1 from './avatar.codeDemo1';
const code1 = require('!!raw-loader!./avatar.codeDemo1.tsx');
import CodeDemo2 from './avatar.codeDemo2';
const code2 = require('!!raw-loader!./avatar.codeDemo2.tsx');

const AvatarExample: React.FunctionComponent = () => {
  return (
    <div className="avatar-example-page">
      <section>
        <h1>Avatar 头像</h1>
        <p>用来代表用户或事物，支持图片、图标或者字符。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>展示用户头像信息。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基本使用"
              content={<p>可设置形状和大小。</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="自定义类型"
              content={
                <p>
                  可设置图片、字符串和<code>icon</code>
                  ，字符串支持自定义颜色和背景色，<code>icon</code>
                  支持自定义背景色。
                </p>
              }
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
            ['icon', '设置头像图标的类型', 'string', 'avatar'],
            ['size', '设置头像的大小', 'number', '32'],
            ['shape', '设置头像的形状', 'circle | square', 'circle'],
            ['src', '设置头像的图片地址', 'string', '-'],
            ['alt', '设置图片的 alt', 'string', '-'],
            ['style', '设置头像的 style', 'React.CSSProperties', '-'],
            ['children', '设置文字类型图像', 'string', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default AvatarExample;
