import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { colors, theme } from "../../global/styles";
import { LinearGradient } from "expo-linear-gradient";


import CustomSlider from "./CustomSlider";
import sliderContent from "./slides";

const { width, height } = Dimensions.get("screen");

const DemoScreen = ({ navigation, route }) => {
  return (
    <ImageBackground source={require("../../assets/images/gradient-bg3.png")} style={styles.container}>
    
      {/* slider */}
      <Image
        source={require("../../assets/images/fade-logo.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <CustomSlider sliderContent={sliderContent} />
      <View style={{ position:"relative", flex: 1, alignItems:'center' }}>
      <LinearGradient
                start={{x: 0.1, y: 1}} end={{x: 0.75, y: 3.25}}
          colors={[theme.colors.blue[7], theme.colors.blue[4]]} style={styles.startBtn}>
        <TouchableOpacity
          onPress={() => navigation.push("LocationAccessScreen")}
          raised
          title="Register"
        >
          <Text style={styles.startBtnText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.push("ProfileTypeScreen")}
          raised
          title="Register"
        >
          <Text style={styles.loginBtnText}>I'm already signed up</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
  
    </ImageBackground>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    position:"relative",
    
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: width - 30,
  
    
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
   
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 25,
    height: 50,
    width: width - 30,
    borderRadius: 15,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.neutral[0],
    marginTop: 90,
    height: 50
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.neutral[0],
  },
});
