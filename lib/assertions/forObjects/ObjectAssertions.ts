interface ObjectAssertions {
  atLeast: (expected: object) => void;
  atMost: (expected: object) => void;
  instanceOf: (expected: (...args: any[]) => any) => void;
  empty: () => void;
}

export type {
  ObjectAssertions
};
