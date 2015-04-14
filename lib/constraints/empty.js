var cmp = require('comparejs');

var fail = require('../fail');

var isEmpty = function(actual) {
    return function() {
        if (actual === '') return true;
        fail('Expected %s not to be empty.', [actual]);
    }
}

isEmpty.negated = function(actual) {
    return function() {
        if (actual === '') fail('Expected %s not to be empty.', [actual]);
        return true;
    };
};

module.exports = isEmpty;