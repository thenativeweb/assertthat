import { defekt } from 'defekt';

class AssertionFailed extends defekt({ code: 'AssertionFailed' }) {}
class InvalidOperation extends defekt({ code: 'InvalidOperation' }) {}

export {
  AssertionFailed,
  InvalidOperation
};
