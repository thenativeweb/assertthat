import { BenchmarkFunction } from '../types/BenchmarkFunction';
import { BenchmarkSetup } from '../types/BenchmarkSetup';
import { compare } from '../../lib/comparisons/typeAware/compare';

const name = 'compare large objects';

const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

let testObjectLeft: any = {};
let testObjectRight: any = {};

const getNewTestObject = function ({ scale }: { scale: number }): any {
  const newTestObject: any = {};

  for (let i = 0; i < scale; i++) {
    // For each index there is a 33% chance that it occurs in both objects
    const index = Math.floor(Math.random() * 3) + (i * 3);

    newTestObject[index] = characters[Math.floor(Math.random() * 26)];
  }

  return newTestObject;
};

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
