interface SetAssertions<TContent> {
  containing: (item: TContent) => void;
  containingAllOf: (iterable: Iterable<TContent>) => void;
  containingAnyOf: (iterable: Iterable<TContent>) => void;
  atLeast: (expected: Set<TContent>) => void;
  atMost: (expected: Set<TContent>) => void;
}

export type {
  SetAssertions
};
