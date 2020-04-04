import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './form.example.scss';

import CodeDemo1 from './form.codeDemo1';
const code1 = require('!!raw-loader!./form.codeDemo1.tsx');
import CodeDemo2 from './form.codeDemo2';
const code2 = require('!!raw-loader!./form.codeDemo2.tsx');
import CodeDemo3 from './form.codeDemo3';
const code3 = require('!!raw-loader!./form.codeDemo3.tsx');
import CodeDemo4 from './form.codeDemo4';
const code4 = require('!!raw-loader!./form.codeDemo4.tsx');

const SwitchExample: React.FunctionComponent = () => {
  return (
    <div className="switch-example-page">
      <section>
        <h1>Form 表单</h1>
        <p>具有数据收集、校验和提交功能的表单</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>用于创建一个实体或收集信息。</p>
        <p>需要对输入的数据类型进行校验时。</p>
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
              title="自定义检测规则"
              content={<p>除了内置的几种检测项，还可以自定义规则进行检测。</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="规则检测"
              content={
                <p>
                  可设置规则对输入的字符串进行检测，并可自定义提示信息内容及提示等级。
                </p>
              }
              code={code2.default}
            >
              <CodeDemo2 />
            </CodeDemo>
            <CodeDemo
              title="异步检测"
              content={<p>可对输入的字符进行异步检测。</p>}
              code={code4.default}
            >
              <CodeDemo4 />
            </CodeDemo>
          </div>
        </div>
      </section>
      <section>
        <h2>API</h2>
        <Api
          data={[
            [
              'value',
              <>
                <code>Form</code>表单的数据
              </>,
              '{ [key: string]: string }',
              '-'
            ],
            ['fields', '渲染输入框的规则', 'Field[]', '-'],
            [
              'buttons',
              <>
                <code>Form</code>表单的按钮组，提交按钮需要设置
                <code>type = &quot;submit&quot;</code>
              </>,
              'React.ReactNode',
              '-'
            ],
            [
              'onSubmit',
              <>
                <code>Form</code>提交时的回调
              </>,
              'React.FormEventHandler<HTMLFormElement>',
              '-'
            ],
            [
              'onChange',
              <>
                <code>Form</code>中输入框变化时的回调
              </>,
              '(formValue: FormValue) => void',
              '-'
            ]
          ]}
        />
        <h3>Field</h3>
        <p>
          <code>Field</code>是输入框的检测规程，其类型如下：
        </p>
        <Api
          data={[
            [
              'type',
              '检测的类型',
              'required | minLength | maxLength | pattern | custom',
              '-'
            ],
            [
              'match',
              '具体的检测规则',
              'boolean | number | number | RegExp | (value: string) => boolean | Promise<boolean>',
              '-'
            ],
            [
              'messageType',
              '当检测结果为假时提示消息的类型',
              ' success | warning | error',
              'error'
            ],
            ['message', '当检测结果为假时提示消息的内容', 'string', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default SwitchExample;
