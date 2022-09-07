import React, { useMemo } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { Transactions } from '../api/getTransactions';
import { colors, spacing } from '../theme';
import filterByStatus from '../utils/filterByStatus';
import TransactionRow from './TransactionRow';

interface TransactionListProps {
  transactions: Transactions;
  loading: boolean;
}

const TransactionList = ({ transactions, loading }: TransactionListProps) => {
  const pending = filterByStatus(transactions, 'pending');
  const completed = filterByStatus(transactions, 'completed');

  const data = useMemo(
    () => [
      {
        title: 'Pending',
        data: pending,
      },
      {
        title: 'Completed',
        data: completed,
      },
    ],
    [transactions]
  );

  return (
    <SectionList
      renderSectionHeader={({ section: { title, data } }) =>
        data.length ? <Text style={styles.title}>{title}</Text> : null
      }
      sections={data}
      renderItem={({ item: transaction }) => <TransactionRow {...{ transaction }} />}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    fontSize: 17,
    backgroundColor: colors.grey,
  },
});

export default TransactionList;
