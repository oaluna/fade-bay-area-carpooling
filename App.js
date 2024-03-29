import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { BetweenPagesProvider } from "between-pages";
import { Auth0Provider } from "react-native-auth0";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Auth0Provider
        domain={"luna-reactdev.auth0.com"}
        clientId={"c6KME985ReQ6JM5n4RZgvgyGSFgc3pj5"}
      >
        <Provider store={store}>
          <BetweenPagesProvider>
            <PaperProvider>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
              >
                <AppNavigator />
              </KeyboardAvoidingView>
            </PaperProvider>
          </BetweenPagesProvider>
        </Provider>
      </Auth0Provider>
    </ApplicationProvider>
  );
}
