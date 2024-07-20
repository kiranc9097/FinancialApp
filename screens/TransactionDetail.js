import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.address}>{transaction.address}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Transaction Date:</Text>
        <Text style={styles.dateValue}>{transaction.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fcd703',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateValue: {
    fontSize: 16,
  },
});
