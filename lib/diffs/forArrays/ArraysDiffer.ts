import { ArrayDiff } from './ArrayDiff';
import { defekt } from 'defekt';

class ArraysDiffer<TContent = any> extends defekt({ code: 'ArraysDiffer' }) {
  public diff: ArrayDiff<TContent>;

  public constructor ({ diff }: {
    diff: ArrayDiff<TContent>;
  }) {
    super('The arrays differ.');
    this.diff = diff;
  }
}

export {
  ArraysDiffer
};
