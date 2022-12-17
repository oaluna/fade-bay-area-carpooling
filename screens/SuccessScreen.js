import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import { MapView, Marker } from "expo";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <Screen style={{justifyContent:"center"}}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{padding: 3}}>
        <Icon type="antdesign" name="home" color="black" size={16} />
      </TouchableOpacity>
      <View>
        <View>
          <Image source={require("../assets/images/loading7.png")} style={{width: 350, height: 350, resizeMode:"contain"}} />
        </View>
        <View style={{ justifyContent:"space-evenly", height: 200 }}>
          <Text style={{ color: colors.snow, fontSize: 24 }}>
            Your {data?.title} is on the way
          </Text>
          <Text style={{ color: colors.snow }}>Ride cost: ${data?.price}</Text>
          <Text style={{ color: colors.snow }}>
            Estimated time: ${data?.time}
          </Text>
          <Text style={{ color: colors.snow }}>
            Estimated distance: ${data?.distance}
          </Text>
        </View>
      </View>
    </Screen>
  );
};

export default SuccessScreen;
