import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  })  
    
  function inputChangedHandler( inputIdentifier ,enteredValue ) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue
      }
    })
  }

   return(
    <View style={styles.form} >
        <View >
          <Text style={styles.title} > Enter Your Details  </Text>
          </View>
        <View style={styles.inputsRow} >
        <Input
            style={styles.rowInput}
            label="Amount"
            textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount
        }} />  
        <Input 
            style={styles.rowInput}
            label='Date'
            textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxlength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date
            }} /> 
        </View> 
      <Input 
        label='Description'
        textInputConfig={{
          multiline: true,
        //   autoCorrect: false // default is true
        autoCapitalizes: 'sentences',
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValues.description
        }} /> 
    </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary50,
        marginVertical: 24, 
        textAlign: 'center',
    }, 
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
})