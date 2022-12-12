// import React from "react";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import {
//   OriginContextProvider,
//   DestinationContextProvider,
// } from "./context/Context";
// import RootNavigator from "./navigation/RootNavigator";

// const App = () => {
//   return (
//     <DestinationContextProvider>
//       <OriginContextProvider>
//         <RootNavigator />
//       </OriginContextProvider>
//     </DestinationContextProvider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React from 'react';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        >
          <AppNavigator />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaProvider>
  );
}