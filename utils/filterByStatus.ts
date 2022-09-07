import { Transactions, TransactionStatus, TransactionType } from '../api/getTransactions';

const filterByStatus = (
  transactions: Transactions,
  status: TransactionStatus | null = null
): Transactions => {
  if (!transactions.length || !status) return transactions;
  return transactions.filter((transaction) => transaction.status === status);
};

export default filterByStatus;
