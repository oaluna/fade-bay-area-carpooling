import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
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
      colors={[theme.colors.blue[10], theme.colors.blue[8]]}
      style={{ width: width, height: height, alignSelf:"center", flex: 1 }}
    >
      <Screen>
        <Pressable
          onPress={() => navigation.navigate("HomeScreen")}
          
        >
            <Image
          source={require("../assets/images/fade-logo.png")}
          style={styles.logo}
        />
        </Pressable>
        <View>
          <View>
            <MapContainer />
          </View>
          <View style={{ justifyContent: "space-evenly", height: 200 }}>
            <Text style={{ color: theme.colors.neutral[0], fontSize: 24 }}>
              Trip Posted!
            </Text>
            <Text style={styles.body}>Driver: oscarluna</Text>
            <Text style={styles.body}>Travel Time: {data?.time}</Text>
            <Text style={styles.body}>Distance: {data?.distance}</Text>
            <Text style={styles.body}>Seats Available: 3</Text>
          </View>
        </View>
      </Screen>
    </LinearGradient>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  body: { fontSize: 20, color: theme.colors.neutral[0] },
  logo: {
  height: 50,
  width: 100,
  resizeMode: "contain",
  marginTop: 0,
  marginBottom: 0,
  padding: 15,
  alignSelf:"flex-start"}
});
