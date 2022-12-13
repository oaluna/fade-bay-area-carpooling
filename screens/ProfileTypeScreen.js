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

const { width, height } = Dimensions.get("screen");

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
        What are you looking for today?
      </Text>
      <View style={{flexDirection: "row", justifyContent: "space-evenly", width: width, height: 350 }}>
      <View>
        <Image
          source={require("../assets/images/icon-driver.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
            marginVertical: 25,
            alignSelf: "center",
          }}
        />
        <Pressable
          style={{
            color: colors.white,
            backgroundColor: "rgba(255,255,255,0.3)",
            borderColor: colors.aqua,
            borderWidth: 2,
            borderRadius: 15,
            width: 140,
            alignItems:"center"
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
            I Need Passengers
          </Text>
        </Pressable>
      </View>
      <View>
        <Image
          source={require("../assets/images/icon-passenger.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
            marginVertical: 25,
            alignSelf: "center",
          }}
        />

        <Pressable
          style={{
            color: colors.white,
            backgroundColor: "rgba(255,255,255,0.3)",
            borderColor: colors.aqua,
            borderWidth: 2,
            borderRadius: 15,
            width: 140,
            alignItems:"center"
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
            I Need a Ride
          </Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
};

export default ProfileTypeScreen;
