import { Alert, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ defaultValues ,onCancel, onSumit, submitButtonLabel }) {
  const [inputs, setInputs] = useState({
    amount: {
        value: defaultValues ? defaultValues.amount.toString() : '',
        isValid: true,
    },
    date: {
        value: defaultValues ? getFormattedDate(defaultValues.date) : '',
        isValid: true, 
    },
    description: {
        value: defaultValues ? defaultValues.description : '',
        isValid: true, 
    }
  })  
    
  function inputChangedHandler( inputIdentifier ,enteredValue ) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]:{ value: enteredValue, isValid: true }
      }
    })
  }

  function submitHandler() {
    const expenseData = {
        amount: +inputs.amount.value, // + converts a string to a number
        date: new Date(inputs.date.value),
        description: inputs.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
    //   Alert.alert('Invalid Input!', 
    //   'Oops! Check your entries and try again.')
      setInputs((currentInputs) => {
        return {
          amount: {value: currentInputs.amount.value, isValid: amountIsValid},
          date: {value: currentInputs.date.value, isValid: dateIsValid},
          description: {
            value: currentInputs.description.value, 
            isValid: descriptionIsValid},
        }
      })
        return
    }
    onSumit(expenseData)
  }

    const formIsInvalid = 
      !inputs.amount.isValid ||
      !inputs.date.isValid ||
      !inputs.description.isValid

   return(
    <View style={styles.form} >
        <View >
          <Text style={styles.title} > Enter Your Details  </Text>
          </View>
        <View style={styles.inputsRow} >
        <Input
            style={styles.rowInput}
            label="Amount"
            invalid={!inputs.amount.isValid}
            textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value
        }} />  
        <Input 
            style={styles.rowInput}
            label='Date'
            invalid={!inputs.date.isValid}
            textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxlength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value
            }} /> 
        </View> 
      <Input 
        label='Description'
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
        //   autoCorrect: false // default is true
        autoCapitalizes: 'sentences',
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputs.description.value
        }} /> 


        {formIsInvalid && <Text style={styles.errorText} > Oops! Check your entries and try again. </Text>}

    <   View style={styles.buttons} >
            <Button 
              style={styles.button} 
              mode='flat' 
              onPress={onCancel} >Cancel</Button>
            <Button 
              style={styles.button} 
              onPress={submitHandler} >
               {submitButtonLabel} </Button>
        </View>
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
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
        fontSize: 16,
        fontWeight: '700',
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
    
})