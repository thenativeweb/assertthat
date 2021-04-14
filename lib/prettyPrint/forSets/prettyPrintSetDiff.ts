import chalk from 'chalk';
import { prettyPrint } from '../typeAware/prettyPrint';
import { SetDiff } from '../../diffs/forSets/SetDiff';
import { source } from 'common-tags';

const prettyPrintSetDiff = function (diff: SetDiff, depth = 0): string {
  const content = [];

  for (const value of diff.equal) {
    const prettyValueLines = prettyPrint(value, depth + 1).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const value of diff.omissions) {
    const prettyValueLines = chalk.red(prettyPrint(value, depth + 1)).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const value of diff.additions) {
    const prettyValueLines = chalk.green(prettyPrint(value, depth + 1)).split('\n');

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

  return source`
    Set([
      ${content}
    ])
  `;
};

export {
  prettyPrintSetDiff
};
