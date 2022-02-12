import { it } from 'eslint/lib/rule-tester/rule-tester';
import { withdraw } from './withdraw';

it('should get array only', () => {
  const result = withdraw('dfdf', 'greg', 'fgg', 5);
  expect(result).toEqual(null);
});

it('should get amount more then balances', () => {
  const result = withdraw(
    ['Ivan', 'Nina', 'Alla', 'Sergey'],
    [1000, 300, 250, 60],
    'Sergey',
    90
  );
  expect(result).toEqual(-1);
});

it('should get difference in balances and amount', () => {
  const result = withdraw(
    ['Ivan', 'Nina', 'Alla', 'Sergey'],
    [1000, 300, 250, 60],
    'Sergey',
    50
  );
  expect(result).toEqual(10);
});
