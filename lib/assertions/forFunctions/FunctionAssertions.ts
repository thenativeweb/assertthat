interface FunctionAssertions {
  throwing: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => void;
  throwingAsync: <TError extends Error = Error> (expected?: string | RegExp | ((ex: TError) => boolean)) => Promise<void>;
}

export type {
  FunctionAssertions
};
