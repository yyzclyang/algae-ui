import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.scss';
import { Layout, Content, Footer, Header, Side, Icon, Scroll } from 'ROOT/src';

import Introduction from './pages/Introduction';
import GetStart from './pages/GetStart';

import IconExample from './componentExample/IconExample';
import ButtonExample from './componentExample/ButtonExample';
import ModalExample from './componentExample/ModalExample';
import LayoutExample from './componentExample/LayoutExample';
import ScrollExample from './componentExample/ScrollExample';
import InputExample from './componentExample/InputExample';
import AffixExample from './componentExample/AffixExample';
import SwitchExample from './componentExample/SwitchExample';
import RadioExample from './componentExample/RadioExample';
import CheckboxExample from './componentExample/CheckboxExample';
import RateExample from './componentExample/RateExample';
import MessageExample from './componentExample/MessageExample';
import FormExample from './componentExample/FormExample';

import './img/logo.svg';
import './img/logo_text.svg';

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Side className="site-side">
        <div className="logo">
          <svg className="logo_img">
            <use xlinkHref="#logo" />
          </svg>
          <svg className="logo_text">
            <use xlinkHref="#logo_text" />
          </svg>
        </div>
        <Scroll className="side-content" rightGap={0}>
          <ul>
            <li>
              <NavLink to="/introduction">Algae-UI of React</NavLink>
            </li>
            <li>
              <NavLink to="/get-start">开始使用</NavLink>
            </li>
            <li>
              <div className="component-list component-list-switch">组件</div>
            </li>
          </ul>
          <ul className="component-list-ul">
            <li>
              <div className="component-group component-list">通用</div>
              <NavLink to="/icon">Icon 图标</NavLink>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <div className="component-group component-list">布局</div>
              <NavLink to="/layout">Layout 布局</NavLink>
              <NavLink to="/scroll">Scroll 滚动条</NavLink>
            </li>
            <li>
              <div className="component-group component-list">导航</div>
              <NavLink to="/affix">Affix 固钉</NavLink>
            </li>
            <li>
              <div className="component-group component-list">数据录入</div>
              <NavLink to="/input">Input 输入框</NavLink>
              <NavLink to="/switch">Switch 开关</NavLink>
              <NavLink to="/radio">Radio 单选框</NavLink>
              <NavLink to="/checkbox">Checkbox 多选框</NavLink>
              <NavLink to="/rate">Rate 评分</NavLink>
              <NavLink to="/form">Form 表单</NavLink>
            </li>
            <li>
              <div className="component-group component-list">反馈</div>
              <NavLink to="/modal">Modal 对话框</NavLink>
              <NavLink to="/message">Message 消息</NavLink>
            </li>
          </ul>
        </Scroll>
      </Side>
      <Layout className="site-main">
        <Header className="main-header">
          <div className="github">
            <a href="https://github.com/YyzclYang/algae-ui" target="_blank">
              <Icon type="github" className="github-icon" />
            </a>
          </div>
        </Header>
        <Content className="main-content">
          <Route path="/introduction" component={Introduction} />
          <Route path="/get-start" component={GetStart} />
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/scroll" component={ScrollExample} />
          <Route path="/affix" component={AffixExample} />
          <Route path="/input" component={InputExample} />
          <Route path="/modal" component={ModalExample} />
          <Route path="/switch" component={SwitchExample} />
          <Route path="/radio" component={RadioExample} />
          <Route path="/checkbox" component={CheckboxExample} />
          <Route path="/rate" component={RateExample} />
          <Route path="/message" component={MessageExample} />
          <Route path="/form" component={FormExample} />
        </Content>
        <Footer className="main-footer">&copy; YyzclYang</Footer>
      </Layout>
    </Layout>
  </Router>,
  document.getElementById('root')
);
