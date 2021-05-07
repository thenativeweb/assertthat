import { assert } from '../../../lib';
import { dispelObject } from '../../../lib/dispel/dispelObject';
import { recursion } from '../../../lib/types/Recursion';

suite('dispelObject', (): void => {
  test('returns the object unchanged if no ancestors are given and no recursions are contained.', async (): Promise<void> => {
    const object = { foo: 5, bar: 7 };

    const dispelledObject = dispelObject(object);

    assert.that(dispelledObject).is.equalTo(object);
  });

  test('returns a recursion object if the object is contained in the ancestors.', async (): Promise<void> => {
    const object = { foo: 5, bar: 7 };
    const path = '/0/';

    const dispelledObject = dispelObject(object, path, [{ reference: object, path: '/' }]);

    assert.that(dispelledObject).is.equalTo(
      recursion({
        recursionPath: '/'
      })
    );
  });

  test('replaces a contained value with a recursion object if it is contained in the ancestors.', async (): Promise<void> => {
    const object: any[] = [{ foo: 5, bar: 7 }];
    const path = '/0/';

    object[0].heck = object;

    const dispelledObject = dispelObject(object[0], path, [{ reference: object, path: '/' }]);

    assert.that(dispelledObject).is.equalTo(
      { foo: 5, bar: 7, heck: recursion({ recursionPath: '/' }) }
    );
  });

  test('builds paths by using the object index as path segment.', async (): Promise<void> => {
    const object: any = { foo: { bar: { heck: {}}}};

    object.foo.bar.heck.what = object.foo.bar.heck;

    const dispelledObject = dispelObject(object) as any;

    assert.that(dispelledObject.foo.bar.heck.what).is.equalTo(
      recursion({
        recursionPath: '/foo/bar/heck/'
      })
    );
  });
});
