import { compareArrays } from '../../lib/comparisons2/forArrays/compareArrays';
import { compareStrings } from '../../lib/comparisons2/forStrings/compareStrings';
import { prettyPrintStringDiff } from '../../lib/prettyPrint/forStrings/prettyPrintStringDiff';

suite('random shit', (): void => {
  test('heck.', async (): Promise<void> => {
    const result = compareArrays(
      [ 1, 2, 5 ],
      [ 5 ]
    );

    console.log({ result });
  });

  test('heck2.', async (): Promise<void> => {
    const result = compareStrings(
      'GCTGATATAGCT',
      'GGGTGATTAGCT'
    );

    console.log(JSON.stringify(result, null, 2));
  });

  test('heck3.', async (): Promise<void> => {
    const result = compareStrings(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloris umbridge magna aliqua. Ut enim ad minim veniam, quis haha was ein insert hier lol nostrud exercitation ullamco laboris nisi ut aliquip ex ea komodo waran consequat. Duis aute irure dolor in reprehenderit in voluptamissimote velit esse cillum dolore eu fugiat nulla pariatur. Except sint occaecat cupidingusat non proident, sunt  officia deserunt mollit anim id est laborum.'
    );

    console.log(prettyPrintStringDiff(result));
  });

  test('heck4.', async (): Promise<void> => {
    const result = compareStrings(
      'b',
      'cd'
    );

    console.log(prettyPrintStringDiff(result));
  });
});
