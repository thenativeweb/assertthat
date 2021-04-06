const sameJsonAs = function (actual: any, expected: any): boolean {
  const actualJsonRepresentation = JSON.stringify(actual);
  const expectedJsonRepresentation = JSON.stringify(expected);

  return actualJsonRepresentation === expectedJsonRepresentation;
};

export {
  sameJsonAs
};
