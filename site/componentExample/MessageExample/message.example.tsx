import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './message.example.scss';

import CodeDemo1 from './message.codeDemo1';
const code1 = require('!!raw-loader!./message.codeDemo1.tsx');
import CodeDemo2 from './message.codeDemo2';
const code2 = require('!!raw-loader!./message.codeDemo2.tsx');
import CodeDemo3 from './message.codeDemo3';
const code3 = require('!!raw-loader!./message.codeDemo3.tsx');
import CodeDemo4 from './message.codeDemo4';
const code4 = require('!!raw-loader!./message.codeDemo4.tsx');

const MessageExample: React.FunctionComponent = () => {
  return (
    <div className="message-example-page">
      <section>
        <h1>Message 消息</h1>
        <p>全局展示操作反馈信息</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>可提供成功、警告和错误等反馈信息</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>信息提示反馈</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="修改延时"
              content={
                <p>
                  设置自定义延时<code>10s</code>，默认延时为<code>3s</code>
                </p>
              }
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="其他类型的提示"
              content={
                <p>
                  包括<code>success</code>
                  <code>error</code>
                  <code> warning</code>
                </p>
              }
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="加载中"
              content={<p>进行全局 loading，异步自行移除。</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <p>提供了一些方法，使用方式和参数如下：</p>
        <ul>
          <li>
            <code>message.info(message[, duration[, closeCallback]])</code>
          </li>
          <li>
            <code>message.success(message[, duration[, closeCallback]])</code>
          </li>
          <li>
            <code>message.error(message[, duration[, closeCallback]])</code>
          </li>
          <li>
            <code>message.warning(message[, duration[, closeCallback]])</code>
          </li>
          <li>
            <code>message.loading(message[, duration[, closeCallback]])</code>
          </li>
        </ul>
        <Api
          data={[
            ['message', '提示内容', 'string | ReactNode', '-'],
            [
              'duration',
              '自动关闭的延时，单位毫秒。设为 0 时不自动关闭。',
              'number',
              '3000'
            ],
            ['closeCallback', '关闭时触发的回调', '() => void', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default MessageExample;
