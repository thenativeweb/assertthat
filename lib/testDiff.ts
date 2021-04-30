import { assert } from '.';

const actual = {
  one: [ 'one-one', 'one-two' ],
  two: new Set([
    [ 'two-one', new Set([
      'two-one-one',
      [
        'two-one-two-one',
        'two-one-two-two'
      ]
    ]) ],
    'two-two'
  ]),
  three: new Map<any, any>([
    [ 'three-one', 'bar' ],
    [ 'three-two', new Map<any, any>([
      [ 'three-two-one', false ],
      [ 'three-two-two', [ 1_234, 5_678 ]]
    ]) ],
    [ 'three-three', { 'three-three-one': undefined }]
  ]),
  four: {
    'four-one': {
      'four-one-one': {
        'four-one-one-one': 'lorem ipsum dolor sit amet'
      }
    }
  }
};
const expected = {
  one: [ 'one-one', 'one-three' ],
  two: new Set([
    [ 'two-one', new Set([
      [
        'two-one-two-one',
        'two-one-two-three'
      ]
    ]) ],
    'two-four'
  ]),
  three: new Map<any, any>([
    [ 'three-two', new Map<any, any>([
      [ 'three-two-one', true ],
      [ 'three-two-three', null ]
    ]) ],
    [ 'three-three', { 'three-three-one': 'heck', 'three-three-two': 'oof' }]
  ]),
  four: {
    'four-one': {
      'four-one-one': {
        'four-one-one-one': 'lorem ipsum dingus sit amet'
      }
    }
  }
};

assert.that(actual).is.equalTo(expected);
