import React from 'react';
import * as renderer from 'react-test-renderer';
import Progress from '../index';

describe('Progress', () => {
  it('渲染普通 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress percent={30} />
          <Progress percent={20} status="fail" />
          <Progress percent={70} status="success" />
          <Progress percent={50} showInfo={false} />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染圆形 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress percent={30} type="circle" />
          <Progress percent={30} type="circle" status="success" />
          <Progress percent={30} type="circle" status="fail" />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染仪表盘类型的 Progress', () => {
    const component = renderer
      .create(<Progress percent={30} type="dashboard" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染自定义文案的 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress percent={30} value="自定义" />
          <Progress percent={50} type="circle" value="自定义" />
          <Progress percent={50} type="dashboard" value="自定义" />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染方形边缘 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress percent={30} strokeLinecap="square" />
          <Progress percent={50} type="circle" strokeLinecap="square" />
          <Progress percent={50} type="dashboard" strokeLinecap="square" />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染百分比错误的 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress percent={-30} />
          <Progress percent={130} />
          <Progress percent={-50} type="circle" />
          <Progress percent={150} type="circle" />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('渲染自定义颜色 Progress', () => {
    const component = renderer
      .create(
        <>
          <Progress
            percent={30}
            backgroundColor="#cccccc"
            strokeColor="#ffa30a"
          />
          <Progress
            percent={50}
            type="circle"
            backgroundColor="#cccccc"
            strokeColor="#ffa30a"
          />
        </>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
