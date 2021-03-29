import { assert } from '../../../lib/assertthat';

suite('atLeast', (): void => {
  test('does not throw an error if actual is at least expected.', async (): Promise<void> => {
    assert.that((): void => {
      assert.that(23).is.atLeast(23);
    }).is.throwing();
  });

  test('throws an error if actual is not at least expected.', async (): Promise<void> => {
    chai.throw((): void => {
      atLeast(23)(42);
    }, 'Expected 23 to be at least 42.');
  });

  suite('negated', (): void => {
    test('does not throw an error if actual is not at least expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        atLeast.negated(23)(42);
      });
    });

    test('throws an error if actual is at least expected.', async (): Promise<void> => {
      chai.throw((): void => {
        atLeast.negated(23)(23);
      }, 'Expected 23 not to be at least 23.');
    });
  });
});
