const isNonEmptyArray = (value: any) => {
  return value && value instanceof Array && value.length > 0;
};

export default isNonEmptyArray;
