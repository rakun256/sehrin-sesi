import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";

const RootNavigator = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const checkToken = async () => {
            try{
                const token = await AsyncStorage.getItem("token");

                if(token){
                    const user = { name: "Ecem", email: "ecem@terapinisec.com"};

                    dispatch(loginSuccess({user, token}));
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.log("Token kontrol hatası: ", error);
                setAuthenticated(false);
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
        <NavigationContainer>
            {authenticated ? <AppStack /> : <AuthStack />}
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