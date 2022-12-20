import React from "react";
import { View, Text } from "react-native";
import { colors } from "../global/styles";

export default function SettingsScreen() {
  return (
    <View
      style={{ alignSelf: "center", justifyContent: "center", height: 100 }}
    >
      <Text style={{ color: colors.snow }}>Settings</Text>
    </View>
  );
}
