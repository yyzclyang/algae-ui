import React from 'react';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Layout, { Header, Content, Footer, Side } from '../index';

describe('Layout', () => {
  it('渲染 Layout', () => {
    const component = TestRenderer.create(
      <Layout>
        <div>Layout</div>
      </Layout>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染包含 Side 的 Layout', () => {
    const component = shallow(
      <Layout>
        <Side>side</Side>
        <Content>content</Content>
      </Layout>
    );

    expect(
      component
        .find('.algae-ui-layout-hasSide')
        .hasClass('algae-ui-layout-hasSide')
    ).toEqual(true);
  });

  it('渲染 Header', () => {
    const component = TestRenderer.create(
      <Header>
        <div>Header</div>
      </Header>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染 Content', () => {
    const component = TestRenderer.create(
      <Content>
        <div>Content</div>
      </Content>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染 Footer', () => {
    const component = TestRenderer.create(
      <Footer>
        <div>Footer</div>
      </Footer>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染 Side', () => {
    const component = TestRenderer.create(
      <Side>
        <div>Side</div>
      </Side>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
