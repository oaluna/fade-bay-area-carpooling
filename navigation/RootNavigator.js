import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileTypeScreen from "../screens/ProfileTypeScreen";
import MapScreen from "../screens/MapScreen";
import DestinationScreen from "../screens/DestinationScreen";
import RequestScreen from "../screens/RequestScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Navigator
        name="ProfileTypeScreen"
        component={ProfileTypeScreen}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
        <Stack.Screen name="RequestScreen" component={RequestScreen} />
      </Stack.Navigator>
    </Stack.Navigator>
  );
};

export default RootNavigator;
