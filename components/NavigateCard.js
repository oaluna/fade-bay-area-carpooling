import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import Screen from "./Screen";
import { LinearGradient } from "expo-linear-gradient";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { colors, theme } from "../global/styles";
//import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination } from "../redux/slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const NavigateCard = ({ isEnabled, getInputData, data, navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function handleInput(key, val) {
      getInputData({
        key,
        value: data.description,
      });
    }
    return (data) => {
      handleInput(null);
    };
  }, []);

  return (
    <Screen
      style={{
        marginTop: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: height / 2,
        width: width - 30,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
      }}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={{
          position: "absolute",
          top: -40,

          paddingTop: 20,
          height: height / 2,
          width: width,
          elevation: 2,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginBottom: 3,
          }}
        >
         <View style={{flexDirection:"row", justifyContent: "space-between", width: width, alignItems:"center", height: 64}}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                type="antdesign"
                name="arrowleft"
                color="white"
                size={20}
                style={{ marginRight: 25, marginLeft: 15, alignItems:"center" }}
              />
            </Pressable>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "left",
              marginTop: 15,
              fontSize: 32,
              fontWeight: "bold",
              color: theme.colors.neutral[0],
              width: width,
            }}
          >
            Good morning, {isEnabled ? "Driver" : "Rider"}
          </Text>
          </View>
          <View
            style={{
              borderTopColor: theme.colors.blue[5],
              flexShrink: 1,
              position: "relative",
              zIndex: 20,
              width: width - 30,
            }}
          >
            <View style={{ paddingBottom: 2 }}>
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
          <View
            style={{
              alignSelf: "center",
              alignItems: "flex-start",
              zIndex: 10,
              justifyContent: "center",
              height: 250,
              width: width,
            }}
          >
            <NavFavourites />
          </View>
          <View style={styles.buttonContainer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[theme.colors.red[4], theme.colors.red[6]]}
              style={styles.navOption}
            >
              <TouchableOpacity onPress={() => navigation.push("EatsScreen")}>
                <Text style={styles.buttonText}>Join A Carpool</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
              style={styles.navOption}
            >
              <TouchableOpacity
                onPress={() => navigation.push("RideOptionsCard")}
              >
                <Text style={styles.buttonText}>Start A Carpool</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </Screen>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    width: width,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: theme.colors.neutral[0],
    borderRadius: 15,
    borderWidth: 2,
    borderColor: theme.colors.neutral[4],
  },
  textInputContainer: {
    alignSelf: "center",
    width: width - 30,
    marginRight: 30,
  },
  listView: {
    color: theme.colors.red[4],
  },

  description: {},
  textInputContainer: {},
  textInput: {},
  loader: {},
  listView: {},
  predefinedPlacesDescription: {},
  poweredContainer: {},
  powered: {},
  separator: {},
  row: {},
});

const styles = StyleSheet.create({
  navOption: {
    flexDirection: "column",

    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: 165,
    height: 60,
    marginTop: 5,
    paddingHorizontal: 25,
    paddingVertical: 3,
    borderRadius: 15,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 0,
    width: width - 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    paddingTop: 0,
    background: "transparent",
    position: "relative",
    height: 20,
  },
  buttonText: {
    color: theme.colors.neutral[0],
    fontSize: 20,
  },
  icon: {
    width: 56,
    height: 56,
  },
});
