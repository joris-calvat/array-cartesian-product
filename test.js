const getCombinationsOfTwoEntriesArray = require('./getCombinationsOfTwoEntriesArray.js');

const filters = [
    [{filter:'A0'}, {filter:'A1'}, {filter:'A2'}],
    [{filter:'B0'}, {filter:'B1'}, {filter:'B2'}, {filter:'B3'}],
    [{filter:'C0'}, {filter:'C1'}],
];

const combinations = getCombinationsOfTwoEntriesArray(filters);

console.log('combinations array should have a length equal to 24, its length is ' + combinations.length);

if(combinations.length === 24) {
    console.log('SUCCESS');
}
else {
    console.log('FAILED');
}