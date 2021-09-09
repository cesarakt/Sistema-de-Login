import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
    },
    inputArea: {
        width: 300,
        padding: 15,
        justifyContent: 'flex-start',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 3},
        elevation: 1.3
    },
    texto: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    input: {
        borderColor: '#DDD',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20
    },
    btn: {
        marginVertical: 10
    }
});

export default styles;