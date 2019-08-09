import React from 'react';
import { CodeDemo } from '../../componentExample/CommonDispalyComponents';
import './index.scss';

import StartDemo from './start.codeDemo';
const code = require('!!raw-loader!./start.codeDemo.tsx');

export default () => (
  <div className="get-start-page">
    <section>
      <h1>开始使用</h1>
      <p>
        <code>algae-ui</code>已发布至 NPM，您可以使用<code>npm</code>/
        <code>yarn</code>来安装
      </p>
      <div className="install">
        <p>$ npm i algae-ui</p>
        <p>$ yarn add algae-ui</p>
      </div>
    </section>
    <section>
      <h2>简单示例</h2>
      <div className="get-start-example">
        <CodeDemo
          title="使用 Button"
          content={
            <p>
              使用<code>algae-ui</code>的<code>Button</code>组件来代替默认的
              <code>button</code>。
            </p>
          }
          code={code.default}
        >
          <StartDemo />
        </CodeDemo>
      </div>
    </section>
  </div>
);
