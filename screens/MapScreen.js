import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import MapContainer from "../components/MapContainer";
import MapNavigatorContainer from "../navigation/MapNavigatorContainer";
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
      <MapContainer />
      <MapNavigatorContainer />
    </View>
  );
};

export default MapScreen;
