import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [editMode, setEditMode] = useState(false);
  const [editableInfo, setEditableInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    dispatch(logout());
  };

  const handleCancel = () => {
    setEditableInfo({
      name: user?.name || "",
      email: user?.email || "",
    });
    setEditMode(false);
  };

  const handleSave = () => {
    console.log("🔧 Bilgiler güncellendi:", editableInfo);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profilim</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Ad Soyad</Text>
        {editMode ? (
          <TextInput
            value={editableInfo.name}
            onChangeText={(text) =>
              setEditableInfo({ ...editableInfo, name: text })
            }
            style={styles.textInput}
            placeholder="Ad Soyad"
            placeholderTextColor={Colors.mutedText}
          />
        ) : (
          <Text style={styles.info}>{user?.name}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            value={editableInfo.email}
            onChangeText={(text) =>
              setEditableInfo({ ...editableInfo, email: text })
            }
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={Colors.mutedText}
          />
        ) : (
          <Text style={styles.info}>{user?.email}</Text>
        )}

        <Text style={styles.label}>Rol</Text>
        <Text style={styles.info}>{user?.role}</Text>
      </View>

      {editMode ? (
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.primary]}
            onPress={handleSave}
          >
            <Feather name="check" size={18} color={Colors.white} />
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.gray]}
            onPress={handleCancel}
          >
            <Feather name="x" size={18} color={Colors.white} />
            <Text style={styles.buttonText}>İptal</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.button, styles.primary, { marginBottom: 20 }]}
          onPress={() => setEditMode(true)}
        >
          <Feather name="edit-2" size={18} color={Colors.white} />
          <Text style={styles.buttonText}>Bilgileri Güncelle</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={[styles.button, styles.danger]} onPress={handleLogout}>
        <Feather name="log-out" size={18} color={Colors.white} />
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
      elevation: 3,
      shadowColor: "#000",
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
      marginBottom: 6,
    },
    textInput: {
      height: 50,
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 10,
      paddingHorizontal: 16,
      color: Colors.text,
      marginTop: 6,
      marginBottom: 6,
      backgroundColor: Colors.white,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
      marginBottom: 10,
    },
    button: {
      flexDirection: "row",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    primary: {
      backgroundColor: Colors.primary,
    },
    gray: {
      backgroundColor: Colors.mutedText,
    },
    danger: {
      backgroundColor: Colors.error,
      marginTop: 10,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: "bold",
    },
  });  

export default ProfileScreen;