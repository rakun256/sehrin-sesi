import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/colors";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profilim</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Ad Soyad </Text>
        <Text style={styles.info}>{user?.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>{user?.email}</Text>

        <Text style={styles.label}>Rol</Text>
        <Text style={styles.info}>{user?.role}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primaryDark,
    marginBottom: 32,
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
    elevation: 3, // Android için gölge
    shadowColor: "#000", // iOS için gölge
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    color: Colors.mutedText,
    fontSize: 14,
    marginTop: 12,
  },
  info: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Colors.error,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
