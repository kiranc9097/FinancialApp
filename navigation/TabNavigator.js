import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import StackNavigator from './StackNavigator';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            iconName = 'list';
          } else if (route.name === 'Summary') {
            iconName = 'bar-chart';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Transactions" component={StackNavigator} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
}
