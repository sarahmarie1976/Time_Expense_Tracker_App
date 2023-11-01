import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constants/styles";

import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpenseScreen({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext)

  const editedExpensedId = route.params?.expenseId
  const isEditing = !!editedExpensedId

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

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpensedId,
        {
          description: 'Test!!!!',
          amount: 9.99,
          date: new Date('2023-10-31'),
        }
      );
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2023-10-30'),
      });
    }
    navigation.goBack();
  }

    return(
     <View style={styles.container} >
       <ExpenseForm
         submitButtonLabel={isEditing ? 'Update' : 'Add'}
         onCancel={cancelHandler} />
        {isEditing && (
          <View style={styles.deleteContainer} >
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler} />
        
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