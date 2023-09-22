import React from "react";
import Dashboard from "../pages/Dashboard";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>;
}
