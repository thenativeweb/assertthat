# node-assertthat

node-assertthat provides a fluent TDD style for Node.js: assert.that(actual, is.equalto(expected));

## Installation

    $ npm install node-assertthat

## Quick Start

Using node-assertthat is easy. All you need to do is to require it, and then use it:

```javascript
var assert = require('node-assertthat');

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

Please note that all *is* functions can be negated using the *not* keyword.

### is.equalTo

Asserts that *actual* and *expected* share the same value.

```javascript
assert.that(actual, is.equalTo(expected));
assert.that(actual, is.not.equalTo(expected));
```

### is.sameAs

Asserts that *actual* and *expected* share the same reference, i.e. both refer to the same object.

```javascript
assert.that(actual, is.sameAs(expected));
assert.that(actual, is.not.sameAs(expected));
```

### is.true

Asserts that *actual* is true.

```javascript
assert.that(actual, is.true);
assert.that(actual, is.not.true);
```

### is.false

Asserts that *actual* is false.

```javascript
assert.that(actual, is.false);
assert.that(actual, is.not.false);
```

### throws.a / throws.an

Asserts that *f* throws an error of type *err*.

```javascript
assert.that(f, throws.an(err));
```

## Unit tests

node-assertthat is covered by unit tests that are based on Expresso. To run these tests, simply run

    $ expresso

in the root folder of the module.

## Copyright

(c) Copyright 2011-2012 [Golo Roden](http://www.goloroden.de), contact using webmaster@goloroden.de
