const isArray = function (value: any): value is any[] {
  return Array.isArray(value);
};

export {
  isArray
};
