import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message }) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Opps something happened!</Text>
        <Text style={styles.text}>{message}</Text>
      </View>
    );
  }

export default ErrorOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24, 
        backgroundColor: GlobalStyles.colors.primary800,
    },
    text: {
        color: GlobalStyles.colors.primary50,
        textAlign: 'center',
        marginBottom: 8,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 18,
    },
})