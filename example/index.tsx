import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.scss';
import Layout, { Content, Footer, Header, Side } from '../src/layout';

import IconExample from './componentExample/IconExample';
import ButtonExample from './componentExample/ButtonExample';
import ModalExample from './componentExample/ModalExample';
import LayoutExample from './componentExample/LayoutExample';

const logo = require('./img/logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Algae UI</span>
        </div>
      </Header>
      <Layout className="site-main">
        <Side className="site-side">
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
        <Content className="side-content">
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/modal" component={ModalExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; YyzclYang</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
