import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";




function ExpenseItem({description, amount, date}) {
    return(
        <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary600,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 18,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.primary50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        minWidth: 80,

    },
    amount: {
        color: GlobalStyles.colors.primary600,
        fontWeight: 'bold',
    },
})