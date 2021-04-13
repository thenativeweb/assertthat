import { Diff } from '../Diff';

const unequalValueResultDiffSymbol: unique symbol = Symbol('unequal value result diff');
const unequalErrorResultDiffSymbol: unique symbol = Symbol('unequal error result diff');
const expectedValueGotErrorResultDiffSymbol: unique symbol = Symbol('expected value got error result diff');
const expectedErrorGotValueResultDiffSymbol: unique symbol = Symbol('expected error got value result diff');

const unequalValueResultDiff = function (
  parameters: Omit<UnequalValueResultDiff, 'kind'>
): UnequalValueResultDiff {
  return {
    kind: unequalValueResultDiffSymbol,
    ...parameters
  };
};

const unequalErrorResultDiff = function (
  parameters: Omit<UnequalErrorResultDiff, 'kind'>
): UnequalErrorResultDiff {
  return {
    kind: unequalErrorResultDiffSymbol,
    ...parameters
  };
};

const expectedValueGotErrorResultDiff = function (
  parameters: Omit<ExpectedValueGotErrorResultDiff, 'kind'>
): ExpectedValueGotErrorResultDiff {
  return {
    kind: expectedValueGotErrorResultDiffSymbol,
    ...parameters
  };
};

const expectedErrorGotValueResultDiff = function (
  parameters: Omit<ExpectedErrorGotValueResultDiff, 'kind'>
): ExpectedErrorGotValueResultDiff {
  return {
    kind: expectedErrorGotValueResultDiffSymbol,
    ...parameters
  };
};

interface UnequalValueResultDiff extends Diff {
  kind: typeof unequalValueResultDiffSymbol;
  diff: Diff;
}

interface UnequalErrorResultDiff extends Diff {
  kind: typeof unequalErrorResultDiffSymbol;
  diff: Diff;
}

interface ExpectedValueGotErrorResultDiff extends Diff {
  kind: typeof expectedValueGotErrorResultDiffSymbol;
}

interface ExpectedErrorGotValueResultDiff extends Diff {
  kind: typeof expectedErrorGotValueResultDiffSymbol;
}

type ResultDiff =
    UnequalValueResultDiff |
    UnequalErrorResultDiff |
    ExpectedValueGotErrorResultDiff |
    ExpectedErrorGotValueResultDiff;

const isUnequalValueResultDiff = function (
  diff: any
): diff is UnequalValueResultDiff {
  return 'kind' in diff && diff.kind === unequalValueResultDiffSymbol;
};

const isUnequalErrorResultDiff = function (
  diff: any
): diff is UnequalErrorResultDiff {
  return 'kind' in diff && diff.kind === unequalErrorResultDiffSymbol;
};

const isExpectedValueGotErrorResultDiff = function (
  diff: any
): diff is ExpectedValueGotErrorResultDiff {
  return 'kind' in diff && diff.kind === expectedValueGotErrorResultDiffSymbol;
};

const isExpectedErrorGotValueResultDiff = function (
  diff: any
): diff is ExpectedErrorGotValueResultDiff {
  return 'kind' in diff && diff.kind === expectedErrorGotValueResultDiffSymbol;
};

const isResultDiff = function (diff: any): diff is ResultDiff {
  return isUnequalValueResultDiff(diff) ||
        isUnequalErrorResultDiff(diff) ||
        isExpectedValueGotErrorResultDiff(diff) ||
        isExpectedErrorGotValueResultDiff(diff);
};

export type {
  ExpectedValueGotErrorResultDiff,
  ExpectedErrorGotValueResultDiff,
  ResultDiff,
  UnequalValueResultDiff,
  UnequalErrorResultDiff
};

export {
  expectedErrorGotValueResultDiff,
  expectedValueGotErrorResultDiff,
  isExpectedValueGotErrorResultDiff,
  isExpectedErrorGotValueResultDiff,
  isResultDiff,
  isUnequalErrorResultDiff,
  isUnequalValueResultDiff,
  unequalErrorResultDiff,
  unequalValueResultDiff
};
