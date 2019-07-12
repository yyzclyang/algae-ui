import React from 'react';
import { Layout, Header, Content, Footer, Side } from 'ROOT/src';

export default () => {
  return (
    <div className="layout-list">
      <Layout>
        <Header>header</Header>
        <Layout>
          <Side>side</Side>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
};
