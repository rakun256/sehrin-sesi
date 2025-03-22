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
  const [errors, setErrors] = useState({});
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

  const validateFields = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "Kullanıcı adı boş olamaz.";
    if (!form.email) newErrors.email = "Email boş olamaz.";
    if (!form.password) newErrors.password = "Şifre boş olamaz.";
    if (!form.firstName) newErrors.firstName = "Ad boş olamaz.";
    if (!form.lastName) newErrors.lastName = "Soyad boş olamaz.";
    if (!form.phoneNumber)
      newErrors.phoneNumber = "Telefon numarası boş olamaz.";
    if (!form.street) newErrors.street = "Sokak / Cadde boş olamaz.";
    if (!form.city) newErrors.city = "İlçe boş olamaz.";
    if (!form.state) newErrors.state = "Şehir boş olamaz.";
    if (!form.country) newErrors.country = "Ülke boş olamaz.";
    if (!form.zipCode) newErrors.zipCode = "Posta kodu boş olamaz.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

      <ScrollView
        style={styles.inputContainer}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <TextInput
          placeholder="Ad"
          value="form.firstName"
          onChangeText={(text) => handleInputChange("firstName", text)}
          onBlur={validateFields}
          style={[
            styles.textInput,
            errors.firstName && { borderColor: Colors.error },
          ]}
          placeholderTextColor={
            errors.firstName ? Colors.error : Colors.mutedText
          }
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firsName}</Text>
        )}
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
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 4,
  },  
});

export default RegisterScreen;
