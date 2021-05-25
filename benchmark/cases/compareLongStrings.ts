import { BenchmarkFunction } from '../types/BenchmarkFunction';
import { BenchmarkSetup } from '../types/BenchmarkSetup';
import { compare } from '../../lib/comparisons/typeAware/compare';
import { randomWord } from 'zufall';

const name = 'compare long strings';

let testStringLeft = '';
let testStringRight = '';

const getNewTestString = function ({ scale }: { scale: number }): string {
  let testString = '';

  for (let i = 0; i < scale; i++) {
    testString += randomWord();
    if (Math.random() > 0.9) {
      testString += '\n';
    }
  }

  return testString;
};

const setup: BenchmarkSetup = function ({ scale }): void {
  testStringLeft = getNewTestString({ scale });
  testStringRight = getNewTestString({ scale });
};

const benchmark: BenchmarkFunction = async function (): Promise<void> {
  compare(testStringLeft, testStringRight);
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
const unit = 'characters';

export {
  benchmark,
  name,
  scales,
  setup,
  unit
};
