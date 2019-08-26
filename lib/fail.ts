import assert from 'assert';
import { format } from 'util';
import humanReadable from './humanReadable';

const fail = function (message: string, values: any[]): void {
  const humanReadableValues = values.map((value: any): string => humanReadable(value));

  assert.fail(format(message, ...humanReadableValues));
};

export default fail;
