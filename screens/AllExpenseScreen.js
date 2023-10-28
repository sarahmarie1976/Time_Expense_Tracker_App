import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";


function AllExpenseScreen() {
    return(
      <ExpensesOutput expensesPeriod="Total" />
    
    )
}

export default AllExpenseScreen

const styles = StyleSheet.create({}) 