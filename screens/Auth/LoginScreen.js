import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.textInput}
        />

        <TextInput
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.textInput}
        />
      </View>
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Button
        title="Kayıt Ol"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    padding: 20,
  },
  title: {
    position: "relative",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    top: 0,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default LoginScreen;
