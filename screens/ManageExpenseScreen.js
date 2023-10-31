import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constants/styles";

import Button from "../components/UI/Button";

function ManageExpenseScreen({route, navigation}) {
  const editedExpensedId = route.params?.expenseId
  const isEditing = !!editedExpensedId

  useLayoutEffect(() => {
    navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
      })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    navigation.goBack()
  }

  function cancelHandler(){
    navigation.goBack()
  }

  function confirmHandler() {
    navigation.goBack()
  }

    return(
     <View style={styles.container} >
        <View style={styles.buttons} >
            <Button style={styles.button} mode='flat' onPress={cancelHandler} >Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler} >{isEditing ? 'Update' : 'Add'}</Button>
         
        </View>

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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    } ,
    button: {
        minWidth: 120,
        marginHorizontal: 8,
        
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2, 
        borderTopColor: GlobalStyles.colors.primary50,
        alignItems: 'center',
    },
})