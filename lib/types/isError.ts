const isError = function (value: any): value is Error {
  return typeof value === 'object' && value instanceof Error;
};

export {
  isError
};
