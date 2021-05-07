interface ObjectAssertions {
  atLeast: (expected: object) => void;
  atMost: (expected: object) => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  instanceOf: (expected: Function) => void;
  empty: () => void;
}

export type {
  ObjectAssertions
};
