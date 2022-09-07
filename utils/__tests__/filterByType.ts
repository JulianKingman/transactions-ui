import getTransactions, { Transaction, Transactions } from '../../api/getTransactions';
import filterByType from '../filterByType';

jest.mock('../../api/getTransactions');

describe('filterByType.ts', () => {
  test('filters by status', async () => {
    const transactions = await getTransactions();
    const filteredTransactions = filterByType(transactions, 'debit');
    filteredTransactions.forEach((transaction: Transaction) => {
      expect(transaction).toMatchObject({ type: 'debit' });
    });
    const unfilteredTransactions = filterByType(transactions, null);
    expect(unfilteredTransactions).toMatchObject(transactions);
  });
  test('handles empty transactions', async () => {
    const transactions = [] as Transactions;
    const filteredTransactions = filterByType(transactions, 'debit');
    expect(transactions).toMatchObject(filteredTransactions);
  });
});
