# assertthat

assertthat provides fluent TDD.

## Status

| Category | Status |
|-|-|
| Version | [![npm](https://img.shields.io/npm/v/assertthat)](https://www.npmjs.com/package/assertthat) |
| Dependencies | ![David](https://img.shields.io/david/thenativeweb/assertthat) |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/assertthat) |
| Build | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/assertthat)](https://circleci.com/gh/thenativeweb/assertthat/tree/master) |
| License | ![GitHub](https://img.shields.io/github/license/thenativeweb/assertthat) |

## Installation

```shell
$ npm install assertthat
```

## Quick Start

First you need to add a reference to assertthat to your application.

```javascript
const assert = require('assertthat');
```

Now you are able to use the various constraints.

```javascript
const add = function(first, second) {
  return first + second;
};

const actual = add(23, 42),
      expected = 65;

assert.that(actual).is.equalTo(expected);
```

## Available constraints

Please note that any constraint can be negated using the `not` keyword.

### atLeast

Asserts that `actual` is greater than or equal to `expected`.

```javascript
assert.that(actual).is.atLeast(expected);
assert.that(actual).is.not.atLeast(expected);
```

### atMost

Asserts that `actual` is less than or equal to `expected`.

```javascript
assert.that(actual).is.atMost(expected);
assert.that(actual).is.not.atMost(expected);
```

### between

Asserts that `actual` is between `expectedLow` and `expectedHigh`.

```javascript
assert.that(actual).is.between(expectedLow, expectedHigh);
assert.that(actual).is.not.between(expectedLow, expectedHigh);
```

### containing

Asserts that `actual` contains `expected`.

```javascript
assert.that(actual).is.containing(expected);
assert.that(actual).is.not.containing(expected);
```

### containingAnyOf

Asserts that `actual` contains any of `expected`.

```javascript
assert.that(actual).is.containingAnyOf(expected);
assert.that(actual).is.not.containingAnyOf(expected);
```

### containingAllOf

Asserts that `actual` contains all of `expected`.

```javascript
assert.that(actual).is.containingAllOf(expected);
assert.that(actual).is.not.containingAllOf(expected);
```

### endingWith

Asserts that `actual` ends with `expected`.

```javascript
assert.that(actual).is.endingWith(expected);
assert.that(actual).is.not.endingWith(expected);
```

### equalTo

Asserts that `actual` is equal to `expected`.

```javascript
assert.that(actual).is.equalTo(expected);
assert.that(actual).is.not.equalTo(expected);
```

### false

Asserts that `actual` is false.

```javascript
assert.that(actual).is.false();
assert.that(actual).is.not.false();
```

### falsy

Asserts that `actual` is falsy.

```javascript
assert.that(actual).is.falsy();
assert.that(actual).is.not.falsy();
```

### greaterThan

Asserts that `actual` is greater than `expected`.

```javascript
assert.that(actual).is.greaterThan(expected);
assert.that(actual).is.not.greaterThan(expected);
```

### instanceOf

Asserts that `actual` is an instance of `expected`.

```javascript
assert.that(actual).is.instanceOf(expected);
assert.that(actual).is.not.instanceOf(expected);
```

### lessThan

Asserts that `actual` is less than `expected`.

```javascript
assert.that(actual).is.lessThan(expected);
assert.that(actual).is.not.lessThan(expected);
```

### matching

Asserts that `actual` matches `expected` where `expected` is a regular expression.

```javascript
assert.that(actual).is.matching(expected);
assert.that(actual).is.not.matching(expected);
```

### NaN

Asserts that `actual` is NaN.

```javascript
assert.that(actual).is.NaN();
assert.that(actual).is.not.NaN();
```

### null

Asserts that `actual` is null.

```javascript
assert.that(actual).is.null();
assert.that(actual).is.not.null();
```

### ofType

Asserts that `actual` is of type `expected`.

```javascript
assert.that(actual).is.ofType(expected);
assert.that(actual).is.not.ofType(expected);
```

### sameAs

Asserts that `actual` is identical to `expected`.

```javascript
assert.that(actual).is.sameAs(expected);
assert.that(actual).is.not.sameAs(expected);
```

### sameJsonAs

Asserts that `actual` is stringified as the same JSON as `expected`.

```javascript
assert.that(actual).is.sameJsonAs(expected);
assert.that(actual).is.not.sameJsonAs(expected);
```

### startingWith

Asserts that `actual` starts with `expected`.

```javascript
assert.that(actual).is.startingWith(expected);
assert.that(actual).is.not.startingWith(expected);
```

### throwing

Asserts that `f` throws an exception.

```javascript
assert.that(() => {
  f();
}).is.throwing();
assert.that(() => {
  f();
}).is.not.throwing();
```

Alternatively, asserts that `f` throws an exception with the `expected` message. For the `expected` message you can either specify a string, a regular expression or a predicate.

```javascript
assert.that(() => {
  f();
}).is.throwing(expected);
assert.that(() => {
  f();
}).is.not.throwing(expected);
```

### throwingAsync

Asserts that `f` throws an exception.

```javascript
await assert.that(async () => {
  await f();
}).is.throwingAsync();
await assert.that(async () => {
  await f();
}).is.not.throwingAsync();
```

Alternatively, asserts that `f` throws an exception with the `expected` message. For the `expected` message you can either specify a string, a regular expression or a predicate.

```javascript
await assert.that(async () => {
  await f();
}).is.throwingAsync(expected);
await assert.that(async () => {
  await f();
}).is.not.throwingAsync(expected);
```

### true

Asserts that `actual` is true.

```javascript
assert.that(actual).is.true();
assert.that(actual).is.not.true();
```

### undefined

Asserts that `actual` is undefined.

```javascript
assert.that(actual).is.undefined();
assert.that(actual).is.not.undefined();
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
