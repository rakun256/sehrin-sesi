import React from "react";
import RootNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeProvider from "./theme/ThemeProvider";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
}
