import { BenchmarkFunction } from '../types/BenchmarkFunction';
import { BenchmarkSetup } from '../types/BenchmarkSetup';
import { compare } from '../../lib/comparisons/typeAware/compare';
import { randomObject } from 'zufall';

const name = 'compare large arrays';

let testArray: any[] = [];

// eslint-disable-next-line no-redeclare
const setup: BenchmarkSetup = function ({ scale }): void {
  testArray = Array.from({ length: scale });

  for (let i = 0; i < scale; i++) {
    testArray[i] = randomObject();
  }
};

const benchmark: BenchmarkFunction = async function (): Promise<void> {
  compare(testArray, testArray);
};

const scales = [
  100,
  200,
  300,
  400,
  500,
  600,
  1_000
];
const unit = 'array items';

export {
  benchmark,
  name,
  scales,
  setup,
  unit
};
