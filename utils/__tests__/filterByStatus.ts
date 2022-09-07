import getTransactions, { Transaction, Transactions } from '../../api/getTransactions';
import filterByStatus from '../filterByStatus';

jest.mock('../../api/getTransactions');

describe('filterByStatus.ts', () => {
  test('filters by status', async () => {
    const transactions = await getTransactions();
    const filteredTransactions = filterByStatus(transactions, 'pending');
    filteredTransactions.forEach((transaction: Transaction) => {
      expect(transaction).toMatchObject({ status: 'pending' });
    });
    const unfilteredTransactions = filterByStatus(transactions, null);
    expect(unfilteredTransactions).toMatchObject(transactions);
  });
  test('handles empty transactions', async () => {
    const transactions = [] as Transactions;
    const filteredTransactions = filterByStatus(transactions, 'pending');
    expect(transactions).toMatchObject(filteredTransactions);
  });
});
