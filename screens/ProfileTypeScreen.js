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
import Lottie from "lottie-react-native";
import { theme } from "../global/styles";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("screen");

export const CameraIcon = () => <Icon {...style} name="camera" />;

const ProfileTypeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ImageBackground
      source={require("../assets/images/gradient-bg3.png")}
      style={{
        height: height,
        width: width,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: 15,
      }}
      blurRadius={8}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={styles.gradient}
      >
      <Image source={require("../assets/images/fade-logo.png")} style={{resizeMode:"contain", width: 120, height: 100, position:'absolute', top: 15, left: 30}} />
        <View
          style={{ marginTop: 100, paddingHorizontal: 15, alignSelf: "center" }}
        >
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 20,
              textAlign: "center",
              marginVertical: 25,
              paddingHorizontal: 15,
            }}
          >
            Switch between passenger and rider at any time!
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: theme.colors.neutral[2],
              fontWeight: "400",
              textAlign: "center",
              marginVertical: 25,
              paddingHorizontal: 15,
            }}
          >
            Anyone who has a verified Fade Driver account can switch to use the
            app with a Fade Rider account at any time.
          </Text>
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 20,
              textAlign: "center",
              lineHeight: 28,
              marginVertical: 25,
              paddingHorizontal: 15,
            }}
          >
            How does it work?
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.neutral[2],
              fontWeight: "400",
              textAlign: "center",
              marginVertical: 25,
              paddingHorizontal: 15,
            }}
          >
            Simple, just look for a switch, like the one below. Switch to white
            to activate your Rider account, and green for your Driver account.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: width - 30,
            }}
          >
            <View style={{ alignSelf: "center" }}>
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
                  trackColor={{
                    false: theme.colors.neutral[4],
                    true: theme.colors.neutral[0],
                  }}
                  thumbColor={
                    isEnabled
                      ? theme.colors.lightblue[4]
                      : theme.colors.neutral[6]
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />

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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    width: width,
                    height: 20,
                    marginTop: -40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: theme.colors.neutral[0],
                      paddingHorizontal: 2,
                    }}
                  >
                    You are a{" "}
                  </Text>
                  <Image
                    source={require("../assets/new-logo.png")}
                    style={{
                      resizeMode: "contain",
                      height: 60,
                      width: 70,
                      marginHorizontal: 0,
                      paddingHorizontal: 0,
                    }}
                  />
                  <Text
                    style={{
                      color: theme.colors.neutral[0],
                      fontSize: 20,
                      marginHorizontal: 5,
                    }}
                  >
                    {!isEnabled ? "Rider " : "Driver"}
                  </Text>
                </View>
              </View>
              <View style={{ height: 300, justifyContent: "flex-end" }}>
                <LinearGradient
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.75, y: 1 }}
                  colors={[
                    theme.colors.lightblue[4],
                    theme.colors.lightblue[6],
                  ]}
                  style={styles.loginBtn}
                >
                  <Pressable onPress={() => navigation.navigate("HomeScreen")}>
                    <Text
                      style={{
                        color: theme.colors.neutral[0],
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      Continue
                    </Text>
                  </Pressable>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    right: 0,
    top: 20,
    paddingVertical: 0,
    marginVertical: 0,
    zIndex: -1,
  },

  gradient: {
    position: "absolute",
    top: -20,
    right: 0,
    paddingTop: 0,
    width: width + 10,
    height: height + 80,
    margin: 0,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    zIndex: 0,
  },
  imageContainer: {
    width: width - 30,
    height: 200,
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },
  icon: {
    resizeMode: "contain",
    width: 96,
    height: 96,
    backgroundColor: "transparent",

    borderRadius: 50,
    shadowColor: theme.colors.neutral[0],
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,
  },
  loginBtn: {
    width: width - 30,
    height: 50,

    flexDirection: "row",
  alignItems:"center",
  alignSelf:"center",
    justifyContent:"center",
    borderRadius: 15,
    shadowColor: theme.colors.blue[9],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProfileTypeScreen;
