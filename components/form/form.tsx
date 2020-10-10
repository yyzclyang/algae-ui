import React, { useState } from 'react';
import Input, { InputProps } from '../input';
import {
  scopedClassMaker,
  classNames,
  isNonEmptyArray,
  validator,
  ValidateFormMessageGroup
} from '../utils';

const sc = scopedClassMaker('algae-ui-form');

export type FormMessageType = 'success' | 'warning' | 'error';
export type Rule = (
  | { type: 'required'; match: boolean }
  | { type: 'minLength' | 'maxLength'; match: number }
  | { type: 'pattern'; match: RegExp }
  | {
      type: 'custom';
      match: (value: string) => boolean | Promise<boolean>;
    }
) & {
  messageType?: FormMessageType;
  message: string;
};
export interface Field {
  type: string;
  label: string;
  input: InputProps;
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

  const [validateMessageGroup, setValidateMessageGroup] = useState<
    ValidateFormMessageGroup
  >({});

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    validator(value, fields).then(setValidateMessageGroup);
    props.onSubmit(e);
  };

  const onFormChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({ ...value, [type]: e.currentTarget.value });
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
                  isNonEmptyArray(validateMessageGroup[field.type])
                    ? sc(
                        'row-validate-' +
                          validateMessageGroup[field.type][0].type
                      )
                    : ''
                )}
                data-validate={
                  isNonEmptyArray(validateMessageGroup[field.type])
                    ? validateMessageGroup[field.type][0].message
                    : ''
                }
              >
                <Input
                  {...field.input}
                  className={classNames(sc('row-input'))}
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

Form.displayName = 'Form';

export default Form;
