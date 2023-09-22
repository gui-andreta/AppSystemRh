import React from "react";
import SignIn from "../pages/SingIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
    </AuthStack.Navigator>
}