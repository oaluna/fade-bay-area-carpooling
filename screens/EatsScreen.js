import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const EatsScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          type="antdesign"
          name="home"
          color="black"
          size={16}
          // style={}
        />
      </TouchableOpacity>
      <View>
        <Text style={{ color: colors.snow }}>Join A Carpool</Text>
        <Text style={{ color: colors.snow }}>Feed goes here</Text>
      </View>
    </Screen>
  );
};

export default EatsScreen;
