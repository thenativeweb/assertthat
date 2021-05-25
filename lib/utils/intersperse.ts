const intersperse = function <TContent>(array: TContent[], delimiter: TContent): TContent[] {
  return array.flatMap((item): TContent[] => [ delimiter, item ]).slice(1);
};

export {
  intersperse
};
