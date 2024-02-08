const{sum, multiplyElementsByTwo} = require('./inputFunction')

test('add a and b', () => {
    let a = 2;
    let b = 4;
    let result = sum(a,b);
    expect(result).toBe(6);
})

test('multiply elements in an array by 2', () => {
    const myArray = [1,2,3,4];
    const result = multiplyElementsByTwo(myArray);
    expect(result).toEqual([2,4,6,8]);
})