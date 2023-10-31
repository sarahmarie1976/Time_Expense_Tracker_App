import { StyleSheet, View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}

   return(
    <View >
      <Input 
        label='Amount' 
        textInputConfig={{
          KeyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
      }} />  
      <Input 
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxlength: 10,
          onChangeText: () => {}
        }} /> 
      <Input 
        label='Description'
        textInputConfig={{
          multiline: true,
        //   autoCorrect: false // default is true
        autoCapitalizes: 'sentences'
        }} /> 
    </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({})