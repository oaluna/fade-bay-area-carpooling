import React from 'react';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import { KeyboardAvoidingView, Platform } from "react-native";
import { BetweenPagesProvider } from "between-pages";
import { Auth0Provider } from 'react-native-auth0';





export default function App() {
  return (
    <Auth0Provider domain={"luna-reactdev.auth0.com"} clientId={"eyrkBuRYDCERnnGBzeREzL1UF6cTmdZJ"}>
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
    </Auth0Provider>
  );
}
