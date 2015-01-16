'use strict';

var humanReadable = function (value) {
  if (arguments.length === 0) {
    throw new Error('Value is missing.');
  }

  if (typeof value === 'number') {
    return '' + value;
  }

  return '\'' + value + '\'';
};

module.exports = humanReadable;
