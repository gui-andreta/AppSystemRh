import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SingIn";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
    </AuthStack.Navigator>
}