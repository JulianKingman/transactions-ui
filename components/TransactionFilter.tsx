import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TransactionType } from '../api/getTransactions';
import { border, colors, spacing } from '../theme';

interface TransactionFilterProps {
  onPress: (type: TransactionType | null) => void;
  selectedType: TransactionType | null;
}

const TransactionFilterButton = ({
  onPress,
  type,
  title,
  selectedType,
}: TransactionFilterProps & { type: TransactionType | null; title: string }) => {
  const setFilter = useCallback(() => onPress(type), [type, onPress]);
  const selectedStyle = useMemo(
    () => (selectedType === type ? { backgroundColor: colors.grey } : {}),
    [selectedType, type]
  );
  return (
    <TouchableOpacity style={[styles.button, selectedStyle]} onPress={setFilter} accessibilityLabel={`filter-${type}`}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const TransactionFilter = ({ onPress, selectedType }: TransactionFilterProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TransactionFilterButton title="All" type={null} {...{ onPress, selectedType }} />
      <TransactionFilterButton title="Debit" type={'debit'} {...{ onPress, selectedType }} />
      <TransactionFilterButton title="Deposit" type={'deposit'} {...{ onPress, selectedType }} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    ...border.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    margin: spacing.sm,
  },
});

export default TransactionFilter;
