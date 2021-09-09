import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    titulo: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
    },
    areaInput: {
        width: 300,
        padding: 15,
        justifyContent: 'flex-start',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 1},
        elevation: 0.8
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