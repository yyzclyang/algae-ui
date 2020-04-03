# Algae-UI

## A Component Library for React.js。

一套用于学习的 `React` UI 库。

![GithubAction](https://github.com/yyzclyang/algae-ui/workflows/UnitTest/badge.svg)
[![Github](https://img.shields.io/github/license/YyzclYang/algae-ui.svg)](https://github.com/YyzclYang/algae-ui)
[![npm](https://img.shields.io/npm/v/algae-ui.svg)](https://www.npmjs.com/package/algae-ui)

> 本库仅供交流学习使用。

## 安装

```
$ npm i algae-ui
$ yarn add algae-ui
```

## 在项目中引入

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'algae-ui';

ReactDOM.render(
  <div>
    <Button>Default</Button>
  </div>,
  mountNode
);
```

## 特别提醒

> 本库使用了 `React` 的新特性 [`Hook`](https://reactjs.org/docs/hooks-intro.html)，请保证使用的 `React` 版本在 `v16.8` 及以上。
>
> 本库更改了一些全局默认样式，请保持一致，代码如下：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
