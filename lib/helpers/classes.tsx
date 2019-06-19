const classes = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};

export default classes;
