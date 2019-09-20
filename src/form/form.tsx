import React from 'react';
import './style/form.scss';

interface Field {
  type: string;
  label: string;
  input: { type: string };
}

export interface FormValue {
  [key: string]: any;
}

interface FormProps {
  value: FormValue;
  fields: Field[];
  buttons: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (formValue: FormValue) => void;
}

const Form: React.FunctionComponent<FormProps> = (props: FormProps) => {
  const { value, fields, buttons, onChange } = props;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onFormChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormValue = { ...value, [type]: e.currentTarget.value };
    onChange(newFormValue);
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.type}>
          {field.label}
          <input
            type={field.input.type}
            value={value[field.type]}
            onChange={onFormChange.bind(null, field.type)}
          />
        </div>
      ))}
      <div>{buttons}</div>
    </form>
  );
};

export default Form;
