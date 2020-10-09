import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Layout, Content, Footer, Header, Side, Icon, Scroll } from 'algae-ui';
import { GetStart, Introduction } from './pages';
import './app.scss';
import './img/logo.svg';
import './img/logo_text.svg';

const componentNavList = [
  {
    classification: '通用',
    componentList: [
      { component: 'Button', name: '按钮' },
      { component: 'Icon', name: '图标' }
    ]
  },
  {
    classification: '布局',
    componentList: [
      { component: 'Layout', name: '布局' },
      { component: 'Scroll', name: '滚动条' }
    ]
  },
  {
    classification: '导航',
    componentList: [
      { component: 'Affix', name: '固钉' },
      { component: 'Pagination', name: '分页' },
      { component: 'Steps', name: '步骤条' }
    ]
  },
  {
    classification: '数据录入',
    componentList: [
      { component: 'Checkbox', name: '多选框' },
      { component: 'Form', name: '表单' },
      { component: 'Input', name: '输入框' },
      { component: 'Radio', name: '单选框' },
      { component: 'Rate', name: '评分' },
      { component: 'Progress', name: '进度条' },
      { component: 'Switch', name: '开关' }
    ]
  },
  {
    classification: '数据展示',
    componentList: [
      { component: 'Avatar', name: '头像' },
      { component: 'Badge', name: '徽标数' },
      { component: 'Tree', name: '树形控件' }
    ]
  },
  {
    classification: '反馈',
    componentList: [
      { component: 'Message', name: '消息' },
      { component: 'Modal', name: '对话框' }
    ]
  }
];

const App: React.FC = () => (
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
            {componentNavList.map(({ classification, componentList }) => (
              <li key={classification}>
                <div className="component-group component-list">
                  {classification}
                </div>
                {componentList.map(({ component, name }) => (
                  <NavLink
                    key={component}
                    to={`/${component.toLocaleLowerCase()}`}
                  >
                    {`${component} ${name}`}
                  </NavLink>
                ))}
              </li>
            ))}
          </ul>
        </Scroll>
      </Side>
      <Layout className="site-main">
        <Header className="main-header">
          <div className="github">
            <a
              href="https://github.com/yyzclyang/algae-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="github" className="github-icon" />
            </a>
          </div>
        </Header>
        <Content className="main-content">
          <Route exact path="/" component={Introduction} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/get-start" component={GetStart} />
          {((rc) => {
            return rc.keys().map((path) => {
              return (
                <Route
                  key={path}
                  path={path.replace(
                    /^\.\/componentExample\/([A-Z])([a-zA-Z]*)(Example)\/index.ts$/,
                    (match, p1, p2) => '/' + p1.toLowerCase() + p2
                  )}
                  component={rc(path).default}
                />
              );
            });
          })(
            require.context(
              './',
              true,
              /^\.\/componentExample\/([a-zA-Z]+Example)\/index\.ts$/
            )
          )}
        </Content>
        <Footer className="main-footer">
          <a
            href="http://www.beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICP许可证号 粤ICP备19127738号
          </a>
        </Footer>
      </Layout>
    </Layout>
  </Router>
);

export default hot(App);
