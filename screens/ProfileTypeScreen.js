import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const ProfileTypeScreen = ({ navigation }) => {
  const [switchRight, setSwitchRight] = React.useState(false);

  const handleSwitch = () => {
    switchRight ? setSwitchRight(false) : setSwitchRight(true)
  }

  return (
    <ImageBackground
      source={require("../assets/images/gradient-bg3.png")}
      style={{
        width: width,
          height: height,
          paddingLeft: 15,
          position:"absolute",
          left: 0,
          top: 0,
          resizeMode: "cover",
      }}
    >
  <View style={{marginTop: 100}}>
      <Text
        style={{
          color: colors.white,
          fontSize: 28,
          textAlign: "center",
          marginVertical: 25,
        }}
      >
        Switch between passenger and rider at any time!
      </Text>

      <Text
        style={{
          fontSize: 24,
          color: colors.snow,
          fontWeight: "400",
          textAlign: "center",
          marginVertical: 25,
        }}
      >
        Anyone who has a verified Fade Driver account can switch to use the app
        with a Fade Rider account at any time.
      </Text>
      <Text
        style={{
          color: colors.white,
          fontSize: 28,
          textAlign: "center",
          lineHeight: 28,
          marginVertical: 25,
        }}
      >
        How does it work?
      </Text>
      <Text
        style={{
          fontSize: 24,
          color: colors.snow,
          fontWeight: "400",
          textAlign: "center",
          marginVertical: 25,
        }}
      >
        Simple, just look for a switch, like the one below. Switch to white to
        activate your Rider account, and green for your Driver account.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width - 30,
        }}
      >
        <View style={{ flexDIrection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: colors.snow }}>Rider</Text>
            <Switch
              style={{
                color: colors.aqua,
                borderColor: colors.aqua,
                borderWidth: 2,
              }}
              trackColor={colors.snow}
              onTouchStart={() => handleSwitch}
              
              thumbColor={colors.aqua}
            />
            <Text style={{ color: colors.snow }}>Driver</Text>
          </View>
          <Pressable
            style={{
              color: colors.white,
              backgroundColor: colors.darkblue,
              borderColor: colors.aqua,
              borderWidth: 2,
              borderRadius: 15,
              marginTop: 250,
              width: width - 30,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 14,
                paddingVertical: 15,
                paddingHorizontal: 15,
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileTypeScreen;
