import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Register Screen</Text>
        <Button 
            title="Click Here"
            onPress={() => navigation.navigate("Login")}
        />
    </View>
)

export default LoginScreen;