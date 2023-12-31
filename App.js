import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpenseScreen from './screens/AllExpenseScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpenseScreen';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';


const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return(
    <BottomTabs.Navigator screenOptions={({navigation}) =>({
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: GlobalStyles.colors.primary50,
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.primary50,
      headerRight: ({tintColor}) => (
        <IconButton
          icon='add' size={24}
          color={tintColor} 
          onPress={() => {
            navigation.navigate('ManageExpense')
          }}
        /> 
      
      )
    })} >

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
      <StatusBar style="light" />
      <ExpensesContextProvider >
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: GlobalStyles.colors.primary50
        }} >

        <Stack.Screen 
            name='ExpenseOverview'
            component={ExpensesOverview}
            options={{ headerShown: false}} />
          <Stack.Screen 
           name="ManageExpense"  
           component={ManageExpenseScreen} 
           options={{
            presentation: 'modal',
           }}/>
        
        </Stack.Navigator>
        
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
