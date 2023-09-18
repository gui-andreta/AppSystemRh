import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    return (
        <LinearGradient
            colors={["#7BD2F6FF", "#946DEDFF"]}
            style={styles.container}
        >
            <Text>Hello World</Text>
            <TextInput
                textContentType="nickname"
                style={styles.inputUser}
                placeholder="Digite seu Usuário"
            />
            <TextInput
                style={styles.inputPass}
                placeholder="Digite sua Senha"
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    inputUser: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        paddingLeft: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
    },

    inputPass: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        paddingLeft: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
    },
});
