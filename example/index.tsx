import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import './index.scss';
import { Layout, Content, Footer, Header, Side, Icon } from 'ROOT/src';

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

const logo = require('./img/logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Algae UI</span>
        </div>
        <div className="github">
          <a href="https://github.com/YyzclYang/algae-ui" target="_blank">
            <Icon type="github" className="github-icon" />
          </a>
        </div>
      </Header>
      <Layout className="site-main">
        <Side className="site-side">
          <ul>
            <li>
              <NavLink to="/introduction">Algae-UI of React</NavLink>
            </li>
            <li>
              <NavLink to="/get-start">开始使用</NavLink>
            </li>
          </ul>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/modal">Modal</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">Scroll</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/affix">Affix</NavLink>
            </li>
            <li>
              <NavLink to="/switch">Switch</NavLink>
            </li>
          </ul>
        </Side>
        <Content className="side-content">
          <Redirect to="/introduction" />
          <Route path="/introduction" component={Introduction} />
          <Route path="/get-start" component={GetStart} />
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/modal" component={ModalExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/scroll" component={ScrollExample} />
          <Route path="/input" component={InputExample} />
          <Route path="/affix" component={AffixExample} />
          <Route path="/switch" component={SwitchExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; YyzclYang</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
