import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";


function AllExpenseScreen() {
  const expensesCtx = useContext(ExpensesContext)

    return(
      <ExpensesOutput 
        expenses={expensesCtx.expenses} 
        expensesPeriod="Total" 
        fallbackText={"No registered expenses found!"}
      />
    
    )
}

export default AllExpenseScreen

const styles = StyleSheet.create({}) 