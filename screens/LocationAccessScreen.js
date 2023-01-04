import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import Lottie from "lottie-react-native";
import { colors, theme } from "../global/styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("screen");

const LocationAccessScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const [error, errorMessage] = useState(null);
  const [geocode, setGeoCode] = useState(null);
  const [btnDisabled, setEnabled] = useState(true);
  useEffect(() => {
    // code to set the header
    const unsbuscribe = navigation.setOptions({
      headerBacktitle: "Location Access",
      headerStyle: {},

      headerTitleStyle: {
        fontWeight: "bold",
        marginLeft: 15,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.push("DemoScreen")}>
          <AntDesign
            name="leftcircle"
            size={30}
            color="#1f3559"
            style={{
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
    return () => {
      unsbuscribe;
    };
  }, []);

  const getLocationAsync = async () => {
    // helper method to request permissions from device
    // sets geoCode, locaiton, errorMessage if there is any
    let { status } = await Location.requestForegroundPermissionsAsync(location);
    if (status !== "granted") {
      errorMessage({
        error: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const { latitude, longitude } = location.coords;
    getGeocodeAsync({ latitude, longitude });
    setLocation({ location: { latitude, longitude } });
    // navigate to home screen once access is granted.
    // pass location in route params.
    navigation.navigate("HomeScreen", { location: location });
  };

  const getGeocodeAsync = async (location) => {
    // Get the location from device
    let geocode = await Location.reverseGeocodeAsync(location);
    setGeoCode({ geocode });
  };

  return (
    <ImageBackground
      source={require("../assets/images/gradient-bg3.png")}
      blurRadius="8"
      style={{
        height: height,
        width: width,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: 40,
      }}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[9], theme.colors.purple[8]]}
        style={styles.gradient}
      >
    
        <KeyboardAvoidingView style={[styles.container, { zIndex: 2 }]}>
          <Lottie
            style={styles.image}
            source={{
              uri: "https://assets7.lottiefiles.com/packages/lf20_dsfexraq.json",
            }}
            autoPlay
            loop
          />

          <Text style={styles.logoTitle}>
            In order to use Fade, we will need to access your Location.
          </Text>
          <Text style={styles.logoSubTitle}>
            This ensures that you are matched up with riders closest to your
            area, and don't go too far out of your way to pick up a rider.
          </Text>
          <View
            style={{ bottom: 0, position: "absolute", bottom: 10, height: 220 }}
          >
            {/* x if location is not enabled, check if it is enabled */}
            {/* Need more logic to onclick give location acess */}
            <TouchableOpacity
              style={styles.buttonOpacity}
              onPress={() => alert("please enable location in device settings")}
              raised
              title="RegisterScreen"
            >
              <Text style={styles.buttonTitle}>
                {location ? (
                  <FontAwesome
                    name="check-circle"
                    style={{ marginRight: 10 }}
                    size={20}
                    color="#1ba895"
                  />
                ) : (
                  <AntDesign
                    name="closecircleo"
                    style={{ paddingHorizontal: 15 }}
                    size={20}
                    color="darkred"
                  />
                )}
                Turn off Location Access
              </Text>
            </TouchableOpacity>
            <LinearGradient
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.75, y: 1 }}
              colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => {
                  getLocationAsync();
                  navigation.navigate("ProfileTypeScreen");
                }}
                raised
                title="Register"
              >
                <Text style={styles.buttonTitle}>Share My Location</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </KeyboardAvoidingView>
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
  body: {
    zIndex: 2,
  },
  image: {
    height: 150,
    width: 150,
  },
  logoTitle: {
    marginTop: 30,
    fontSize: 32,
    textAlign: "center",
    width: 300,
    height: 100,
    color: theme.colors.neutral[0],
    fontWeight: "800",
  },
  logoSubTitle: {
    textAlign: "center",
    marginTop: 20,
    width: 300,
    height: 200,
    fontSize: 20,
    fontWeight: "800",
    color: theme.colors.neutral[0],
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    height: 50,
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  buttonOpacity: {
    backgroundColor: theme.colors.neutral[0],
    borderColor: theme.colors.blue[4],
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 50,
    width: 350,
    opacity: 0.25,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 20,
    color: theme.colors.neutral[0],
  },
});

export default LocationAccessScreen;
