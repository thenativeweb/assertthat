import { assert } from '../../../lib';
import { prettyPrint } from '../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintRecursion } from '../../../lib/prettyPrint/forRecursions/prettyPrintRecursion';
import { recursion } from '../../../lib/types/Recursion';
import { error, Result, value } from 'defekt';

suite('prettyPrint', (): void => {
  const recursionSymbol = prettyPrintRecursion(recursion({ recursionPath: '/' }));
  const countRecursionSymbols = (output: string): number => output.split(recursionSymbol).length - 1;

  suite('dispels the value before printing when given a(n)', (): void => {
    test('array.', async (): Promise<void> => {
      const someArray: any = [ 1, 3, 3, 7 ];

      someArray.push(someArray, someArray, someArray);

      assert.that(countRecursionSymbols(prettyPrint(someArray))).is.equalTo(3);
    });

    test('map.', async (): Promise<void> => {
      const someMap = new Map<string, any>();

      someMap.set('pepps', 2);
      someMap.set('self', someMap);
      someMap.set('me', someMap);

      assert.that(countRecursionSymbols(prettyPrint(someMap))).is.equalTo(2);
    });

    test('object.', async (): Promise<void> => {
      const someObject = {
        recursion: undefined as any
      };
      const someOtherObject = {
        recursion: someObject,
        someDifferentProperty: 1_337
      };

      someObject.recursion = someOtherObject;

      assert.that(countRecursionSymbols(prettyPrint(someOtherObject))).is.equalTo(1);
    });

    test('result.', async (): Promise<void> => {
      const someArray = [ '🦄' ] as any[];
      const someResult = value(someArray);

      someArray.push(someResult, someResult, someResult, someResult);

      assert.that(countRecursionSymbols(prettyPrint(someResult))).is.equalTo(4);
    });

    test('set.', async (): Promise<void> => {
      const someSet = new Set<any>('🐈');

      someSet.add(someSet);

      assert.that(countRecursionSymbols(prettyPrint(someSet))).is.equalTo(1);
    });
  });
});
