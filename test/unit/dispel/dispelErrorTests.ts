import { assert } from '../../../lib';
import { dispelError } from '../../../lib/dispel/dispelError';
import { recursion } from '../../../lib/types/Recursion';

suite('dispelError', (): void => {
  test('returns an intact error object including all non-standard properties.', async (): Promise<void> => {
    class CustomError extends Error {
      public foo: string;

      public bar: string;

      public recursion: any;

      public constructor (message: string, foo: string, bar: string) {
        super(message);
        this.foo = foo;
        this.bar = bar;
      }
    }

    const error = new CustomError('Message.', 'Foo.', 'Bar.');

    error.recursion = [ error ];

    const dispelledError = dispelError(error);

    assert.that(dispelledError).is.instanceOf(CustomError);
    assert.that(dispelledError).is.equalTo({
      message: 'Message.',
      name: 'Error',
      foo: 'Foo.',
      bar: 'Bar.',
      recursion: [ recursion({ recursionPath: '/' }) ]
    });
  });
});
