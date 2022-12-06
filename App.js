import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  OriginContextProvider,
  DestinationContextProvider,
} from "./context/Context";
import RootNavigator from "./navigation/RootNavigator";

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
