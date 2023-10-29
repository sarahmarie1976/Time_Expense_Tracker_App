import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenesList";

import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'Pants',
        amount: 89.79,
        date: new Date('2023-01-05')
    },
    {
        id: 'e3',
        description: 'Bannas',
        amount: 2.89,
        date: new Date('2022-12-01')
    },
    {
        id: 'e4',
        description: 'Book - The Traitors Mark',
        amount: 29.65,
        date: new Date('2023-07-18')
    },
    {
        id: 'e5',
        description: 'Book - Working Stiff',
        amount: 14.99,
        date: new Date('2022-05-05')
    },
    {
        id: 'e6',
        description: 'Hair supplies',
        amount: 25.48,
        date: new Date('2022-12-19')
    },
    {
        id: 'e7',
        description: 'Sweat Shirt',
        amount: 40.00,
        date: new Date('2023-01-05')
    },
    {
        id: 'e8',
        description: 'Biscotti',
        amount: 9.98,
        date: new Date('2022-12-01')
    },
    {
        id: 'e9',
        description: 'Cat Litter',
        amount: 18.69,
        date: new Date('2023-07-18')
    },
    {
        id: 'e10',
        description: 'Art Supplies',
        amount: 50.37,
        date: new Date('2022-05-05')
    },
    
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return(
     <View style={styles.container} >
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
       <ExpensesList expenses={DUMMY_EXPENSES} />
     </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24, 
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
})