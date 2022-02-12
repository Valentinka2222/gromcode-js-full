import { it } from 'eslint/lib/rule-tester/rule-tester';
import { getEvenNumbers } from './calculator.js';

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
