import { BenchmarkFunction } from '../types/BenchmarkFunction';
import { BenchmarkSetup } from '../types/BenchmarkSetup';
import { compare } from '../../lib/comparisons/typeAware/compare';
import { randomObjectWithDepth } from 'zufall';

const name = 'compare large objects';

let testObjectLeft: any = {};
let testObjectRight: any = {};

const getNewTestObject = function ({ scale }: { scale: number }): any {
  return randomObjectWithDepth(3, Math.round(scale ** (1 / 3)));
};

// eslint-disable-next-line no-redeclare
const setup: BenchmarkSetup = function ({ scale }): void {
  testObjectLeft = getNewTestObject({ scale });
  testObjectRight = getNewTestObject({ scale });
};

const benchmark: BenchmarkFunction = async function (): Promise<void> {
  compare(testObjectLeft, testObjectRight);
};

const scales = [ 100, 200, 300, 400, 500, 600, 1_000 ];
const unit = 'object keys';

export {
  benchmark,
  name,
  scales,
  setup,
  unit
};
