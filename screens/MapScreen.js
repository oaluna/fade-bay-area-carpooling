import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Map from "../components/Map";
import MapNavigator from "../navigation/MapNavigator";
import { selectOrigin } from "../redux/slices/navSlice";
import { colors, theme } from "../global/styles";
const { width, height } = Dimensions.get("screen");

const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  useEffect(() => {
    if (!origin) navigation.replace("HomeScreen");
  }, []);

  return (
    <View style={{ backgroundColor: theme.colors.neutral[0], height: height }}>
      <View
        style={{ backgroundColor: theme.colors.neutral[0], height: height / 2 }}
      >
        <Map />
      </View>
      <View style={{ height: height / 2 }}>
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreen;
