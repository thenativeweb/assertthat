import { source, TemplateTag } from 'common-tags';

const greenAnsi = '\u001B[32m';
// eslint-disable-next-line no-control-regex
const additionRegExp = /^ {2}\u001B\[32m\+ /gmu;

const redAnsi = '\u001B[31m';
// eslint-disable-next-line no-control-regex
const omissionRegExp = /^ {2}\u001B\[31m- /gmu;

const changeRegExp = /^ {2}\* /gmu;

const diffBase = new TemplateTag({
  onEndResult (endResult: string): string {
    return endResult.
      replace(additionRegExp, `${greenAnsi}+   `).
      replace(omissionRegExp, `${redAnsi}-   `).
      replace(changeRegExp, '*   ');
  }
});

const diffString = diffBase(source);

export {
  diffString
};
