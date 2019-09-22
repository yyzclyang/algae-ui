import React, { useState } from 'react';
import { Input } from 'ROOT/src';
import { scopedClassMaker, classNames } from 'ROOT/src/utils';
import Validator, { ValidateMessages } from './validator';
import './style/form.scss';

const sc = scopedClassMaker('algae-ui-form');

type RuleType = 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';

export type MessageType = 'success' | 'warning' | 'error';

interface MatchTest {
  required: boolean;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
  custom: (value: string) => boolean;
}

export interface Rule {
  type: RuleType;
  match: MatchTest[RuleType];
  messageType?: MessageType;
  message: string;
}

export interface Field {
  type: string;
  label: string;
  input: { type: string };
  rules?: Rule[];
}

export interface FormValue {
  [key: string]: string;
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

  const [validateMessages, setValidateMessages] = useState<ValidateMessages>(
    {}
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setValidateMessages(Validator(value, fields));
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
      <table className={classNames(sc('table'))}>
        <tbody>
          {fields.map((field) => (
            <tr key={field.type} className={classNames(sc('row'))}>
              <td>
                <span className={classNames(sc('row-label'))}>
                  {field.label}
                </span>
              </td>
              <td
                className={classNames(
                  sc('row-content'),
                  validateMessages[field.type] &&
                    validateMessages[field.type].length > 0
                    ? sc('row-validate-' + validateMessages[field.type][0].type)
                    : ''
                )}
                data-error={
                  validateMessages[field.type] &&
                  validateMessages[field.type].length > 0
                    ? validateMessages[field.type][0].message
                    : ''
                }
              >
                <Input
                  className={classNames(sc('row-input'))}
                  type={field.input.type}
                  value={value[field.type]}
                  onChange={onFormChange.bind(null, field.type)}
                />
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
