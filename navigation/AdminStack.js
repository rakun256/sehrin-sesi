import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/Admin/DashboardScreen";

const Stack = createNativeStackNavigator();

const AdminStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
);

export default AdminStack;