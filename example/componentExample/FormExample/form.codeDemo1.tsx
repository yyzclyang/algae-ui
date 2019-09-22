import React, { useState } from 'react';
import { Button, Form } from 'ROOT/src';
import { FormValue } from 'ROOT/src';
import { Field } from '../../../src/form/form';

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState<Field[]>([
    {
      type: 'username',
      label: '用户名',
      input: { type: 'text' },
      rules: [
        {
          type: 'required',
          match: true,
          messageType: 'warning',
          message: '不能为空'
        },
        {
          type: 'minLength',
          match: 6,
          message: '不能少于 6 个字'
        }
      ]
    },
    {
      type: 'password',
      label: '密码',
      input: { type: 'password' },
      rules: [
        {
          type: 'custom',
          match: (value) => {
            return value.length > 5;
          },
          messageType: 'success',
          message: '不能为空'
        },
        {
          type: 'minLength',
          match: 6,
          message: '不能少于 6 个字'
        }
      ]
    }
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  const onChange = (newValue: FormValue) => {
    setFormData(newValue);
  };

  return (
    <div className="form-example-list">
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
    </div>
  );
};
