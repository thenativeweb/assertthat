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

## Copyright

(c) Copyright 2011 [Golo Roden](http://www.goloroden.de), contact using webmaster@goloroden.de
