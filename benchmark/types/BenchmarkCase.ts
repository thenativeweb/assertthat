import { BenchmarkFunction } from './BenchmarkFunction';
import { BenchmarkSetup } from './BenchmarkSetup';
import { BenchmarkTeardown } from './BenchmarkTeardown';

interface BenchmarkCase {
  name: string;
  unit: string;
  benchmark: BenchmarkFunction;
  scales: number[];
  setup?: BenchmarkSetup;
  teardown?: BenchmarkTeardown;
}

export type {
  BenchmarkCase
};
