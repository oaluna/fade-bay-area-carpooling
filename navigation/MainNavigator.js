import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTypeScreen from "../screens/ProfileTypeScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";
import SuccessScreen from "../screens/SuccessScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DemoScreen from "../components/demo/DemoScreen";
import LocationAccessScreen from "../screens/LocationAccessScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="DemoScreen" component={DemoScreen} />
      <Stack.Screen
        name="LocationAccessScreen"
        component={LocationAccessScreen}
      />
      <Stack.Screen name="ProfileTypeScreen" component={ProfileTypeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="EatsScreen" component={EatsScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="RequestScreen" component={RequestScreen} />
      <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
