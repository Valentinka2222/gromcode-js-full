import { it } from 'eslint/lib/rule-tester/rule-tester';
import { getAdults } from './getAdults';

it('shoult get key in object more then 18 ', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('shoult get key in object more then 18 ', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('should get object only', () => {
  const result = reverseArray('sdjjde');
  expect(result).toEqual(null);
});
