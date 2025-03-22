import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import AdminStack from "./AdminStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import api from "../api/axios";

const RootNavigator = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            try{
                const token = await AsyncStorage.getItem("token");

                if(token){
                    {/* 
                    const response = await api.get("/me");
                    const user = response.data;
                    dispatch(loginSuccess({user, token}));
                    */}
                } 
            } catch (error) {
                console.log("Token kontrol hatası: ", error);
            } finally {
                setLoading(false);
            }
        };

        checkToken();
    });

    if(loading){
        return null;
    }

    return (
        <NavigationContainer >

            {user ? (
                user.role === "ADMIN" ? <AdminStack /> : <AppStack />
            ) : (
                <AuthStack />
            )}

        </NavigationContainer>
    );
};

export default RootNavigator;

{
    /* 
    logout butonu için
    await AsyncStorage.removeItem('token');
    dispatch(logout());
    */
}