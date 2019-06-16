import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import IconExample from './components/IconExample';
import ButtonExample from './components/ButtonExample';

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
          </ul>
        </aside>
        <div>
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
        </div>
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
