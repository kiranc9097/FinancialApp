import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { transactions } from './data'; 

export default function Summary() {
  if (transactions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Summary</Text>
        <Text>No transactions available.</Text>
      </View>
    );
  }

  const totalExpenses = transactions.reduce((total, transaction) => {
    const amount = parseFloat(transaction.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  const sortedTransactions = transactions.slice().sort((a, b) => b.amount - a.amount);
  const highestSpending = sortedTransactions[0];
  const lowestSpending = sortedTransactions[sortedTransactions.length - 1];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary</Text>

      <View style={styles.card}>
        <View style={styles.item}>
          <MaterialIcons name="format-list-numbered" size={24} color="black" />
          <Text style={styles.text}>No. of Transactions: {transactions.length}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.item}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text style={styles.text}>Total Expenses: ${totalExpenses.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.boldText}>Highest Spending</Text>
        {highestSpending && (
          <View style={styles.item}>
            <Text style={styles.text}>{highestSpending.name}</Text>
            <Text style={styles.text}>${parseFloat(highestSpending.amount).toFixed(2)}</Text>
          </View>
        )}
        <View style={styles.separator} />
        <Text style={styles.boldText}>Lowest Spending</Text>
        {lowestSpending && (
          <View style={styles.item}>
            <Text style={styles.text}>{lowestSpending.name}</Text>
            <Text style={styles.text}>${parseFloat(lowestSpending.amount).toFixed(2)}</Text>
          </View>
        )}
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
