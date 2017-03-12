# getCombinationsOfTwoEntriesArray

getCombinationsOfTwoEntriesArray is a method to get all the combinations of a two-entries array

## Install

```
npm install get-combinations-of-two-entries-array
```

It can be linked as a script into the browser or used as a npm module

## Example

I have 3 sets of filters to combine together

```
const filters = [
    [{filter:'A0'}, {filter:'A1'}, {filter:'A2'}],
    [{filter:'B0'}, {filter:'B1'}, {filter:'B2'}, {filter:'B3'}],
    [{filter:'C0'}, {filter:'C1'}],
];

const combinations = getCombinationsOfTwoEntriesArray(filters);
document.write(JSON.stringify(combinations));
```

the result

```
[
    [{"filter":"A0"},{"filter":"B0"},{"filter":"C0"}],
    [{"filter":"A0"},{"filter":"B0"},{"filter":"C1"}],
    [{"filter":"A0"},{"filter":"B1"},{"filter":"C0"}],
    [{"filter":"A0"},{"filter":"B1"},{"filter":"C1"}],
    [{"filter":"A0"},{"filter":"B2"},{"filter":"C0"}],
    [{"filter":"A0"},{"filter":"B2"},{"filter":"C1"}],
    [{"filter":"A0"},{"filter":"B3"},{"filter":"C0"}],
    [{"filter":"A0"},{"filter":"B3"},{"filter":"C1"}],
    [{"filter":"A1"},{"filter":"B0"},{"filter":"C0"}],
    [{"filter":"A1"},{"filter":"B0"},{"filter":"C1"}],
    [{"filter":"A1"},{"filter":"B1"},{"filter":"C0"}],
    [{"filter":"A1"},{"filter":"B1"},{"filter":"C1"}],
    [{"filter":"A1"},{"filter":"B2"},{"filter":"C0"}],
    [{"filter":"A1"},{"filter":"B2"},{"filter":"C1"}],
    [{"filter":"A1"},{"filter":"B3"},{"filter":"C0"}],
    [{"filter":"A1"},{"filter":"B3"},{"filter":"C1"}],
    [{"filter":"A2"},{"filter":"B0"},{"filter":"C0"}],
    [{"filter":"A2"},{"filter":"B0"},{"filter":"C1"}],
    [{"filter":"A2"},{"filter":"B1"},{"filter":"C0"}],
    [{"filter":"A2"},{"filter":"B1"},{"filter":"C1"}],
    [{"filter":"A2"},{"filter":"B2"},{"filter":"C0"}],
    [{"filter":"A2"},{"filter":"B2"},{"filter":"C1"}],
    [{"filter":"A2"},{"filter":"B3"},{"filter":"C0"}],
    [{"filter":"A2"},{"filter":"B3"},{"filter":"C1"}]
]
```