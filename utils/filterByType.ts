import { Transactions, TransactionType } from '../api/getTransactions';

const filterByType = (
  transactions: Transactions,
  type: TransactionType | null = null
): Transactions => {
  if (!transactions.length || !type) return transactions;
  return transactions.filter((transaction) => transaction.type === type);
};

export default filterByType;
