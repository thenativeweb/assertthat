interface ResultAssertions {
  aValue: () => void;
  anError: () => void;
  anErrorWithMessage: (expected: string) => void;
}

export type {
  ResultAssertions
};
