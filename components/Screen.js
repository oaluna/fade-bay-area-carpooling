import React from "react";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={{ width: width, height: height }}
      >
        <View style={[styles.view, style]}>{children}</View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    width: width,
    height: height,
    paddingHorizontal: 15,
    // flex: 1
  },
});
