import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/colors";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();

  const validateFields = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email alanı boş bırakılamaz.";
    if (!password) newErrors.password = "Şifre alanı boş bırakılamaz.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      Alert.alert("Eksik veya Hatalı Bilgi", errorMessages);
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    const isValid = validateFields();
    if (!isValid) return;

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.titleBrand}>ŞehrinSesi</Text>
          <Text style={styles.title}>Giriş Yap</Text>
        </View>

        <View style={styles.middleContent}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
              style={[
                styles.textInput,
                errors.email && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.email ? Colors.error : Colors.mutedText
              }
            />

            <TextInput
              ref={passwordRef}
              returnKeyType="done"
              placeholder="Şifre"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={[
                styles.textInput,
                errors.password && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.password ? Colors.error : Colors.mutedText
              }
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  titleBrand: {
    fontSize: 48,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "normal",
    color: Colors.text,
    textAlign: "center",
  },
  topContent: {
    marginBottom: 40,
  },
  middleContent: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 24,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: Colors.white,
    color: Colors.text,
  },
  buttonContainer: {
    marginTop: 8,
  },
  button: {
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.primaryDark,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  secondaryButtonText: {
    color: Colors.primaryDark,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 4,
  },
});

export default LoginScreen;
