const { getEvenNumbers, sumArray } = require('./arrayUtils');

test('Get even numbers from array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(getEvenNumbers(numbers)).toEqual([2, 4]);
});

test('Calculate sum of array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(sumArray(numbers)).toBe(15);
});