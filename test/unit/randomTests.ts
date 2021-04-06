import { assert } from '../../lib/assertthat';

suite.skip('random shit', (): void => {
  test('heck.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    assert.that((): void => {
      throw new Error('Foo');
    }).is.throwing('heck?');
  });
});
