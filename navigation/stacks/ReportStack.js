import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReportScreen from "../../screens/ReportScreen";

const Stack = createNativeStackNavigator();

const ReportStack = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Report"
      component={ReportScreen}
      options={{
        title: "Sorun Bildir",
      }}
    />
  </Stack.Navigator>;
};

export default ReportStack;
