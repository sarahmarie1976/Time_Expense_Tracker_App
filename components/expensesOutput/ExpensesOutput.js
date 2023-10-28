import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Shoes',
        amount: 59.99,
        data: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'Pants',
        amount: 89.79,
        data: new Date('2023-01-05')
    },
    {
        id: 'e3',
        description: 'Bannas',
        amount: 2.89,
        data: new Date('2022-12-01')
    },
    {
        id: 'e4',
        description: 'Book - The Traitors Mark',
        amount: 29.65,
        data: new Date('2023-07-18')
    },
    {
        id: 'e5',
        description: 'Book - Working Stiff',
        amount: 14.99,
        data: new Date('2022-05-05')
    },
    
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return(
     <View >
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
       <ExpensesList />
     </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({})