import React, { useState } from 'react';
import { Button, Form, FormValue, Field } from 'algae-ui';

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState<Field[]>([
    {
      type: 'username',
      label: '用户名',
      input: { type: 'text' }
    },
    {
      type: 'password',
      label: '密码',
      input: { type: 'password' }
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
