import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Colors from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneNumberRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const zipCodeRef = useRef();

  const validateFields = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "Kullanıcı adı boş olamaz.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "Email boş olamaz.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Geçerli bir email adresi girin.";
    }
    if (!form.password) {
      newErrors.password = "Şifre boş olamaz.";
    } else if (form.password.length < 8) {
      newErrors.password = "Şifre en az 8 karakter olmalı.";
    }
    if (!form.firstName) newErrors.firstName = "Ad boş olamaz.";
    if (!form.lastName) newErrors.lastName = "Soyad boş olamaz.";
    const phoneRegex = /^[0-9]{11}$/;
    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Telefon numarası boş olamaz.";
    } else if (!phoneRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber =
        "Telefon numarası 11 haneli ve rakamlardan oluşmalı.";
    }
    if (!form.street) newErrors.street = "Sokak / Cadde boş olamaz.";
    if (!form.city) newErrors.city = "İlçe boş olamaz.";
    if (!form.state) newErrors.state = "Şehir boş olamaz.";
    if (!form.country) newErrors.country = "Ülke boş olamaz.";
    if (!form.zipCode) newErrors.zipCode = "Posta kodu boş olamaz.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      Alert.alert("Eksik veya Hatalı Bilgi", errorMessages);
      return false;
    }

    return true;
  };

  const handleInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleRegister = () => {
    const isValid = validateFields();
    if (!isValid) return;

    console.log("Kayıt verileri:", form);
    Alert.alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topComponent}>
          <Text style={styles.titleBrand}>ŞehrinSesi</Text>
          <Text style={styles.title}>Kayıt Ol</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            style={styles.inputContainer}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 40 }}
          >
            <TextInput
              ref={firstNameRef}
              returnKeyType="next"
              onSubmitEditing={() => lastNameRef.current.focus()}
              placeholder="Ad"
              autoCapitalize="words"
              autoCorrect={false}
              textContentType="givenName"
              onChangeText={(text) => handleInputChange("firstName", text)}
              style={[
                styles.textInput,
                errors.firstName && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.firstName ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={lastNameRef}
              returnKeyType="next"
              onSubmitEditing={() => usernameRef.current.focus()}
              placeholder="Soyad"
              autoCapitalize="words"
              autoCorrect={false}
              textContentType="familyName"
              onChangeText={(text) => handleInputChange("lastName", text)}
              style={[
                styles.textInput,
                errors.lastName && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.lastName ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={usernameRef}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              placeholder="Kullanıcı Adı"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="username"
              onChangeText={(text) => handleInputChange("username", text)}
              style={[
                styles.textInput,
                errors.username && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.username ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(text) => handleInputChange("email", text)}
              style={[
                styles.textInput,
                errors.email && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.email ? Colors.error : Colors.mutedText
              }
            />
            <View
              style={[
                styles.inputWithIcon,
                errors.password && { borderColor: Colors.error },
              ]}
            >
              <TextInput
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => phoneNumberRef.current.focus()}
                placeholder="Şifre"
                secureTextEntry={secureEntry}
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleInputChange("password", text)}
                style={[
                  styles.textInputWithIcon,
                  errors.password && { borderColor: Colors.error },
                ]}
                placeholderTextColor={
                  errors.password ? Colors.error : Colors.mutedText
                }
              />
              <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                <Feather
                  name={secureEntry ? "eye-off" : "eye"}
                  size={20}
                  color={Colors.mutedText}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              ref={phoneNumberRef}
              returnKeyType="next"
              onSubmitEditing={() => streetRef.current.focus()}
              placeholder="Telefon Numarası"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
              style={[
                styles.textInput,
                errors.phoneNumber && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.phoneNumber ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={streetRef}
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
              placeholder="Mahalle / Sokak / Cadde"
              onChangeText={(text) => handleInputChange("street", text)}
              style={[
                styles.textInput,
                errors.street && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.street ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={cityRef}
              returnKeyType="next"
              onSubmitEditing={() => stateRef.current.focus()}
              placeholder="İlçe"
              onChangeText={(text) => handleInputChange("city", text)}
              style={[
                styles.textInput,
                errors.city && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.city ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={stateRef}
              returnKeyType="next"
              onSubmitEditing={() => countryRef.current.focus()}
              placeholder="Şehir"
              onChangeText={(text) => handleInputChange("state", text)}
              style={[
                styles.textInput,
                errors.state && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.state ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={countryRef}
              returnKeyType="next"
              onSubmitEditing={() => zipCodeRef.current.focus()}
              placeholder="Ülke"
              onChangeText={(text) => handleInputChange("country", text)}
              style={[
                styles.textInput,
                errors.country && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.country ? Colors.error : Colors.mutedText
              }
            />
            <TextInput
              ref={zipCodeRef}
              returnKeyType="done"
              placeholder="Posta Kodu"
              keyboardType="number-pad"
              onChangeText={(text) => handleInputChange("zipCode", text)}
              style={[
                styles.textInput,
                errors.zipCode && { borderColor: Colors.error },
              ]}
              placeholderTextColor={
                errors.zipCode ? Colors.error : Colors.mutedText
              }
            />
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.link}>
              Zaten hesabınız var mı? Giriş yapın.
            </Text>
          </TouchableOpacity>
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
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: Colors.white,
  },
  textInputWithIcon: {
    flex: 1,
    height: 50,
    color: Colors.text,
  },
});

export default RegisterScreen;
