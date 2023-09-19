import React from "react";
import {Text, StyleSheet, Pressable} from "react-native";

export default function Button(props) {
    const {onPress, title = "Login"} = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: "#7BD2F6",
        marginTop: 40,
        borderColor: "#000",
        borderWidth: 1,
        
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: "white",
        fontWeight: "500",
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },
});
