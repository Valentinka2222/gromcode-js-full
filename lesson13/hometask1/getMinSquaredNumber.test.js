import { it } from 'eslint/lib/rule-tester/rule-tester';
import getMinSquaredNumber from './getMinSquaredNumber';

it(' should check arr.length more then 0 ', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get array only', () => {
  const result = getMinSquaredNumber('sdjjde');
  expect(result).toEqual(null);
});
it('should get square minimal modulo the number only', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
