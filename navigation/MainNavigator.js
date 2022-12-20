import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileTypeScreen from "../screens/ProfileTypeScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import CommuteListingScreen from "../screens/CommuteListingScreen";
import EatsScreen from "../screens/EatsScreen";
import SuccessScreen from "../screens/SuccessScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DemoScreen from "../components/demo/DemoScreen";
import LocationAccessScreen from "../screens/LocationAccessScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} screenOptions={{headerShown: false,
      props: {
        loggedIn: false
      }}}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="DemoScreen" component={DemoScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen
        name="LocationAccessScreen"
        component={LocationAccessScreen}
        screenOptions={{headerShown: false}}
      />
      <Stack.Screen name="ProfileTypeScreen" component={ProfileTypeScreen} screenOptions={{headerShown: false, props: { isEnabled: false }}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="CommuteListingScreen" component={CommuteListingScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="MapScreen" component={MapScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="EatsScreen" component={EatsScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="RequestScreen" component={RequestScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="DestinationScreen" component={DestinationScreen} screenOptions={{headerShown: false}} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} screenOptions={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
