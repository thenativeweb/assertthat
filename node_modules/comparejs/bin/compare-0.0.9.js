(function (exports) {
  var alias = {
    eq: 'equal',
    ne: 'notEqual',
    gt: 'greaterThan',
    ge: 'greaterThanOrEqual',
    lt: 'lessThan',
    le: 'lessThanOrEqual',
    id: 'identical',

    eqs: 'equalByStructure',
    nes: 'notEqualByStructure',
    gts: 'greaterThanByStructure',
    ges: 'greaterThanOrEqualByStructure',
    lts: 'lessThanByStructure',
    les: 'lessThanOrEqualByStructure'
  };

  var cmp = {
    eq: function (first, second) {
      // If two functions shall be compared, compare their source code.
      if(typeof first === 'function' && typeof second === 'function') {
        first = first.toString();
        second = second.toString();
      }

      // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
      if(typeof first === 'object' && typeof second === 'object' && first && second) {
        return isSubset(first, second) && isSubset(second, first);
      }

      return first === second;
    },

    eqs: function (first, second) {
      // If exactly one is null, they are not equal by structure.
      if((first && !second) || (!first && second)) {
        return false;
      }

      // If both are null, they are equal by structure.
      if(!first && !second) {
        return true;
      }

      return isSubsetStructure(first, second) && isSubsetStructure(second, first);
    },

    ne: function (first, second) {
      return !(this.eq(first, second));
    },

    nes: function (first, second) {
      return !(this.eqs(first, second));
    },

    gt: function (first, second) {
      // If at least one parameter is a function, greater than does not make sense.
      if(typeof first === 'function' || typeof second === 'function') {
        return false;
      }

      // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
      if(typeof first === 'object' && typeof second === 'object' && first && second) {
        return isSubset(second, first) && !isSubset(first, second);
      }

      // If an object is compared with null, neither is greater.
      if((typeof first === 'object' && !second) || (typeof second === 'object' && !first)) {
        return false;
      }

      return first > second;
    },

    gts: function (first, second) {
      // If the second object is null, the first is greater by structure.
      if(first && !second) {
        return true;
      }

      // Otherwise, if the first is null, it is not greater (no matter what the second is).
      if(!first) {
        return false;
      }

      // If both are not null, compare as a subset. Note that second must be a subset of first, if first
      // is greater than second.
      return isSubsetStructure(second, first) && !isSubsetStructure(first, second);
    },

    ge: function (first, second) {
      return this.gt(first, second) || this.eq(first, second);
    },

    ges: function (first, second) {
      return this.gts(first, second) || this.eqs(first, second);
    },

    lt: function (first, second) {
      // If at least one parameter is a function, less than does not make sense.
      if(typeof first === 'function' || typeof second === 'function') {
        return false;
      }

      // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
      if(typeof first === 'object' && typeof second === 'object' && first && second) {
        return isSubset(first, second) && !isSubset(second, first);
      }

      // If an object is compared with null, neither is greater.
      if((typeof first === 'object' && !second) || (typeof second === 'object' && !first)) {
        return false;
      }

      return first < second;
    },

    lts: function (first, second) {
      // If the first object is null, it is less by structure.
      if(!first && second) {
        return true;
      }

      // Otherwise, if the second is null, the first is not less (no matter what it is).
      if(!second) {
        return false;
      }

      // If both are not null, compare as a subset. Note that first must be a subset of second, if first
      // is less than second.
      return isSubsetStructure(first, second) && !isSubsetStructure(second, first);
    },

    le: function (first, second) {
      return this.lt(first, second) || this.eq(first, second);
    },

    les: function (first, second) {
      return this.lts(first, second) || this.eqs(first, second);
    },

    id: function (first, second) {
      // Functions and objects need to be compared by reference, all other types are compared by value.
      if((typeof first === 'function' && typeof second === 'function') || 
         (typeof first === 'object' && typeof second === 'object' )) {
        return first === second;
      }

      return this.eq(first, second);
    }
  };

  var isSubset = function (derived, base) {
    for(var i in derived) {
      if(!base[i] || cmp.ne(derived[i], base[i])) {
        return false;
      }
    }
    return true;
  };

  var isSubsetStructure = function (derived, base) {
    for(var i in derived) {
      if(typeof base[i] !== typeof derived[i]) {
        return false;
      }
    }
    return true;
  };

  var bind = function (f, obj) {
    return function () {
      return f.apply(obj, arguments);
    };
  };

  var wrap = function (f, g) {
    return function () {
      var args = [f].concat(Array.prototype.slice.call(arguments, 0));
      return g.apply(this, args);
    };
  };

  var unwrap = function (obj) {
    if(obj === null) {
      return obj;
    } else if(typeof obj === 'object' && (obj.constructor === Number || obj.constructor === String || obj.constructor === Boolean)) {
      return obj.valueOf();
    }

    return obj;
  };

  var processTypes = function (f, first, second) {
    first = unwrap(first);
    second = unwrap(second);
    
    return f(first, second);
  };

  var processTypesStructure = function (f, first, second) {
    if(typeof first !== 'object' || typeof second !== 'object') {
      return false;
    }

    if(first && second && (first.constructor === Array || second.constructor === Array)) {
      return false;
    }

    return f(first, second);
  };

  var setup = function (comparer, f) {
    return wrap(bind(comparer, cmp), f);
  };

  for(var i in cmp) {
    if(cmp.hasOwnProperty(i)) {
      if(i.length === 3) {
        exports[i] = exports[alias[i]] = setup(cmp[i], processTypesStructure);
      } else {
        exports[i] = exports[alias[i]] = setup(cmp[i], processTypes);
      }
    }
  }
})(typeof exports !== 'undefined' ? exports : window.cmp = {});
