import assert from 'assert';
import { format } from 'util';
import humanReadable from './humanReadable';

const fail = function (message: string, values: any[]): void {
  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  const humanReadableValues = values.map((value: any): string => humanReadable(value));

  assert.fail(format(message, ...humanReadableValues));
};

export default fail;
