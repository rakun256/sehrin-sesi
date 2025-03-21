import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default RootNavigator;