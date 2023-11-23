const { getEvenNumbers, sumArray } = require('./arrayUtils');

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = getEvenNumbers(numbers);
console.log('Even Numbers:', evenNumbers);

const sum = sumArray(numbers);
console.log('Sum:', sum);