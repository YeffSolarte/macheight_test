const findAllNumbersWithSum = (listOfNumbers, targetSum) => {
    let listMap = new Map();
    let result = [];

    listOfNumbers.forEach(num => {
        if (listMap.has(targetSum - num)) {
            result.push([num, targetSum - num]);
        }
        listMap.set(num, true)
    });

    return result;
}

module.exports = findAllNumbersWithSum;