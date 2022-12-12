import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { colors } from "../../global/styles";

import CustomSlider from "./CustomSlider";
import sliderContent from "./slides";

const { width, height } = Dimensions.get("screen");

const DemoScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      {/* slider */}
      <Image
        source={require("../../assets/images/fade-logo.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <CustomSlider sliderContent={sliderContent} />
      <View style={{ bottom: 0, position: "absolute", marginBottom: 10 }}>
        <TouchableOpacity
          style={styles.startBtn}
          i
          onPress={() => navigation.push("LocationAccessScreen")}
          raised
          title="Register"
        >
          <Text style={styles.startBtnText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.push("LoginScreen")}
          raised
          title="Register"
        >
          <Text style={styles.loginBtnText}>I'm already signed up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  loginBtn: {
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 300,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    backgroundColor: colors.black,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 300,
    borderRadius: 15,
    borderColor: colors.blue,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#808080",
  },
});
