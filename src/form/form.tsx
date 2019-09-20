import React from 'react';
import './style/form.scss';

interface Field {
  name: string;
  label: string;
  input: { type: string };
}

interface FormProps {
  value: { [key: string]: any };
  fields: Field[];
  buttons: React.ReactNode;
  onSubmit?: React.FormEventHandler;
}

const Form: React.FunctionComponent<FormProps> = (props: FormProps) => {
  const { fields, buttons } = props;

  return (
    <form>
      {fields.map((field) => (
        <div key={field.name}>
          {field.label}
          <input type={field.input.type} />
        </div>
      ))}
      <div>{buttons}</div>
    </form>
  );
};

export default Form;
