import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const users = [
      {
        email: "admin@demo.com",
        password: "123456",
        name: "Admin Ecem",
        role: "ADMIN",
      },
      {
        email: "user@demo.com",
        password: "123456",
        name: "User Emre",
        role: "USER",
      },
    ];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      const token = "mock-token-123";
      dispatch(loginSuccess({ user: matchedUser, token }));
      await AsyncStorage.setItem("token", token);
      Alert.alert("Giriş Başarılı", "Hoşgeldiniz " + matchedUser.name);
    } else {
      Alert.alert("Hata", "Email veya şifre hatalı.");
    }
  };

  return (<View style={{ padding: 20, marginTop: 100 }}>
    <Text style={{ fontSize: 24, marginBottom: 20 }}>Giriş Yap</Text>

    <Text>Email</Text>
    <TextInput
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
      keyboardType="email-address"
      style={{ borderBottomWidth: 1, marginBottom: 20 }}
    />

    <Text>Şifre</Text>
    <TextInput
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      style={{ borderBottomWidth: 1, marginBottom: 20 }}
    />

    <Button title="Giriş Yap" onPress={handleLogin} />
    <Button title="Kayıt Ol" onPress={() => navigation.navigate("Register")} />
  </View>);
};

export default LoginScreen;
