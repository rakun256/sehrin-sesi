import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/App/HomeScreen"
import ProfileScreen from "../screens/App/ProfileScreen"

const Stack = createNativeStackNavigator();

const AppStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
);

export default AppStack;