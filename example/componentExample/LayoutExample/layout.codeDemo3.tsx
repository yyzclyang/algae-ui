import React from 'react';
import { Layout, Header, Content, Footer, Side } from 'algae-ui/lib';

export default () => {
  return (
    <div className="layout-list">
      <Layout>
        <Side>side</Side>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
