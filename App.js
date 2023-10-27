import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpenseScreen from './screens/AllExpenseScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpenseScreen';

import { GlobalStyles } from './constants/styles';


const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return(
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: GlobalStyles.colors.primary50,
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.primary50,
    }} >

      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenseScreen} 
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }} />
      <BottomTabs.Screen 
       name='AllExpenses' 
       component={AllExpenseScreen}
       options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar-outline" size={size} color={color} />
        ),
      }} />
      
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer >
        <Stack.Navigator >

        <Stack.Screen 
            name='ExpenseOverview'
            component={ExpensesOverview}
            options={{ headerShown: false}} />
          <Stack.Screen 
           name="ManageExpense"  
           component={ManageExpenseScreen} />
        
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
