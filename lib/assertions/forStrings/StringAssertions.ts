interface StringAssertions {
  containing: (expected: string) => void;
  startingWith: (expected: string) => void;
  endingWith: (expected: string) => void;
  containingAllOf: (expected: Iterable<string>) => void;
  containingAnyOf: (expected: Iterable<string>) => void;
  empty: () => void;
  matching: (expected: RegExp) => void;
}

export type {
  StringAssertions
};
