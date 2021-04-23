import { assert } from '../../../lib';
import { dispelResult } from '../../../lib/dispel/dispelResult';
import { recursion } from '../../../lib/types/Recursion';
import { error, Result, value } from 'defekt';

suite('dispelResult', (): void => {
  test('returns the result unchanged if no ancestors are given and no recursions are contained.', async (): Promise<void> => {
    const result = value([]);

    const dispelledResult = dispelResult(result);

    assert.that(dispelledResult).is.equalTo(result);
  });

  test('returns a recursion object if the result is contained in the ancestors.', async (): Promise<void> => {
    const result = value([]);
    const path = '/0/';

    const dispelledResult = dispelResult(result, path, [{ reference: result, path: '/' }]);

    assert.that(dispelledResult).is.equalTo(
      recursion({
        recursionPath: '/'
      })
    );
  });

  test('replaces a contained value with a recursion object if it is contained in the ancestors.', async (): Promise<void> => {
    const result: any[] = [ value([]) ];
    const path = '/0/';

    result[0].value.push(result);

    const dispelledResult = dispelResult(result[0], path, [{ reference: result, path: '/' }]);

    assert.that(dispelledResult).is.equalTo(
      value([ recursion({ recursionPath: '/' }) ])
    );
  });

  test(`builds paths through value results with the path segment 'value'.`, async (): Promise<void> => {
    const result: Result<any, any> = value([[[]]]);

    result.value[0][0].push(result.value[0]);

    const dispelledResult = dispelResult(result) as any;

    assert.that(dispelledResult.value[0][0][0]).is.equalTo(
      recursion({
        recursionPath: '/value/0/'
      })
    );
  });

  test(`builds paths through error results with the path segment 'error'.`, async (): Promise<void> => {
    const result: Result<any, any> = error([[[]]] as any);

    result.error[0][0].push(result.error[0]);

    const dispelledResult = dispelResult(result) as any;

    assert.that(dispelledResult.error[0][0][0]).is.equalTo(
      recursion({
        recursionPath: '/error/0/'
      })
    );
  });
});
