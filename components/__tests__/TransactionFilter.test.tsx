import { render, screen, fireEvent } from '@testing-library/react-native';
import TransactionFilter from '../TransactionFilter';

describe('TransactionFilter.tsx', () => {
  test('Pressing filter calls onPress with type', () => {
    const onPress = jest.fn();
    const selectedType = null;
    const { getByText } = render(
      <TransactionFilter onPress={onPress} selectedType={selectedType} />
    );

    fireEvent.press(getByText('Debit'));

    expect(onPress).toBeCalledWith('debit');
  });
});
