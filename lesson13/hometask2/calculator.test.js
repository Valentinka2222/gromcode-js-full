import { it } from 'eslint/lib/rule-tester/rule-tester';
import { calc } from './calculator';

it('should get string only', () => {
  const result = calc(5 + 4);
  expect(result).toEqual(null);
});

it('should get substraction of numbers', () => {
  const result = calc('5 - 4');
  expect(result).toEqual('5 - 4 = 1');
});
it('should get addition of numbers', () => {
  const result = calc('5 + 4');
  expect(result).toEqual('5 + 4 = 9');
});
it('should get multiplication of numbers', () => {
  const result = calc('5 * 4');
  expect(result).toEqual('5 * 4 = 20');
});
it('should get division of numbers', () => {
  const result = calc('20 / 4');
  expect(result).toEqual('20 / 4 = 5');
});
