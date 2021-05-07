// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = function (value: any): value is Function {
  return typeof value === 'function';
};

export {
  isFunction
};
