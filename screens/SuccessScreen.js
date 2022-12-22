import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Screen from "../components/Screen";
import { LinearGradient } from "expo-linear-gradient";
import MapContainer from "../components/MapContainer";
import { useSelector } from "react-redux";
import { selectOrigin } from "../redux/slices/navSlice";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { colors, theme } from "../global/styles";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const SuccessScreen = ({ route }) => {
  const { data } = route.params;
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!origin) navigation.replace("HomeScreen");
  }, []);

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[9], theme.colors.blue[8]]}
      style={{ width: width, height: height }}
    >
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{
            height: 120,
            top: -100,
            left: 15,
            width: 32,
          }}
        >
          <Image
            source={require("../assets/images/fade-logo-alt.png")}
            style={{ resizeMode: "contain", width: 120 }}
          />
        </TouchableOpacity>
        <View>
          <View>
            <MapContainer/>
          </View>
          <View style={{ justifyContent: "space-evenly", height: 200 }}>
            <Text style={{ color: theme.colors.neutral[0], fontSize: 24 }}>
              Edit Post
            </Text>
            <Text style={{ fontSize: 20, color: theme.colors.neutral[0] }}>
              Driver: {data?.driver}
            </Text>
            <Text style={{fontSize: 20, color: theme.colors.neutral[0] }}>
              Travel Time: {data?.time}
            </Text>
            <Text style={{ fontSize: 20, color: theme.colors.neutral[0] }}>
              Distance: {data?.distance}
            </Text>
          </View>
        </View>
      </Screen>
    </LinearGradient>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
