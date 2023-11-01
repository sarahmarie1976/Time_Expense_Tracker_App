import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm() {
  function amountChangedHandler() {}

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
            onChangeText: amountChangedHandler,
        }} />  
        <Input 
            style={styles.rowInput}
            label='Date'
            textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxlength: 10,
            onChangeText: () => {}
            }} /> 
        </View> 
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