const findAllNumbersWithSum = require('../index');

test('Test to get the correct combination of numbers', () => {
    const result = findAllNumbersWithSum([1,9,5,0,20,-4,12,16,7], 12);
    const result2 = findAllNumbersWithSum([1,9,5,0,20,-4,12,16,7, 11], 12);
    const result3 = findAllNumbersWithSum([1,9,5,0,20,-4,12,16], 12);
    
    expect(result).toStrictEqual([[12, 0], [16, -4], [7, 5]]);
    expect(result2).toStrictEqual([[12, 0], [16, -4], [7, 5], [11, 1]]);
    expect(result3).toStrictEqual([[12, 0], [16, -4]]);
});