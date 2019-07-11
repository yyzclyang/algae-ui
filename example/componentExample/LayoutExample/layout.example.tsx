import React from 'react';
import Layout, { Header, Content, Footer, Side } from 'ROOT/src/layout';
import './style.scss';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Example1</h2>
      <div className="example">
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <h2>Example2</h2>
      <div className="example">
        <Layout>
          <Header>header</Header>
          <Layout>
            <Side>side</Side>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <h2>Example3</h2>
      <div className="example">
        <Layout>
          <Side>side</Side>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default LayoutExample;
