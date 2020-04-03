import React from 'react';
import './index.scss';

import '../../img/logo.svg';
import '../../img/react.svg';

const Introduction: React.FunctionComponent = () => (
  <div className="introduction-page">
    <section className="introduction">
      <h1>Algae-UI of React</h1>
      <p>
        <code>algae-ui</code>是为 React 制作的一套 UI 组件库，主要用来学习。
      </p>
      <div className="logo">
        <svg>
          <use xlinkHref="#logo" />
        </svg>
        <span>&</span>
        <svg>
          <use xlinkHref="#react" />
        </svg>
      </div>
    </section>
    <section>
      <h2>支持环境</h2>
      <p>
        由于本库采用了 React 的新特性
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_Blank">
          Hook
        </a>
        ， 所以请保证 React 的版本为 16.8 及以上。
      </p>
    </section>
    <section>
      <h2>使用 TypeScript</h2>
      <p>
        <code>algae-ui</code>使用
        <a href="https://www.typescriptlang.org/" target="_Blank">
          TypeScript
        </a>
        编写。
        <a href="https://www.typescriptlang.org/" target="_Blank">
          TypeScript
        </a>
        带来了可选的静态类型检查以及最新的 ECMAScript
        特性，有效增强代码的健壮性。
      </p>
    </section>
    <section>
      <h2>依赖</h2>
      <p>
        <code>algae-ui</code>只依赖 React、ReactDOM 两个核心库以及使用 PropTypes
        进行类型检查。
      </p>
    </section>
  </div>
);

export default Introduction;
