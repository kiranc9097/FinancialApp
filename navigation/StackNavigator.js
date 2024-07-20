import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}
