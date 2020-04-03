import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Step, Steps } from '../index';
import { Icon } from '../../index';

describe('Steps', () => {
  it('渲染普通 Steps', () => {
    const component = TestRenderer.create(
      <Steps current={1} status="success">
        <Step title="success step" description="This is a description" />
        <Step title="process step" subTitle="This is subTitle" />
        <Step title="waiting step" description="This is a description" />
      </Steps>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染垂直 Steps', () => {
    const component = TestRenderer.create(
      <Steps current={1} direction="vertical">
        <Step title="success step" description="This is a description" />
        <Step
          title="process step"
          subTitle="This is subTitle"
          status="process"
        />
        <Step title="process step" subTitle="This is subTitle" />
        <Step
          title="waiting step"
          subTitle="This is subTitle"
          status="waiting"
        />
        <Step
          title="fail step"
          description="This is a description"
          status="fail"
        />
      </Steps>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('渲染自定义图标的 Steps', () => {
    const component = TestRenderer.create(
      <Steps current={1} status="success">
        <Step title="edit" status="success" icon={<Icon type="edit" />} />
        <Step title="form" status="process" icon={<Icon type="form" />} />
        <Step title="delete" status="waiting" icon={<Icon type="delete" />} />
      </Steps>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Step 可设置点击事件', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const component = mount(
      <Steps current={1} status="success" onChange={fn1}>
        <Step
          className="test-step-click1"
          title="success step"
          description="This is a description"
          onClick={fn2}
        />
        <Step
          className="test-step-click2"
          title="success step"
          description="This is a description"
          onClick={fn2}
        />
        <Step
          className="test-step-click3"
          title="success step"
          description="This is a description"
          onClick={fn2}
        />
      </Steps>
    );
    component.find('div.test-step-click1').simulate('click');
    component.find('div.test-step-click2').simulate('click');
    component.find('div.test-step-click3').simulate('click');
    expect(fn1).toHaveBeenCalledTimes(3);
    expect(fn2).toHaveBeenCalledTimes(3);
  });

  it('Step 可设置 disabled 禁止点击事件', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const component = mount(
      <Steps current={1} status="success" onChange={fn1}>
        <Step
          className="test-step-click1"
          title="success step"
          description="This is a description"
          onClick={fn2}
          disabled
        />
        <Step
          className="test-step-click2"
          title="success step"
          description="This is a description"
          onClick={fn2}
          disabled
        />
        <Step
          className="test-step-click3"
          title="success step"
          description="This is a description"
          onClick={fn2}
          disabled
        />
      </Steps>
    );
    component.find('div.test-step-click1').simulate('click');
    component.find('div.test-step-click2').simulate('click');
    component.find('div.test-step-click3').simulate('click');
    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).not.toHaveBeenCalled();
  });
});
