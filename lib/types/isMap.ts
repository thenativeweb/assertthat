const isMap = function (value: any): value is Map<any, any> {
  return value instanceof Map;
};

export {
  isMap
};
