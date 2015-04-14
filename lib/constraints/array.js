var cmp = require('comparejs');

var fail = require('../fail');

var isArray = function(actual) {
    return function() {
        if (Object.prototype.toString.call(actual) === '[object Array]') return true;
        fail('Expected %s to be an array', [actual]);
    };
}

module.exports = isArray;
