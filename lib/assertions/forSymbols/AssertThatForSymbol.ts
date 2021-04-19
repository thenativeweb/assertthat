import { CommonAssertions } from '../forAny/CommonAssertions';
import { SymbolAssertions } from './SymbolAssertions';

type AssertThatForSymbol = (actual: symbol) => {
  is: CommonAssertions<symbol> & SymbolAssertions & {
    not: CommonAssertions<symbol> & SymbolAssertions;
  };
};

export type {
  AssertThatForSymbol
};
