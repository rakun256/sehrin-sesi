import React, { useEffect } from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SystemUI from "expo-system-ui";
import Colors from "../constants/colors";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (Platform.OS === "android") {
      SystemUI.setBackgroundColorAsync(Colors.background);
      SystemUI.setNavigationBarColor(Colors.primaryDark);
      SystemUI.setStatusBarColor(Colors.primaryDark);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default ThemeProvider;
