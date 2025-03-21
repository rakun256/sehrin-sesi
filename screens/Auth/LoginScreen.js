import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({navigation}) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login Screen</Text>
        <Button
            title="Click Here"
            onPress={() => navigation.navigate("Register")}
        />
    </View>
)

export default LoginScreen;