import getTransactions, { Transactions } from '../../api/getTransactions';
import sortByDate from '../sortByDate';

jest.mock('../../api/getTransactions');

describe('sortByDate.ts', () => {
  test('sorts by date', async () => {
    const transactions = await getTransactions();
    const sortedByDate = sortByDate(transactions);

    expect(Date.parse(sortedByDate[0].date) >= Date.parse(sortedByDate[1].date)).toBeTruthy();
  });

  test('handles empty transactions', () => {
    const transactions = [] as Transactions;
    const sortedTransactions = sortByDate(transactions);
    expect(transactions).toMatchObject(sortedTransactions);
  });
});
