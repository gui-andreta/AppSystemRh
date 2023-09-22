import React from "react";
import {Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";

export default function Button(props) {
    const {onPress, title = "Login"} = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 40,
        borderColor: "#fff",
        borderWidth: 2,
        width: "80%",
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: "white",
        fontWeight: "500",
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },
});
