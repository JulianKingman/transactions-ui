import { render } from '@testing-library/react-native';
import getTransactions from '../../api/getTransactions';
import sortByDate from '../../utils/sortByDate';
import TransactionList from '../TransactionList';

jest.mock('../../api/getTransactions');

describe('TransactionList.tsx', () => {
  test('All rows are rendered', async () => {
    const transactions = await getTransactions();
    const transactionCount = transactions.length;
    const sortedTransactions = sortByDate(transactions);

    const {queryAllByLabelText} = render(<TransactionList transactions={sortedTransactions} loading={false} />);

    expect(queryAllByLabelText('Transaction Row').length).toEqual(transactionCount);
  });
});
