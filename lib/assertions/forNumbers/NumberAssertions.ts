interface NumberAssertions {
  greaterThan: (expected: number) => void;
  lessThan: (expected: number) => void;
  atLeast: (expected: number) => void;
  atMost: (expected: number) => void;
  nan: () => void;
}

export type {
  NumberAssertions
};
