import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Button from "./buttons/loginButton";

export default function Login() {
    return (
        <LinearGradient
            colors={["#7BD2F6", "#946DED"]}
            style={styles.container}
        >
            <KeyboardAvoidingView
                behavor={Platform.OS === "ios" ? "padding" : "heidth"}
                style={styles.container}
            >
                <Text style={styles.h1}>Faça Seu Login</Text>

                <View style={styles.viewLoginSenha}>
                    <Text style={styles.labelLoginSenha}>USER:</Text>

                    <TextInput
                        textContentType="nickname"
                        style={styles.inputUser}
                        placeholder="Digite seu Usuário"
                    />
                </View>

                <View style={styles.viewLoginSenha}>
                    <Text style={styles.labelLoginSenha}>PASS:</Text>

                    <TextInput
                        style={styles.inputPass}
                        placeholder="Digite sua Senha"
                        textContentType="password"
                        secureTextEntry={true}
                    />
                </View>

                <Button />

            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
    },

    h1: {
        fontSize: 26,
        fontWeight: "800",
        fontStyle: "normal",
        color: "#fff",
        marginBottom: 30,
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },

    inputUser: {
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        paddingLeft: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderColor: "#fff",
        borderBottomWidth: 1,
        fontSize: 16,
    },

    inputPass: {
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        paddingLeft: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderColor: "#fff",
        borderBottomWidth: 1,
        fontSize: 16,
    },

    viewLoginSenha: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
    },

    labelLoginSenha: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        marginRight: 5,
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        paddingBottom: 12,
    },
});
