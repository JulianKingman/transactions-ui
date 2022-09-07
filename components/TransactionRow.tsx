import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Transaction } from '../api/getTransactions';
import { colors, font, spacing } from '../theme';

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow = ({
  transaction: { amount, date, description, title },
}: TransactionRowProps) => {
  return (
    <View style={styles.wrapper} accessibilityLabel="Transaction Row">
      <View style={styles.container}>
        <View>
          <Text>
            {new Date(date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </Text>
          <Text>{description}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={[{ color: +amount > 1 ? colors.green : colors.black }, styles.rightText]}>
            {amount}
          </Text>
          <Text style={[font.caption, styles.rightText]}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightText: {
    textAlign: 'right',
  },
  wrapper: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderColor: colors.grey,
    borderWidth: 0.5,
  },
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rightSection: { flexDirection: 'column', justifyContent: 'flex-end' },
});

export default TransactionRow;
