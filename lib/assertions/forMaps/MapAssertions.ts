interface MapAssertions<TKey, TValue> {
  atLeast: (expected: Map<TKey, TValue>) => void;
  atMost: (expected: Map<TKey, TValue>) => void;
  empty: () => void;
}

export type {
  MapAssertions
};
