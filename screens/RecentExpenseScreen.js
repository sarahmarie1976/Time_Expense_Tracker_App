import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

function RecentExpenseScreen() {
    return(
     <ExpensesOutput expensesPeriod="Last 7 Days" />
    )
}

export default RecentExpenseScreen

const styles = StyleSheet.create({})