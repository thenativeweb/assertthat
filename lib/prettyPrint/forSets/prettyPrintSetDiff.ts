import chalk from 'chalk';
import { diffString } from '../utils/diffString';
import { prettyPrint } from '../typeAware/prettyPrint';
import { SetDiff } from '../../diffs/forSets/SetDiff';

const prettyPrintSetDiff = function (diff: SetDiff, depth = 0): string {
  const content = [];

  for (const value of diff.equal) {
    const prettyValueLines = prettyPrint(value, depth + 1).
      split('\n').
      map(
        (line): string => `  ${line}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const value of diff.omissions) {
    const prettyValueLines = prettyPrint(value, depth + 1).
      split('\n').
      map(
        (line, index): string => index === 0 ? chalk.red(`- ${line}`) : `  ${chalk.green(line)}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const value of diff.additions) {
    const prettyValueLines = prettyPrint(value, depth + 1).
      split('\n').
      map(
        (line, index): string => index === 0 ? chalk.green(`+ ${line}`) : `  ${chalk.red(line)}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }

  if (content.length === 0) {
    return `Set([])`;
  }

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

  if (depth >= 2) {
    return `Set([ ${content.join(' ')} ])`;
  }

  return diffString`
    Set([
      ${content}
    ])
  `;
};

export {
  prettyPrintSetDiff
};
