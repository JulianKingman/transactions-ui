import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import getTransactions, { Transactions, TransactionType } from './api/getTransactions';
import TransactionFilter from './components/TransactionFilter';
import TransactionList from './components/TransactionList';
import filterByType from './utils/filterByType';
import sortByDate from './utils/sortByDate';

export default function App() {
  const [transactions, setTransactions] = useState<Transactions>([]);
  const [typeFilter, setTypeFilter] = useState<TransactionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTransactions().then((fetchedTransactions) => {
      setTransactions(sortByDate(fetchedTransactions));
      setLoading(false);
    });
  }, []);

  const filteredTransactions = useMemo(
    () => filterByType(transactions, typeFilter),
    [transactions, typeFilter]
  );

  return (
    <SafeAreaView>
      <TransactionFilter onPress={setTypeFilter} selectedType={typeFilter} />
      <TransactionList transactions={filteredTransactions} {...{ loading }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
