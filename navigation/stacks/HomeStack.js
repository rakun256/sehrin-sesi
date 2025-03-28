import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  HomeScreen  from "../../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
            title: "Harita"
        }}
        />
    </Stack.Navigator>
}

export default HomeStack;