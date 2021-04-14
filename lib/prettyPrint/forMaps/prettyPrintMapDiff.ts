import chalk from 'chalk';
import { MapDiff } from '../../diffs/forMaps/MapDiff';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { source } from 'common-tags';

const prettyPrintMapDiff = function (diff: MapDiff, depth = 0): string {
  const content = [];

  for (const [ key, value ] of diff.equal.entries()) {
    const prettyValueLines = `${prettyPrint(key)}: ${prettyPrint(value, depth + 1)}`.split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of diff.changes.entries()) {
    const prettyValueLines = `${prettyPrint(key)}: ${prettyPrintDiff(value, depth + 1)}`.split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of diff.omissions.entries()) {
    const prettyValueLines = chalk.red(`${prettyPrint(key)}: ${prettyPrint(value, depth + 1)}`).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of diff.additions.entries()) {
    const prettyValueLines = chalk.green(`${prettyPrint(key)}: ${prettyPrint(value, depth + 1)}`).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }

  if (content.length === 0) {
    return 'Map({})';
  }

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

  if (depth >= 2) {
    return `Map({ ${content.join(' ')} })`;
  }

  return source`
    Map({
      ${content}
    })
  `;
};

export {
  prettyPrintMapDiff
};
