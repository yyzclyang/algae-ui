import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.scss';
import Layout, { Content, Footer, Header, Side } from '../src/layout';

import IconExample from './components/IconExample';
import ButtonExample from './components/ButtonExample';
import ModalExample from './components/ModalExample';
import LayoutExample from './components/LayoutExample';

// tslint:disable-next-line:no-var-requires
const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="page">
      <Header className="header">
        <div className="logo">
          <img src={logo}  alt="logo" />
          <span>Algae UI</span>
        </div>
      </Header>
      <Layout>
        <Side>
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
          </ul>
        </Side>
        <Content className="router-page">
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/modal" component={ModalExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
