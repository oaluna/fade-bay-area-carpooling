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
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ImageBackground
      source={require("../assets/images/gradient-bg3.png")}
      style={{
        width: width,
        height: height,
        paddingLeft: 15,
        position: "absolute",
        left: 0,
        top: 0,
        resizeMode: "cover",
      }}
    >
      <View style={{ marginTop: 100 }}>
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
          Anyone who has a verified Fade Driver account can switch to use the
          app with a Fade Rider account at any time.
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
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                width: width,
                height: 100,
              }}
            >
              <Switch
                trackColor={{ false: colors.grey2, true: colors.grey }}
                thumbColor={isEnabled ? colors.aqua : colors.snow}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: width,
                  height: 50,
                }}
              >
                <Text style={{ color: colors.snow, paddingHorizontal: 2 }}>
                  You are a{" "}
                </Text>
                <Image
                  source={require("../assets/images/fade-logo.png")}
                  style={{
                    resizeMode: "contain",
                    height: 60,
                    width: 70,
                    marginHorizontal: 0,
                    paddingHorizontal: 0,
                  }}
                />
                <Text style={{ color: colors.snow, paddingHorizontal: 2 }}>
                  {!isEnabled ? "Rider " : "Driver"}
                </Text>
              </View>
              <View style={{}}>
                {isEnabled ? (
                  <Image
                    source={require("../assets/images/icon-driver.png")}
                    style={styles.icon}
                  />
                ) : (
                  <Image
                    source={require("../assets/images/icon-traveler.png")}
                    style={styles.icon}
                  />
                )}
              </View>
            </View>
            <Pressable
              style={{
                color: colors.white,
                backgroundColor: colors.darkblue,
                borderColor: colors.aqua,
                borderWidth: 1,
                shadowColor: colors.aqua,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 10,
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
                  fontSize: 20,
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

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
    width: 96,
    height: 96
    ,
    backgroundColor: colors.darkblue,
    borderRadius: 50,
    shadowColor: colors.snow,
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 15,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:60
  },
});

export default ProfileTypeScreen;
