import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './modal.example.scss';

import CodeDemo1 from './modal.codeDemo1';
const code1 = require('!!raw-loader!./modal.codeDemo1.tsx');
import CodeDemo2 from './modal.codeDemo2';
const code2 = require('!!raw-loader!./modal.codeDemo2.tsx');
import CodeDemo3 from './modal.codeDemo3';
const code3 = require('!!raw-loader!./modal.codeDemo3.tsx');

const ModalExample: React.FunctionComponent = () => {
  return (
    <div className="modal-example-page">
      <section>
        <h1>Modal 对话框</h1>
        <p>模态对话框</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="基础使用"
              content={<p>第一个对话框</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="信息提示"
              content={<p>各种类型的信息提示，只提供一个按钮用于关闭。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title=" 确认对话框"
              content={
                <p>
                  使用<code>confirm()</code>或者<code>Modal.alert()</code>
                  可以快捷地弹出对话框。
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
            ['visible', '对话框是否可见', 'boolean', 'false'],
            ['title', '对话框的标题', 'string', '-'],
            ['closable', '是否显示对话框右上角的关闭按钮', 'boolean', 'true'],
            [
              'onClose',
              '点击对话框右上角关闭按钮和遮罩层（如果允许）时的回调',
              'React.MouseEventHandler',
              '-'
            ],
            [
              'closeOnClickMask',
              <>
                点击遮罩层是否执行<code>onClose</code>回调
              </>,
              'boolean',
              'false'
            ],
            ['buttons', '对话框底部的按钮', 'Array<React.ReactElement>', '-'],
            ['children', '对话框的主体内容', 'React.ReactNode', '-']
          ]}
        />
        <h3>Modal.method()</h3>
        <p>包括：</p>
        <ul>
          <li>
            <code>Modal.info</code>
          </li>
          <li>
            <code>Modal.success</code>
          </li>
          <li>
            <code>Modal.danger</code>
          </li>
          <li>
            <code>Modal.warning</code>
          </li>
        </ul>
        <p>
          上述四种方法均为一个函数，参数为一个<code>Object</code>
          ，具体属性如下：
        </p>
        <Api
          data={[
            ['title', '对话框的标题', 'string', '-'],
            ['content', '对话框的主体内容', 'React.ReactNode', '-'],
            [
              'buttonType',
              '按钮的类型',
              'string',
              'primary success danger default'
            ],
            ['buttonText', '按钮的文案', 'string', '知道了'],
            ['onClick', '点击按钮时的回调', 'React.MouseEventHandler', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default ModalExample;
