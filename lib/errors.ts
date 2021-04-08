import { defekt } from 'defekt';

class AssertionFailed extends defekt({ code: 'AssertionFailed' }) {}
class InvalidOperation extends defekt({ code: 'InvalidOperation' }) {}

class AssertionFailed2 extends defekt({ code: 'AssertionFailed2' }) {
  public constructor ({ message, expected, actual, diff }: {
    message: string;
    expected?: string;
    actual?: string;
    diff?: string;
  }) {
    super(message);

    this.data = {
      expected,
      actual,
      diff
    };
  }
}

export {
  AssertionFailed,
  AssertionFailed2,
  InvalidOperation
};
