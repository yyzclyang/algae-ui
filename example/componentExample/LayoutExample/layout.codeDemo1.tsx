import React from 'react';
import { Layout, Header, Content, Footer } from 'algae-ui/lib';

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
