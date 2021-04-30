import { assert } from '../../../../lib';
import { formatNestedArray } from '../../../../lib/prettyPrint/utils/formatNestedArray';

suite('formatNestedArray', (): void => {
  test(`formats a nested array by putting each leaf on a line, separating the outer array's items with commas.`, async (): Promise<void> => {
    const parts = [
      [ 'foo', 'bar' ],
      [ 'bam', 'baz' ],
      [ 'bar' ]
    ];
    const result = formatNestedArray`
      Even with indentation:
        ${parts}
    `;

    assert.that(result).is.equalTo('Even with indentation:\n  foo\n  bar,\n  bam\n  baz,\n  bar');
  });

  test(`formats a nested array by appending the leafs, if the substitution is not indented.`, async (): Promise<void> => {
    const parts = [
      [ 'foo', 'bar' ],
      [ 'bam', 'baz' ],
      [ 'bar' ]
    ];
    const result = formatNestedArray`No indentation: ${parts}`;

    assert.that(result).is.equalTo('No indentation: foo bar, bam baz, bar');
  });
});
