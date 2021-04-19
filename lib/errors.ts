import { defekt } from 'defekt';

class InvalidOperation extends defekt({ code: 'InvalidOperation' }) {}

class AssertionFailed extends defekt({ code: 'AssertionFailed' }) {
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
  InvalidOperation
};
