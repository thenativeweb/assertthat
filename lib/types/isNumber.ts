const isNumber = function (value: any): value is number {
  return typeof value === 'number';
};

export {
  isNumber
};
