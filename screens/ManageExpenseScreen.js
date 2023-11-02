import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

function ManageExpenseScreen({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext)

  const editedExpensedId = route.params?.expenseId
  const isEditing = !!editedExpensedId

  const selectedExpense = expensesCtx.expenses.find(expense => 
    expense.id === editedExpensedId)

  useLayoutEffect(() => {
    navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
      })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    navigation.goBack()
    expensesCtx.deleteExpense(editedExpensedId)
  }

  function cancelHandler(){
    navigation.goBack()
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpensedId, expenseData);
    } else {
      storeExpense(expenseData)
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

    return(
     <View style={styles.container} >
       <ExpenseForm
         submitButtonLabel={isEditing ? 'Update' : 'Add'}
         onSumit={confirmHandler}
         onCancel={cancelHandler} 
         defaultValues={selectedExpense}
        />
        {isEditing && (
          <View style={styles.deleteContainer} >
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler} 
            />
          </View>
        )}
     </View>
    )
}  
    export default ManageExpenseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2, 
        borderTopColor: GlobalStyles.colors.primary50,
        alignItems: 'center',
    },
})