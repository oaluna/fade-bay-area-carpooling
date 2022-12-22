import React from "react"
import { View, Dimensions } from "react-native"
import Map from "./Map";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");
 
const MapContainer = () => {
  return (
    
    <View
      style={{ backgroundColor: theme.colors.neutral[0], height: height / 2 }}
    >
      <Map />
    </View>
    

  )
}

export default MapContainer