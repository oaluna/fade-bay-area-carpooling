import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../global/styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import * as Location from "expo-location";

const LocationAccessScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const [error, errorMessage] = useState(null);
  const [geocode, setGeoCode] = useState(null);
  const [btnDisabled, setEnabled] = useState(true);
  useEffect(() => {
    // code to set the header
    const unsbuscribe = navigation.setOptions({
      headerBacktitle: "Location Access",
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
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
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/icon-dropoff.png")}
      />
      <Text style={styles.logoTitle}>
        In order to use Fade, we will need to access your Location.
      </Text>
      <Text style={styles.logoSubTitle}>
        This ensures that you are matched up with riders closest to your area,
        and don't go too far out of your way to pick up a rider.
      </Text>
      <View style={{ bottom: 0, position: "absolute", marginBottom: 10 }}>
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
                name="close-circle"
                style={{ marginRight: 10 }}
                size={20}
                color="darkred"
              />
            )}
            Turn off Location Access
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => getLocationAsync()}
          raised
          title="Register"
        >
          <Text style={styles.buttonTitle}>Grant Access To My Location</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
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
    color: colors.white,
    fontWeight: "800",
  },
  logoSubTitle: {
    textAlign: "center",
    marginTop: 20,
    width: 300,
    fontSize: 20,
    fontWeight: "800",
    color: colors.white,
  },
  button: {
    backgroundColor: colors.black,
    borderColor: colors.blue,
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpacity: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 350,
    opacity: 0.25,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 20,
    color: colors.white,
  },
});

export default LocationAccessScreen;
