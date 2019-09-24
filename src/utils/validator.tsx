import { FormValue, Field, Rule, MessageType } from '../form/form';

interface ValidateMessage {
  type: MessageType;
  message: string;
}

export interface ValidateMessageGroup {
  [key: string]: ValidateMessage[];
}

const validator = (
  formValue: FormValue,
  fields: Field[]
): Promise<ValidateMessageGroup> =>
  Promise.all(
    fields.map((field) =>
      Promise.all(
        [
          Promise.resolve({ type: 'success', message: field.type }) as Promise<
            ValidateMessage
          >
        ].concat(
          field.rules
            ? field.rules.map((rule) =>
                validateMethod(formValue[field.type], rule)
              )
            : []
        )
      )
    )
  ).then((allValidateMessages) => {
    const result: ValidateMessageGroup = {};
    allValidateMessages.map((validateMessages) => {
      result[validateMessages[0].message] = validateMessages
        .slice(1)
        .filter((validateMessage) => validateMessage.message);
    });
    return result;
  });

const validateMethod = (data: any, rule: Rule): Promise<ValidateMessage> => {
  switch (rule.type) {
    case 'required': {
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: !data ? rule.message : ''
      });
    }
    case 'minLength': {
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: data.length < rule.match ? rule.message : ''
      });
    }
    case 'maxLength': {
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: data.length > rule.match ? rule.message : ''
      });
    }
    case 'pattern': {
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: !(rule.match as RegExp).test(data) ? rule.message : ''
      });
    }
    case 'custom': {
      const matchResult = (rule.match as (
        value: string
      ) => string | Promise<boolean>)(data);

      return matchResult instanceof Promise
        ? matchResult.then(
            () => {
              return { type: rule.messageType || 'error', message: '' };
            },
            () => {
              return {
                type: rule.messageType || 'error',
                message: rule.message
              };
            }
          )
        : Promise.resolve({
            type: rule.messageType || 'error',
            message: !matchResult ? rule.message : ''
          });
    }
    default:
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: ''
      });
  }
};

export default validator;
