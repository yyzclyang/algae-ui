import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Form from '../index';
import { Button } from '../../index';

const getForm = (onChange, onSubmit) => {
  const formData = {
    username: ''
  };
  const fields = [
    {
      type: 'username',
      label: '用户名',
      input: { type: 'text' },
      rules: [
        {
          type: 'required',
          match: true,
          message: '不能为空'
        }
      ]
    }
  ];
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <Button full type="submit" buttonType="primary">
          提交
        </Button>
      }
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

describe('Form', () => {
  it('渲染一个 Form', () => {
    const component = TestRenderer.create(
      getForm(
        () => {},
        () => {}
      )
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Form 输入时触发 onChange，点击提交时触发 onSubmit', (done) => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    const form = mount(getForm(onChange, onSubmit));
    form.find('input').simulate('change');
    expect(onChange).toBeCalled();
    form.find('button').simulate('click');
    setTimeout(() => {
      expect(onChange).toBeCalled();
      done();
    }, 10);
  });
});
