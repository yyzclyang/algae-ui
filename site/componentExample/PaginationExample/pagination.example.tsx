import React from 'react';
import { CodeDemo, Api } from '../CommonDispalyComponents';
import './pagination.example.scss';

import CodeDemo1 from './pagination.codeDemo1';
const code1 = require('!!raw-loader!./pagination.codeDemo1.tsx');
import CodeDemo2 from './pagination.codeDemo2';
const code2 = require('!!raw-loader!./pagination.codeDemo2.tsx');
import CodeDemo3 from './pagination.codeDemo3';
const code3 = require('!!raw-loader!./pagination.codeDemo3.tsx');

const PaginationExample: React.FunctionComponent = () => {
  return (
    <div className="pagination-example-page">
      <section>
        <h1>Pagination 分页</h1>
        <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
      </section>
      <section>
        <h2>何时使用</h2>
        <p>当加载/渲染所有数据将花费很多时间时</p>
        <p>可切换页码浏览数据</p>
      </section>
      <section>
        <h2>代码演示</h2>
        <div className="code-demonstration">
          <div className="code-demo-column">
            <CodeDemo
              title="分页"
              content={<p>普通分页</p>}
              code={code1.default}
            >
              <CodeDemo1 />
            </CodeDemo>
            <CodeDemo
              title="受控"
              content={<p>受控分页</p>}
              code={code3.default}
            >
              <CodeDemo3 />
            </CodeDemo>
          </div>
          <div className="code-demo-column">
            <CodeDemo
              title="更多"
              content={<p>更多分页</p>}
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
            ['disable', '禁用分页', 'boolean', '-'],
            ['current', '当前分页', 'number', '-'],
            ['pageSize', '每页条数', 'number', '10'],
            ['total', '数据总条数', 'number', '-'],
            ['onChange', '页码改变时的回调', '(page) => void', '-']
          ]}
        />
      </section>
    </div>
  );
};

export default PaginationExample;
