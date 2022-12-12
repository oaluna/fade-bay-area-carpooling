import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Screen from "./Screen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
//import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination } from "../redux/slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { mapStyle } from "../global/mapStyle";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Screen style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
      <Text
        style={{
          color: colors.snow,
          fontSize: 32,
          textAlign: "left",
          paddingBottom: 5,
          fontSize: 36,
          fontWeight: "bold",
          paddingTop: 20
        }}
      >
        Welcome, Oscar
      </Text>
      <View style={{borderTopColor: colors.blue, position:"relative", flex: 1}}>
        <View style={{backgroundColor:"transparent", paddingBottom: 2}}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  loaction: details.geometry.location,
                  description: data.description,
                })
              );
            }}
            minLength={2}
            fetchDetails={true}
            returnKeyType={"search"}
            onFail={(error) => console.error(error)}
            query={{
              key: GOOGLE_MAP_APIKEY,
              language: "en",
            }}
            styles={toInputBoxStyles}
            enablePoweredByContainer={false}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 3, backgroundColor: "transparent", position: "relative", zIndex: 10, justifyContent: "space-between", flex: 1}}>
        <NavFavourites />
        <View
          style={{
            height: 150,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.push("RideOptionsCard")}
            style={styles.card}
          >
            <Image
              source={require("../assets/images/icon-carpool.png")}
              style={{
                width: 24,
                height: 24,
                marginRight: 15,
                resizeMode: "contain",
              }}
            />
            <Text style={{ color: colors.snow }}>Join A Carpool</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("RideOptionsCard")}
            style={styles.card}
          >
            <Image
              source={require("../assets/images/icon-pickup.png")}
              style={{
                width: 24,
                height: 24,
                marginRight: 15,
                resizeMode: "contain",
              }}
            />
            <Text style={{ color: colors.snow }}>Start a Carpool</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "transparent",
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "rgba(255,255,255,0.81)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.blue,
  },
  textInputContainer: {
    paddingHorizontal:0,
    paddingBottom: 25,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "rgba(255,255,255,0.81)",
    borderRadius: 15,
    borderColor: colors.blue,
    borderEndWidth: 1,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 170,
    height: 50,
    backgroundColor: "transparent",
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
