import { FormValue, Field, Rule, FormMessageType } from '../form';

interface ValidateFormMessage {
  type: FormMessageType;
  message: string;
}

export interface ValidateFormMessageGroup {
  [key: string]: ValidateFormMessage[];
}

const validator = (
  formValue: FormValue,
  fields: Field[]
): Promise<ValidateFormMessageGroup> =>
  Promise.all(
    fields.map((field) =>
      Promise.all(
        [
          Promise.resolve({ type: 'success', message: field.type }) as Promise<
            ValidateFormMessage
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
  ).then((allValidateMessages) =>
    allValidateMessages
      .map((validateMessages) => ({
        [validateMessages[0].message]: validateMessages
          .slice(1)
          .filter((validateMessage) => validateMessage.message)
      }))
      .reduce((validateMessageGroup, singleValidateMessageGroup) => ({
        ...validateMessageGroup,
        ...singleValidateMessageGroup
      }))
  );

const validateMethod = (
  data: string,
  rule: Rule
): Promise<ValidateFormMessage> => {
  switch (rule.type) {
    case 'required': {
      return Promise.resolve({
        type: rule.messageType || 'error',
        message: rule.match && !data ? rule.message : ''
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
        message: !rule.match.test(data) ? rule.message : ''
      });
    }
    case 'custom': {
      const matchResult = rule.match(data);
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
    default: {
      return Promise.resolve({
        type: 'error',
        message: '验证类型错误'
      });
    }
  }
};

export default validator;
