import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Layout, Content, Footer, Header, Side, Icon, Scroll } from 'algae-ui';
import { GetStart, Introduction } from './pages';
import './app.scss';
import './img/logo.svg';
import './img/logo_text.svg';

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
            <li>
              <div className="component-group component-list">通用</div>
              <NavLink to="/button">Button 按钮</NavLink>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <div className="component-group component-list">布局</div>
              <NavLink to="/layout">Layout 布局</NavLink>
              <NavLink to="/scroll">Scroll 滚动条</NavLink>
            </li>
            <li>
              <div className="component-group component-list">导航</div>
              <NavLink to="/affix">Affix 固钉</NavLink>
              <NavLink to="/pagination">Pagination 分页</NavLink>
              <NavLink to="/steps">Steps 步骤条</NavLink>
            </li>
            <li>
              <div className="component-group component-list">数据录入</div>
              <NavLink to="/checkbox">Checkbox 多选框</NavLink>
              <NavLink to="/form">Form 表单</NavLink>
              <NavLink to="/input">Input 输入框</NavLink>
              <NavLink to="/radio">Radio 单选框</NavLink>
              <NavLink to="/rate">Rate 评分</NavLink>
              <NavLink to="/progress">Progress 进度条</NavLink>
              <NavLink to="/switch">Switch 开关</NavLink>
            </li>
            <li>
              <div className="component-group component-list">数据展示</div>
              <NavLink to="/avatar">Avatar 头像</NavLink>
              <NavLink to="/badge">Badge 徽标数</NavLink>
              <NavLink to="/tree">Tree 树形控件</NavLink>
            </li>
            <li>
              <div className="component-group component-list">反馈</div>
              <NavLink to="/message">Message 消息</NavLink>
              <NavLink to="/modal">Modal 对话框</NavLink>
            </li>
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
