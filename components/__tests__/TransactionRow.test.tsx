import { render } from '@testing-library/react-native';
import getTransactions from '../../api/getTransactions';
import TransactionRow from '../TransactionRow';

jest.mock('../../api/getTransactions');

describe('TransactionRow.tsx', () => {
  test('Values appear on rows', async () => {
    const transactions = await getTransactions();
    const transaction = transactions[0];
    const { amount, date, description, title } = transaction;
    const formattedDate = new Date(date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    const { getByText } = render(<TransactionRow transaction={transaction} />);

    expect(getByText(amount)).not.toBeNull();
    expect(getByText(formattedDate)).not.toBeNull();
    expect(getByText(description)).not.toBeNull();
    expect(getByText(title)).not.toBeNull();
  });
});
