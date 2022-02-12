import { it } from 'eslint/lib/rule-tester/rule-tester';
import { reverseArray } from './reverse';

it('should get array only', () => {
  const result = reverseArray('sdjjde');
  expect(result).toEqual(null);
});
it(' should check arr.length more then 0 ', () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});
it('should get reverse order of numbers', () => {
  const result = reverseArray([5, 7, 4, 9, 2]);
  expect(result).toEqual([2, 9, 4, 7, 5]);
});
