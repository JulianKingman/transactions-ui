import { Transactions, TransactionType } from '../api/getTransactions';

/**
 *
 * @param transactions returns transactions sorted descending by date
 * @returns
 */
const sortByDate = (transactions: Transactions): Transactions => {
  if (!transactions.length) return transactions;
  const sortedTransactions = transactions.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  return sortedTransactions;
};

export default sortByDate;
