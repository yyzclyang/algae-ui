const scopedClassMaker = (prefix: string) => {
  return (suffix?: string) => {
    return [prefix.trim(), valueTrim(suffix)].filter(Boolean).join('-');
  };
};

const valueTrim = (value: any) => {
  if (typeof value === 'string') {
    return value.trim();
  } else {
    return value;
  }
};

export default scopedClassMaker;
