const getCombinationsOfTwoEntriesArray = (twoEntriesArray) => {

    var allCombinations = [];

    const parseColumn = (arr, combination = []) => {

        if(arr.length === 0) {
            allCombinations = [...allCombinations, combination];
            return;
        }
        
        parseValues(arr[0], combination, arr);
    }

    const parseValues = (values, combination, arr) => {

        if(values.length === 0) return;

        parseColumn(arr.slice(1), [...combination.slice(0), values[0]]);
        parseValues(values.slice(1), combination, arr);
    }

    parseColumn(twoEntriesArray);

    return allCombinations;
}

if(module && module.exports) {
    module.exports = getCombinationsOfTwoEntriesArray;
}

