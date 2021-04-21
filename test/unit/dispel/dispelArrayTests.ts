import { assert } from '../../../lib';
import { dispelArray } from '../../../lib/dispel/dispelArray';
import { recursion } from '../../../lib/types/Recursion';

suite('dispelArray', (): void => {
  test('returns the array unchanged if no ancestors are given and no recursions are contained.', async (): Promise<void> => {
    const array = [ 1, 2, 3, [ 4, 5 ]];

    const dispelledArray = dispelArray(array);

    assert.that(dispelledArray).is.equalTo(array);
  });

  test('returns a recursion object if the array is contained in the ancestors.', async (): Promise<void> => {
    const array = [ 1, 2, 3, [ 4, 5 ]];
    const path = '/0/';

    const dispelledArray = dispelArray(array, path, [{ reference: array, path: '/' }]);

    assert.that(dispelledArray).is.equalTo(
      recursion({
        recursionPath: '/'
      })
    );
  });

  test('replaces a contained value with a recursion object if it is contained in the ancestors.', async (): Promise<void> => {
    const array: any[] = [[ 1, 2, 3 ]];
    const path = '/0/';

    array[0].push(array);

    const dispelledArray = dispelArray(array[0], path, [{ reference: array, path: '/' }]);

    assert.that(dispelledArray).is.equalTo(
      [ 1, 2, 3, recursion({ recursionPath: '/' }) ]
    );
  });

  test('builds paths by using the array index as path segment.', async (): Promise<void> => {
    const array: any[] = [ 1, 2, [ 3, [[]]]];

    array[2][1][0].push(array[2][1]);

    const dispelledArray = dispelArray(array) as any[];

    assert.that(dispelledArray[2][1][0][0]).is.equalTo(
      recursion({
        recursionPath: '/2/1/'
      })
    );
  });
});
