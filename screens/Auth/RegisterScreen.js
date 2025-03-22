import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../../constants/colors";

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firsName: "",
    lastName: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const handleInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleRegister = () => {
    console.log("Kayıt verileri:", form);
    Alert.alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topComponent}>
        <Text style={styles.titleBrand}>ŞehrinSesi</Text>
        <Text style={styles.title}>Kayıt Ol</Text>
      </View>

      <ScrollView style={styles.inputContainer}>
        <TextInput
          placeholder="Ad"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("firstName", text)}
        />
        <TextInput
          placeholder="Soyad"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("lastName", text)}
        />
        <TextInput
          placeholder="Kullanıcı Adı"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("username", text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <TextInput
          placeholder="Şifre"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(text) => handleInputChange("password", text)}
        />
        <TextInput
          placeholder="Telefon Numarası"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
        />
        <TextInput
          placeholder="Sokak / Cadde"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("street", text)}
        />
        <TextInput
          placeholder="İlçe"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("city", text)}
        />
        <TextInput
          placeholder="Şehir"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("state", text)}
        />
        <TextInput
          placeholder="Ülke"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("country", text)}
        />
        <TextInput
          placeholder="Posta Kodu"
          style={styles.textInput}
          onChangeText={(text) => handleInputChange("zipCode", text)}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Zaten hesabınız var mı? Giriş yapın.</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    topComponent: {
      marginBottom: 32,
    },
    inputContainer: {
      flex: 1,
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
      paddingBottom: 32,
    },
    button: {
      height: 50,
      borderRadius: 12,
      backgroundColor: Colors.primaryDark,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: "bold",
    },
    link: {
      textAlign: "center",
      color: Colors.primaryDark,
      fontSize: 14,
      textDecorationLine: "underline",
      fontWeight: "600",
    },
  });
  
export default RegisterScreen;
