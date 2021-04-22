interface ArrayAssertions<TContent> {
  containing: (item: TContent) => void;
  containingAllOf: (iterable: Iterable<TContent>) => void;
  containingAnyOf: (iterable: Iterable<TContent>) => void;
  empty: () => void;
}

export type {
  ArrayAssertions
};
