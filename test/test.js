
var assert = require('assert');

const arrayCartesianProduct = require('../arrayCartesianProduct.js');

const filters = [
    [{filter:'A0'}, {filter:'A1'}, {filter:'A2'}],
    [{filter:'B0'}, {filter:'B1'}, {filter:'B2'}, {filter:'B3'}],
    [{filter:'C0'}, {filter:'C1'}],
];

const combinations = arrayCartesianProduct(filters);

describe('Array combination', function() {
    it('should return an array with a length of 24', function() {
      assert.equal(combinations.length, 24);
    });
});