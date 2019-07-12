import React from 'react';
import { Layout, Header, Content, Footer } from 'ROOT/src';

export default () => {
  return (
    <div className="layout-list">
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
};
