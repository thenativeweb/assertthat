/* eslint-disable no-console */
import { benchmarks } from './benchmarks';
import { calculateLinearRegressionDeviations } from './util/calculateLinearRegressionDeviations';
import { formatResults } from './util/formatResults';
import fs from 'fs';
import path from 'path';
import { runAveragedBenchmark } from './util/runAveragedBenchmark';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
  console.log('Running benchmarks.');

  let benchmarkOutput = 'Benchmarks Results\n\n';

  try {
    for (const benchmark of benchmarks) {
      console.log(`Running benchmark '${benchmark.name}'`);
      benchmarkOutput += `Benchmark ${benchmark.name}:\n`;

      const results = [];

      for (const scale of benchmark.scales) {
        console.log(`  Scale ${scale}`);
        const { averageTime, deviation } = await runAveragedBenchmark({
          benchmark,
          scale,
          howManyTimes: 20
        });

        results.push({
          scale,
          unit: benchmark.unit,
          time: averageTime,
          deviation
        });
      }

      const resultsWithDeviations = calculateLinearRegressionDeviations({ benchmarkResults: results });
      const formattedResults = formatResults({ results: resultsWithDeviations, precision: 2 });

      console.log(formattedResults);
      benchmarkOutput += formattedResults;
      benchmarkOutput += '\n';
    }
  } catch (ex: unknown) {
    console.log('An exception occured during benchmarks.', { ex });
  }

  await fs.promises.writeFile(path.join(__dirname, '..', 'benchmark_output.txt'), benchmarkOutput, 'utf-8');
})();
/* eslint-enable no-console */
