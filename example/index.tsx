import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './base.scss';

import IconExample from './components/IconExample';
import ButtonExample from './components/ButtonExample';
import ModalExample from './components/ModalExample';
import LayoutExample from './components/LayoutExample';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">algae-ui</div>
      </header>
      <main>
        <aside>
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
        </aside>
        <div className="router-page">
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/modal" component={ModalExample} />
          <Route path="/layout" component={LayoutExample} />
        </div>
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
