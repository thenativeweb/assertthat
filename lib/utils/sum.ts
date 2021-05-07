const sum = function (numbers: number[]): number {
  return numbers.reduce((acc, val): number => acc + val, 0);
};

export {
  sum
};
