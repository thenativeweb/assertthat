import { BenchmarkResultWithRegressionDeviation } from '../types/BenchmarkResultWithRegressionDeviation';
import { oneLine } from 'common-tags';

const formatLine = function ({
  scale, unit, time, deviation, regressionDeviation, scaleLength, unitLength, timeLength, precision
}: {
  scale: number;
  unit: string;
  time: number;
  deviation: number;
  regressionDeviation: number;
  scaleLength: number;
  unitLength: number;
  timeLength: number;
  precision: number;
}): string {
  return oneLine`
    ${String(scale).padStart(scaleLength)}${(unit ? ` ${unit}` : '').padStart(unitLength + 1)}:
    ${String(time.toFixed(2)).padStart(timeLength + 3)}ms
    [+/-${(Math.abs(deviation) * 100).toFixed(precision)}%]
    [${regressionDeviation >= 0 ? '+' : ''}${(regressionDeviation * 100).toFixed(precision)}%]
  `;
};

const formatResults = function ({ results, precision }: {
  results: BenchmarkResultWithRegressionDeviation[];
  precision: number;
}): string {
  const scaleLength = results.reduce((length, next): number => {
    const nextLength = String(next.scale).length;

    return nextLength > length ? nextLength : length;
  }, 0);
  const unitLength = results.reduce((length, next): number => {
    const nextLength = String(next.unit || '').length;

    return nextLength > length ? nextLength : length;
  }, 0);
  const timeLength = results.reduce((length, next): number => {
    const nextLength = String(Math.floor(next.time)).length;

    return nextLength > length ? nextLength : length;
  }, 0);

  let formattedOutput = '';

  for (const { scale, unit, time, deviation, regressionDeviation } of results) {
    formattedOutput += `${formatLine({
      scale,
      unit,
      time,
      deviation,
      regressionDeviation,
      scaleLength,
      unitLength,
      timeLength,
      precision
    })}\n`;
  }

  return formattedOutput;
};

export {
  formatResults
};
