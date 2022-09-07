export type TransactionType = 'deposit' | 'debit';

export type TransactionStatus = 'pending' | 'completed';

export interface Transaction {
  id: string; // "transaction_93ox_wCmF4AmCB9cMqyWM"
  amount: string; // "200.00"
  date: string; // "2022-01-20"
  title: string; // "Bank Transfer"
  description: string; // "ACH Transfer #0933";
  type: TransactionType;
  status: TransactionStatus;
}

export type Transactions = Transaction[];

const getTransactions = async (): Promise<Transactions> => {
  const response = await fetch('https://storage.googleapis.com/code-exercise/transactions.json');
  const transactions = await response.json();
  return transactions.transaction;
};

export default getTransactions;
