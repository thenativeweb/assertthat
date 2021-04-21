import { assert } from '../../../lib';
import { dispelMap } from '../../../lib/dispel/dispelMap';
import { recursion } from '../../../lib/types/Recursion';

suite('dispelMap', (): void => {
  test('returns the map unchanged if no ancestors are given and no recursions are contained.', async (): Promise<void> => {
    const map = new Map([[ 'foo', 5 ], [ 'bar', 6 ]]);

    const dispelledMap = dispelMap(map);

    assert.that(dispelledMap).is.equalTo(map);
  });

  test('returns a recursion object if the map is contained in the ancestors.', async (): Promise<void> => {
    const map = new Map([[ 'foo', 5 ], [ 'bar', 6 ]]);
    const path = '/0/';

    const dispelledMap = dispelMap(map, path, [{ reference: map, path: '/' }]);

    assert.that(dispelledMap).is.equalTo(
      recursion({
        recursionPath: '/'
      })
    );
  });

  test('replaces a contained value with a recursion object if it is contained in the ancestors.', async (): Promise<void> => {
    const outer: any[] = [ new Map([[ 'foo', 5 ]]) ];
    const path = '/0/';

    outer[0].set('bar', outer);

    const dispelledMap = dispelMap(outer[0], path, [{ reference: outer, path: '/' }]);

    assert.that(dispelledMap).is.equalTo(
      new Map<any, any>([[ 'foo', 5 ], [ 'bar', recursion({ recursionPath: '/' }) ]])
    );
  });
});
