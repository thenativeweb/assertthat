import { BenchmarkCase } from './types/BenchmarkCase';
import * as compareLargeArrays from './cases/compareLargeArrays';
import * as compareLargeObjects from './cases/compareLargeObjects';
import * as compareLongStrings from './cases/compareLongStrings';

const benchmarks: BenchmarkCase[] = [
  compareLargeArrays,
  compareLargeObjects,
  compareLongStrings
];

export {
  benchmarks
};
