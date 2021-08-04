import { BenchmarkCase } from '../types/BenchmarkCase';
import { measureTime } from 'measure-time';

const runAveragedBenchmark = async function ({ benchmark, scale, howManyTimes }: {
  benchmark: BenchmarkCase;
  scale: number;
  howManyTimes: number;
}): Promise<{ averageTime: number; deviation: number }> {
  const results = [];

  for (let i = 0; i < howManyTimes; i++) {
    // eslint-disable-next-line no-console
    console.log(`    Average run ${i}`);

    await benchmark.setup?.({ scale });

    const getMeasuredTime = measureTime();

    await benchmark.benchmark({ scale });

    const times = getMeasuredTime();

    await benchmark.teardown?.({ scale });

    results.push(times.millisecondsTotal);
  }

  const averageTime = results.reduce((acc, next): number => acc + next, 0) / results.length,
        deviation = results.reduce((maxDeviation, next): number => {
          const currentDeviation = (next / averageTime) - 1;

          if (Math.abs(currentDeviation) > Math.abs(maxDeviation)) {
            return currentDeviation;
          }

          return maxDeviation;
        }, 0);

  return {
    averageTime,
    deviation
  };
};

export {
  runAveragedBenchmark
};
