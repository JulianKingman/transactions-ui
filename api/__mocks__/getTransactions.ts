import { Transactions } from '../getTransactions';

const transactions: Transactions = [
  {
    id: '1',
    amount: '1.00',
    date: '2022-01-01',
    title: 'Bank Transfer',
    description: 'ACH Transfer #0933',
    type: 'deposit',
    status: 'completed',
  },
  {
    id: '2',
    amount: '-2.00',
    date: '2022-01-02',
    title: 'Debit Purchase',
    description: 'Fast Food Restaurant #4000',
    type: 'debit',
    status: 'pending',
  },
  {
    id: '3',
    amount: '3.00',
    date: '2022-01-03',
    title: 'Bank Transfer',
    description: 'ACH Transfer #0921',
    type: 'deposit',
    status: 'pending',
  },
  {
    id: '4',
    amount: '-4.00',
    date: '2022-01-04',
    title: 'Debit Purchase',
    description: 'Auto Parts Store #200',
    type: 'debit',
    status: 'completed',
  },
];

const getTransactions = (): Promise<Transactions> =>
  new Promise((resolve) => {
    resolve(transactions);
  });

export default getTransactions;
