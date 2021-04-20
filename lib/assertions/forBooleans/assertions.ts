import { assertBooleanIsFalse } from './assertBooleanIsFalse';
import { assertBooleanIsNotFalse } from './assertBooleanIsNotFalse';
import { assertBooleanIsNotTrue } from './assertBooleanIsNotTrue';
import { assertBooleanIsTrue } from './assertBooleanIsTrue';
import { BooleanAssertions } from './BooleanAssertions';
import { report } from '../../report';

const getAssertionsForBoolean = function (actual: boolean): BooleanAssertions {
  return {
    false (): void {
      report(assertBooleanIsFalse(actual));
    },
    true (): void {
      report(assertBooleanIsTrue(actual));
    }
  };
};

const getNegatedAssertionsForBoolean = function (actual: boolean): BooleanAssertions {
  return {
    false (): void {
      report(assertBooleanIsNotFalse(actual));
    },
    true (): void {
      report(assertBooleanIsNotTrue(actual));
    }
  };
};

export {
  getAssertionsForBoolean,
  getNegatedAssertionsForBoolean
};
