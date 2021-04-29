import chalk from 'chalk';
import { InvalidOperation } from '../../errors';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { isExpectedErrorGotValueResultDiff, isExpectedValueGotErrorResultDiff, isUnequalErrorResultDiff, isUnequalValueResultDiff, ResultDiff } from '../../diffs/forResults/ResultDiff';

const prettyPrintResultDiff = function (diff: ResultDiff, depth = 0): string {
  if (isUnequalValueResultDiff(diff)) {
    return `ValueResult(${prettyPrintDiff(diff.diff, depth + 1)})`;
  }
  if (isUnequalErrorResultDiff(diff)) {
    return `ErrorResult(${prettyPrintDiff(diff.diff, depth + 1)})`;
  }
  if (isExpectedValueGotErrorResultDiff(diff)) {
    return `${chalk.red('ErrorResult(...)')}\n${chalk.green('ValueResult(...)')}`;
  }
  if (isExpectedErrorGotValueResultDiff(diff)) {
    return `${chalk.red('ValueResult(...)')}\n${chalk.green('ErrorResult(...)')}`;
  }

  throw new InvalidOperation();
};

export {
  prettyPrintResultDiff
};
