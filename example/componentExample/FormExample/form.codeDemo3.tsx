import React, { useState } from 'react';
import { Button, Form, FormValue, Field } from 'ROOT/src';

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
          type: 'custom',
          match: (value) => {
            return !!value && value.length % 2 === 0;
          },
          messageType: 'warning',
          message: '长度必须为大于 0 的偶数'
        }
      ]
    },
    {
      type: 'password',
      label: '密码',
      input: { type: 'password' },
      rules: [
        {
          type: 'required',
          match: true,
          messageType: 'warning',
          message: '不能为空'
        }
      ]
    }
  ]);

  const onSubmit = () => {
    console.log('formData', formData);
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
