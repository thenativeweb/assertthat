import { assert } from '../../../lib';
import { dispelSet } from '../../../lib/dispel/dispelSet';
import { recursion } from '../../../lib/types/Recursion';

suite('dispelSet', (): void => {
  test('returns the set unchanged if no ancestors are given and no recursions are contained.', async (): Promise<void> => {
    const set = new Set([ 'foo', 'bar' ]);

    const dispelledSet = dispelSet(set);

    assert.that(dispelledSet).is.equalTo(set);
  });

  test('returns a recursion object if the set is contained in the ancestors.', async (): Promise<void> => {
    const set = new Set([ 'foo', 'bar' ]);
    const path = '/0/';

    const dispelledSet = dispelSet(set, path, [{ reference: set, path: '/' }]);

    assert.that(dispelledSet).is.equalTo(
      recursion({
        recursionPath: '/'
      })
    );
  });

  test('replaces a contained value with a recursion object if it is contained in the ancestors.', async (): Promise<void> => {
    const outer: any[] = [ new Set([ 'foo' ]) ];
    const path = '/0/';

    outer[0].add(outer);

    const dispelledSet = dispelSet(outer[0], path, [{ reference: outer, path: '/' }]);

    assert.that(dispelledSet).is.equalTo(
      new Set([ 'foo', recursion({ recursionPath: '/' }) ])
    );
  });
});
