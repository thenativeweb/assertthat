# node-assertthat

node-assertthat provides a fluent TDD style for Node.js: `assert.that(actual, is.equalto(expected));`

## Installation

    $ npm install node-assertthat

## Quick Start

Using node-assertthat is easy. All you need to do is to add a reference to it within your Node.js application:

```javascript
var assert = require('node-assertthat');
```

Now you are able to use the various constraints:

```javascript
var add = function(first, second) {
  return first + second;
};

var actual = add(23, 42),
    expected = 65;

assert.that(actual, is.equalTo(expected));
```

Please note that node-assertthat extends Node's assert module, i.e. all the code you have been used to will work with node-assertthat as well.

That's it :-)!

## Available constraints

Please note that all `is` functions can be negated using the `not` keyword.

### is.true

Asserts that `actual` is true.

```javascript
assert.that(actual, is.true);
assert.that(actual, is.not.true);
```

### is.false

Asserts that `actual` is false.

```javascript
assert.that(actual, is.false);
assert.that(actual, is.not.false);
```

## Running the tests

Go to the folder where you have cloned node-assertthat to and run [mocha](https://github.com/visionmedia/mocha):

    $ mocha

## Copyright

(c) Copyright 2011-2012 [Golo Roden](http://www.goloroden.de), contact using webmaster@goloroden.de
