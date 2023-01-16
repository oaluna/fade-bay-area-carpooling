import React from "react";
import { View, Dimensions } from "react-native";
import MapNavigator from "./MapNavigator";

const { width, height } = Dimensions.get("screen");

const MapNavigatorContainer = () => (
  <View style={{ height: height / 2 }}>
    <MapNavigator />
  </View>
);

export default MapNavigatorContainer;
