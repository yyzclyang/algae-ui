const isNonEmptyArray = (value: any): boolean => {
  return Boolean(value) && value instanceof Array && value.length > 0;
};

export default isNonEmptyArray;
