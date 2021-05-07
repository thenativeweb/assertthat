const isSet = function (value: any): value is Set<any> {
  return value instanceof Set;
};

export {
  isSet
};
