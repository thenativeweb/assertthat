const isBoolean = function (value: any): value is boolean {
  return typeof value === 'boolean';
};

export {
  isBoolean
};
