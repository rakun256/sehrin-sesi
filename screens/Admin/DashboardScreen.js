import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        dispatch(logout());
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>👑 Admin Dashboard 👑</Text>
            <Button title="Çıkış Yap!" onPress={handleLogout} />
        </View>
    )
};

export default DashboardScreen;