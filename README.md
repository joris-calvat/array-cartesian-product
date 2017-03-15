# array-cartesian-product

array-cartesian-product is a method to get the cartesian product combinations of a two-entries array

## Install

```
npm install array-cartesian-product
```

It can be linked as a script into the browser or used as a npm module

## Example

I have 3 sets of filters to combine together

```
const arrayCartesianProduct = require('arrayCartesianProduct');

const filters = [
    [{filter:'A0'}, {filter:'A1'}, {filter:'A2'}],
    [{filter:'B0'}, {filter:'B1'}, {filter:'B2'}, {filter:'B3'}],
    [{filter:'C0'}, {filter:'C1'}],
];

const combinations = arrayCartesianProduct(filters);
console.log(combinations);
```

the result

```
[ [ { filter: 'A0' }, { filter: 'B0' }, { filter: 'C0' } ],
  [ { filter: 'A0' }, { filter: 'B0' }, { filter: 'C1' } ],
  [ { filter: 'A0' }, { filter: 'B1' }, { filter: 'C0' } ],
  [ { filter: 'A0' }, { filter: 'B1' }, { filter: 'C1' } ],
  [ { filter: 'A0' }, { filter: 'B2' }, { filter: 'C0' } ],
  [ { filter: 'A0' }, { filter: 'B2' }, { filter: 'C1' } ],
  [ { filter: 'A0' }, { filter: 'B3' }, { filter: 'C0' } ],
  [ { filter: 'A0' }, { filter: 'B3' }, { filter: 'C1' } ],
  [ { filter: 'A1' }, { filter: 'B0' }, { filter: 'C0' } ],
  [ { filter: 'A1' }, { filter: 'B0' }, { filter: 'C1' } ],
  [ { filter: 'A1' }, { filter: 'B1' }, { filter: 'C0' } ],
  [ { filter: 'A1' }, { filter: 'B1' }, { filter: 'C1' } ],
  [ { filter: 'A1' }, { filter: 'B2' }, { filter: 'C0' } ],
  [ { filter: 'A1' }, { filter: 'B2' }, { filter: 'C1' } ],
  [ { filter: 'A1' }, { filter: 'B3' }, { filter: 'C0' } ],
  [ { filter: 'A1' }, { filter: 'B3' }, { filter: 'C1' } ],
  [ { filter: 'A2' }, { filter: 'B0' }, { filter: 'C0' } ],
  [ { filter: 'A2' }, { filter: 'B0' }, { filter: 'C1' } ],
  [ { filter: 'A2' }, { filter: 'B1' }, { filter: 'C0' } ],
  [ { filter: 'A2' }, { filter: 'B1' }, { filter: 'C1' } ],
  [ { filter: 'A2' }, { filter: 'B2' }, { filter: 'C0' } ],
  [ { filter: 'A2' }, { filter: 'B2' }, { filter: 'C1' } ],
  [ { filter: 'A2' }, { filter: 'B3' }, { filter: 'C0' } ],
  [ { filter: 'A2' }, { filter: 'B3' }, { filter: 'C1' } ] ]
```