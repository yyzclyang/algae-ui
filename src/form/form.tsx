import React, { useState } from 'react';
import { Input } from 'ROOT/src';
import { scopedClassMaker, classNames } from 'ROOT/src/utils';
import Validator, { ErrorMessages } from './validator';
import './style/form.scss';

const sc = scopedClassMaker('algae-ui-form');

type RuleType = 'required' | 'minLength' | 'maxLength' | 'pattern';

interface MatchTest {
  required: boolean;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
}

export interface Rule {
  type: RuleType;
  match: MatchTest[RuleType];
  message: string;
}

export interface Field {
  type: string;
  label: string;
  input: { type: string };
  rules?: Rule[];
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

  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setErrorMessages(Validator(value, fields));
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
    <form onSubmit={onSubmit} className={classNames(sc())}>
      <table>
        <tbody>
          {fields.map((field) => (
            <tr key={field.type} className={classNames(sc('row'))}>
              <td>
                <span className={classNames(sc('row-label'))}>
                  {field.label}
                </span>
              </td>
              <td>
                <Input
                  className={classNames(sc('row-input'))}
                  type={field.input.type}
                  value={value[field.type]}
                  onChange={onFormChange.bind(null, field.type)}
                />
                {errorMessages[field.type] && errorMessages[field.type][0]}
              </td>
            </tr>
          ))}
          <tr className={classNames(sc('row'))}>
            <td />
            <td>{buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
