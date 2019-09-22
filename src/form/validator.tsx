import { FormValue, Field, Rule } from './form';

export interface ErrorMessages {
  [key: string]: string[];
}

const Validator = (formValue: FormValue, fields: Field[]): ErrorMessages =>
  fields
    .map((field) => ({
      [field.type]: field.rules
        ? field.rules
            .map((rule) => ValidateMethod(formValue[field.type], rule))
            .filter(Boolean)
        : []
    }))
    .reduce(
      (errorMessages, errorMessage) => ({ ...errorMessages, ...errorMessage }),
      {}
    );

const ValidateMethod = (data: any, rule: Rule): string => {
  switch (rule.type) {
    case 'required': {
      return !data ? rule.message : '';
    }
    case 'minLength': {
      return data.length < rule.match ? rule.message : '';
    }
    case 'maxLength': {
      return data.length > rule.match ? rule.message : '';
    }
    case 'pattern': {
      return !(rule.match as RegExp).test(data) ? rule.message : '';
    }
    default:
      return '';
  }
};

export default Validator;
