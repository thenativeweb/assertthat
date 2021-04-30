const greenAnsi = '\u001B[32m';
// eslint-disable-next-line no-control-regex
const additionRegExp = /^ {2}\u001B\[32m\+ /gmu;

const redAnsi = '\u001B[31m';
// eslint-disable-next-line no-control-regex
const omissionRegExp = /^ {2}\u001B\[31m- /gmu;

const yellowAnsi = '\u001B[33m';
// eslint-disable-next-line no-control-regex
const changeRegExp = /^ {2}\u001B\[33m\* /gmu;

const propagateDiffSymbols = function (prettyDiff: string): string {
  return prettyDiff.
    replace(additionRegExp, `${greenAnsi}+   `).
    replace(omissionRegExp, `${redAnsi}-   `).
    replace(changeRegExp, `${yellowAnsi}*   `);
};

export {
  propagateDiffSymbols
};
