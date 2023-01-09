import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View, Dimensions, Image, SafeAreaView } from "react-native";
import Feed from "../components/Feed";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { colors, theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const EatsScreen = () => {
  const navigation = useNavigation();

  return (
      <SafeAreaView style={{position:"absolute", top: -40}}>
    <Screen>
      <Image source={require("../assets/images/fade-logo.png")} style={{resizeMode: "contain", width: 100, height: 60}} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          type="antdesign"
          name="arrowleft"
          color="white"
          size={24}
          style={{
            position:"relative", alignSelf:"flex-start", marginVertical: 25
          }}
        />
      </TouchableOpacity>
      <Text style={{color: theme.colors.neutral[0], fontSize: 24}}>Messages</Text>
      <View style={{marginTop: height / 3}}>
     <Text style={{color:theme.colors.neutral[0], fontSize: 24}}>Join A Carpool</Text>
        <Feed />
        </View>
    </Screen>
      </SafeAreaView>
  );
};

export default EatsScreen;
