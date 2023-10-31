import { StyleSheet, Text, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenesList";

import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
  let content = <Text style={styles.inforText} > {fallbackText} </Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }
    return(
     <View style={styles.container} >
       <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
       {content}
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
    inforText: {
        color: GlobalStyles.colors.primary50,
        fontSize: 18, 
        textAlign: 'center',
        marginTop: 32,
    }, 
})