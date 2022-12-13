import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";
import { colors } from "../global/styles";

const ProfileTypeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: colors.darkblue,
      }}
    >
      <Text style={{ color: colors.white, fontSize: 32 }}>
        Profile Type Screen
      </Text>
      <Pressable
        style={{
          color: colors.white,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderColor: colors.aqua,
          borderWidth: 2,
          borderRadius: 15,
          
        }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 24,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          I'm looking for a Driver
        </Text>
      </Pressable>
      <Pressable
        style={{
          color: colors.white,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderColor: colors.aqua,
          borderWidth: 2,
          borderRadius: 15,
          
        }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 24,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          I'm looking for Passengers
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileTypeScreen;
