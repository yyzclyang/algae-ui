import { FormValue, Field, Rule, MessageType } from '../form/form';

interface ValidateMessage {
  type: MessageType;
  message: string;
}

export interface ValidateMessages {
  [key: string]: ValidateMessage[];
}

const Validator = (formValue: FormValue, fields: Field[]): ValidateMessages =>
  fields
    .map((field) => ({
      [field.type]: field.rules
        ? field.rules
            .map((rule) => ValidateMethod(formValue[field.type], rule))
            .filter((validateMessage) => validateMessage.message)
        : []
    }))
    .reduce(
      (validateMessages, validateMessage) => ({
        ...validateMessages,
        ...validateMessage
      }),
      {}
    );

const ValidateMethod = (data: any, rule: Rule): ValidateMessage => {
  switch (rule.type) {
    case 'required': {
      return {
        type: rule.messageType || 'error',
        message: !data ? rule.message : ''
      };
    }
    case 'minLength': {
      return {
        type: rule.messageType || 'error',
        message: data.length < rule.match ? rule.message : ''
      };
    }
    case 'maxLength': {
      return {
        type: rule.messageType || 'error',
        message: data.length > rule.match ? rule.message : ''
      };
    }
    case 'pattern': {
      return {
        type: rule.messageType || 'error',
        message: !(rule.match as RegExp).test(data) ? rule.message : ''
      };
    }
    case 'custom': {
      return {
        type: rule.messageType || 'error',
        message: !(rule.match as (value: string) => boolean)(data)
          ? rule.message
          : ''
      };
    }
    default:
      return { type: rule.messageType || 'error', message: '' };
  }
};

export default Validator;
