import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/colors";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (Platform.OS === "android") {
      SystemUI.setBackgroundColorAsync(Colors.background);
      NavigationBar.setBackgroundColorAsync(Colors.background);
      NavigationBar.setButtonStyleAsync("dark"); 
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style="dark" backgroundColor={Colors.background} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default ThemeProvider;
