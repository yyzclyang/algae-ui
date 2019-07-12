import React from 'react';
import { Layout, Header, Content, Footer, Side } from 'algae-ui/lib';

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
