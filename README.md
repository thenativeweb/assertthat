# assertthat

assertthat provides fluent TDD.

## Status

| Category         | Status                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Version          | [![npm](https://img.shields.io/npm/v/assertthat)](https://www.npmjs.com/package/assertthat)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/assertthat)                                                                                   |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/assertthat)                                                                               |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/assertthat/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/assertthat)                                                                         |

## Installation

```shell
$ npm install assertthat
```

## Quick Start

First you need to add a reference to `assertthat` to your application.

```javascript
const { assert } = require('assertthat');
```

If you use TypeScript, use the following code instead:

```typescript
import { assert } from 'assertthat';
```

Now you are able to use various assertions, e.g. to compare two values for equality:

```javascript
const actual = 23 + 42,
      expected = 65;

assert.that(actual).is.equalTo(expected);
```

## Using common assertions

While most assertions work for any type, a few are only available for specific types. The former are called *common assertions*. No matter which assertions you use, they can always be negated by using the `not` modifier, such as:

```javascript
assert.that(actual).is.not.equalTo(expected);
```

### Asserting for equality

To compare two values for equality, use the `equalTo` assertion. It works with value types and reference types, using a deep equality comparison on the latter, i.e. you can use it with objects, arrays, and other reference types, without having to care about the identity of these values:

```javascript
assert.that(actual).is.equalTo(expected);
```

### Asserting for identity

If you actually care about identity, use the `identicalTo` assertion. On value types this will compare by value, but on reference types it will use their respective identity.

```javascript
assert.that(actual).is.identicalTo(expected);
```

### Asserting for JSON structures

From time to time you may want to assert that two values result in the same JSON structure. For these cases use `sameJsonAs`:

```javascript
assert.that(actual).is.sameJsonAs(expected);
```

### Asserting for literal values

There are special assertions for the literal values `true`, `false`, `null`, and `undefined`. Although you may use `equalTo` here as well, their usage is more straight-forward and intuitive:

```javascript
assert.that(actual).is.true();
assert.that(actual).is.false();
assert.that(actual).is.null();
assert.that(actual).is.undefined();
```

### Asserting for a specific type

Sometimes you may want to assert that a value is of a given type. For that, use the `ofType` assertion, and specify the expected type. The supported values are `array`, `boolean`, `error`, `function`, `map`, `null`, `number`, `object`, `result`, `set`, `string`, `symbol`, and `undefined`:

```javascript
assert.that(actual).is.ofType('function');
```

## Using special assertions

In contrast to the common assertions, special assertions are only available for specific types.

### Asserting for arrays

To assert that an array is empty, use the `empty` assertion:

```javascript
assert.that(actual).is.empty();
```

Alternatively, you may verify whether one or more elements are contained by using the `containing`, `containingAnyOf`, and `containingAllOf` assertions:

```javascript
// The given element must be contained.
assert.that(actual).is.containing(23);

// At least one of the given elements must be contained.
assert.that(actual).is.containingAnyOf([ 23, 42 ]);

// All of the given elements must be contained.
assert.that(actual).is.containingAllOf([ 23, 42 ]);
```

### Asserting for functions

You may want to ensure that a function throws an exception. For that, use the `throwing` assertion. Please note that you have to wrap the function you would like to verify into a callback:

```javascript
assert.that(() => {
  actual();
}).is.throwing();
```

If the function to check is asynchronous, use `throwingAsync` instead, and make sure to use `async` and `await` where needed:

```javascript
await assert.that(async () => {
  await actual();
}).is.throwingAsync();
```

Sometimes you may want to check for a specific exception. For that, provide the expected exception's message as a string or as a regular expression, or hand over a predicate function to check for anything else, such as the error code or the stack trace:

```javascript
// Using a string.
assert.that(() => {
  actual();
}).is.throwing('File not found.');

// Using a regular expression.
assert.that(() => {
  actual();
}).is.throwing(/^File/u);

// Using a predicate.
assert.that(() => {
  actual();
}).is.throwing(ex => ex.code === 'ENOENT');
```

If you are using TypeScript, you may want to specify the type of the expected exception so that you get a correctly typed parameter in the predicate function:

```typescript
assert.that(() => {
  actual();
}).is.throwing<FileNotFound>((ex): boolean => ex.code === 'ENOENT');
```

### Asserting for maps

To assert that a map is empty, use the `empty` assertion:

```javascript
assert.that(actual).is.empty();
```

Alternatively, you may use the `atLeast` assertion to assert that a map contains at least everything another map does:

```javascript
assert.that(actual).is.atLeast(new Map([
  [ name, 'the native web' ],
  [ website, 'https://www.thenativeweb.io' ]
]));
```

The same is true for asserting that a map contains at most everything another map does, using the `atMost` assertion:

```javascript
assert.that(actual).is.atMost(new Map([
  [ name, 'the native web' ],
  [ website, 'https://www.thenativeweb.io' ]
]));
```

### Asserting for numbers

If you want to verify that a number is `NaN`, use the respective assertion:

```javascript
assert.that(actual).is.NaN();
```

Alternatively, you may want to verify the relation between two numbers by comparing them:

```javascript
// actual > 23
assert.that(actual).is.greaterThan(23);

// actual < 23
assert.that(actual).is.lessThan(23);

// actual >= 23
assert.that(actual).is.atLeast(23);

// actual <= 23
assert.that(actual).is.atMost(23);
```

### Asserting for objects

To check that an object is empty, use the `empty` assertion:

```javascript
assert.that(actual).is.empty();
```

Alternatively, you may use the `atLeast` assertion to assert that an object contains at least everything another object does:

```javascript
assert.that(actual).is.atLeast({
  name: 'the native web',
  website: 'https://www.thenativeweb.io'
});
```

The same is true for asserting that an object contains at most everything another object does, using the `atMost` assertion:

```javascript
assert.that(actual).is.atMost({
  name: 'the native web',
  website: 'https://www.thenativeweb.io'
});
```

Finally, to check that an object is an instance of a specific type, use the `instanceOf` assertion, and provide the constructor function or class:

```javascript
assert.that(actual).is.instanceOf(Person);
```

### Asserting for results

If you are using the `Result` type from the [defekt](https://www.npmjs.com/package/defekt) module, you may use `assertthat` to verify that a result is either a value or an error. For that, use the respective assertions:

```javascript
assert.that(actual).is.aValue();
assert.that(actual).is.anError();
```

If you are interested in a specific error, use the `anErrorWithMessage` assertion instead of `anError`:

```javascript
assert.that(actual).is.anErrorWithMessage('File not found.');
```

### Asserting for sets

To assert that a set is empty, use the `empty` assertion:

```javascript
assert.that(actual).is.empty();
```

Alternatively, you may use the `atLeast` assertion to assert that a set contains at least everything another set does:

```javascript
assert.that(actual).is.atLeast(new Set([ 23, 42 ]));
```

The same is true for asserting that a set contains at most everything another set does, using the `atMost` assertion:

```javascript
assert.that(actual).is.atMost(new Set([ 23, 42 ]));
```

Finally, you may verify whether one or more elements are contained by using the `containing`, `containingAnyOf`, and `containingAllOf` assertions:

```javascript
// The given element must be contained.
assert.that(actual).is.containing(23);

// At least one of the given elements must be contained.
assert.that(actual).is.containingAnyOf([ 23, 42 ]);

// All of the given elements must be contained.
assert.that(actual).is.containingAllOf([ 23, 42 ]);
```

### Asserting for strings

To assert that a string is empty, use the `empty` assertion:

```javascript
assert.that(actual).is.empty();
```

If you want to verify that it is starting or ending with another string, use `startingWith` and `endingWith` respectively:

```javascript
assert.that(actual).is.startingWith('the');
assert.that(actual).is.endingWith('web');
```

To verify that a string matches a regular expression, use the `matching` assertion:

```javascript
assert.that(actual).is.matching(/native/u);
```

Finally, you may verify whether one or more substrings are contained by using the `containing`, `containingAnyOf`, and `containingAllOf` assertions:

```javascript
// The given string must be contained.
assert.that(actual).is.containing('native');

// At least one of the given strings must be contained.
assert.that(actual).is.containingAnyOf([ 'native', 'web' ]);

// All of the given strings must be contained.
assert.that(actual).is.containingAllOf([ 'native', 'web' ]);
```

## Asserting on the contents of arrays, sets, and maps

It is possible to run the same assertion on all values in an array, set, or map:

```javascript
assert.that.eachElementOf(arrayOfStrings).is.startingWith('foo');

assert.that.eachElementOf(setOfObjects).is.atLeast({ foo: 'bar' });

assert.that.eachElementOf(mapOfThings).is.not.null();
```

While the `.eachElementOf(...).is...` assertions run the assertion on each item of arrays and sets, it runs the assertions only on the values of maps.

## Caveats

Most assertions build upon an internal comparison using a diff-algorithm. To avoid infinite recursion, all asserted values are first dispelled (i.e. recursions in them are detected and removed). These recursions can in principle be compared by value across arrays and objects. However, this does not work with `Set`s and `Map`s, since a `Map` can have reference types as keys and the element in `Set` can not be uniquely identified in a reproducible way. So comparisons of `Set`s and `Map`s that contain recursions might not work as expected.

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
