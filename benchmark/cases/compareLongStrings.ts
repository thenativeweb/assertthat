import { BenchmarkFunction } from '../types/BenchmarkFunction';
import { BenchmarkSetup } from '../types/BenchmarkSetup';
import { compare } from '../../lib/comparisons/typeAware/compare';

const name = 'compare long strings';

let testStringLeft = '';
let testStringRight = '';

const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const getNewTestString = function ({ scale }: { scale: number }): string {
  let testString = '';

  const lineLength = Math.ceil(Math.random() * scale / 3) + 20;
  const wordLength = Math.ceil(Math.random() * lineLength / 3) + 5;

  for (let i = 0; i < scale; i++) {
    testString += characters[Math.floor(Math.random() * 26)];
    if (i % lineLength === 0) {
      testString += '\n';
    } else if (i % wordLength === 0) {
      testString += ' ';
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
