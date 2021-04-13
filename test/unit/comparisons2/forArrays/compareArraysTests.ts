import { compareArrays } from '../../../../lib/comparisons2/forArrays/compareArrays';

suite('compareArrays', (): void => {
  test('recognizes recursion and correctly treats identical recursion as equal.', async (): Promise<void> => {
    const actual: any[] = [
      'foo'
    ];

    actual.push(actual);
    const expected: any[] = [
      'foo'
    ];

    expected.push(expected);

    const arrayDiff = compareArrays(actual, expected);

    const expectedArrayDiff = {
      kind: '', // Array diff symbol
      segments: [
        {
          equal: [ 'foo' ],
          cost: 0
        },
        {
          equal: [{ recursion: '/' }]
        }
      ]
    };
  });

  test('ignores repetition', async (): Promise<void> => {
    const actual: any[] = [
      [ 'foo' ],
      [ 'bar' ]
    ];

    actual.push(actual[0]);

    const expected: any[] = [
      [ 'foo' ],
      [ 'bar' ]
    ];

    expected.push(expected[1]);

    const expectedArrayDiff = {
      kind: '', // Array diff symbol
      segments: [
        {
          equal: [ 'foo', 'bar' ],
          cost: 0
        },
        {
          addition: [ 'foo' ],
          cost: 1
        },
        {
          omission: [ 'bar' ],
          cost: 1
        }
      ]
    };
  });

  test('diffs recursion?', async (): Promise<void> => {
    const actual: any[] = [
      'foo',
      []
    ];

    actual[1].push(actual);

    const expected: any[] = [
      'foo',
      []
    ];

    expected[1].push(expected[1]);

    const expectedArrayDiff = {
      kind: '', // Array diff symbol
      segments: [
        {
          equal: [ 'foo' ],
          cost: 0
        },
        {
          change: [
            {
              addition: [{ recursion: '/' }],
              cost: 1
            },
            {
              omission: [{ recursion: '/1/' }],
              cost: 1
            }
          ],
          cost: 2
        }
      ]
    };
  });
});
