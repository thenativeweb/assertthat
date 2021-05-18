import { BenchmarkResult } from './BenchmarkResult';

interface BenchmarkResultWithRegressionDeviation extends BenchmarkResult {
  regressionDeviation: number;
}

export type {
  BenchmarkResultWithRegressionDeviation
};
