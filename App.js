import React from 'react';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import { KeyboardAvoidingView, Platform } from "react-native";
import { BetweenPagesProvider } from "between-pages";

export default function App() {
  return (
    <BetweenPagesProvider>
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <AppNavigator />
      </KeyboardAvoidingView>
    </Provider>
    </BetweenPagesProvider>
  );
}
