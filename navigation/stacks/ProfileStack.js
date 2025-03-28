import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "Hesabım",
      }}
    />
  </Stack.Navigator>;
};

export default ProfileStack;
