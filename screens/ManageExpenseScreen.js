import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpenseScreen({route, navigation}) {
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  async function deleteExpenseHandler() {
    setIsSubmitting(true)
    await deleteExpense(editedExpensedId)
    //setIsSubmitting(false)
    expensesCtx.deleteExpense(editedExpensedId)
    navigation.goBack()
  }

  function cancelHandler(){
    navigation.goBack()
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true)
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpensedId, expenseData);
       await updateExpense(editedExpensedId, expenseData)
    } else {
      const id = await storeExpense(expenseData)
      expensesCtx.addExpense({...expenseData, id: id});
    }
    navigation.goBack();
  }

  if (isSubmitting) {
    return <LoadingOverlay  />
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