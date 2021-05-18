import { BenchmarkResult } from '../types/BenchmarkResult';
import { BenchmarkResultWithRegressionDeviation } from '../types/BenchmarkResultWithRegressionDeviation';

const calculateLinearRegressionDeviations = function ({ benchmarkResults }: {
  benchmarkResults: BenchmarkResult[];
}): BenchmarkResultWithRegressionDeviation[] {
  return benchmarkResults.map((result): BenchmarkResultWithRegressionDeviation => ({
    ...result,
    regressionDeviation: (result.time / (result.scale * (benchmarkResults[0].time / benchmarkResults[0].scale))) - 1
  }));
};

export {
  calculateLinearRegressionDeviations
};
