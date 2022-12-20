import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import Screen from "./Screen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { colors } from "../global/styles";
//import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination } from "../redux/slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const NavigateCard = ({isEnabled, getInputData, data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(()=> {
    function handleInput (key, val) {
      getInputData({
        key, value: data.description
      })
        }
    return (data) => {
      handleInput(null)
    }
  }, [])

  return (
    <Screen
      style={{
        backgroundColor: colors.darkblue,
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 2,
      }}
    >
      <Text
        style={{
          textAlign: "left",
          paddingBottom: 2,
          fontSize: 32,
          fontWeight: "bold",
          color: colors.white,
          width: width / 2,
        }}
      >
        Good morning, {isEnabled ? "Driver" : "Rider"}
      </Text>
      <View
        style={{
          borderTopColor: colors.gray3,
          flexShrink: 1,
          position: "relative",
          zIndex: 20,
          backgroundColor: colors.darkblue,
        }}
      >
        <View style={{ backgroundColor: colors.darkblue, paddingBottom: 2 }}>
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
          paddingHorizontal: 3,
          alignSelf: "center",
          backgroundColor: colors.darkblue,
          position: "relative",
          zIndex: 10,
          justifyContent: "space-evenly",

          marginBottom: 20,
          height: 200,
        }}
      >
        <NavFavourites />
        <View
          style={{
            marginVertical: -50,
            width: width,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 20,
            borderTopColor: colors.gray3,
            position: "relative",
            height: 50,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: colors.darkblue,
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 50,
              paddingHorizontal: 4,
              paddingVertical: 3,
              borderRadius: 15,
              borderColor: colors.aqua,
              borderWidth: 2,
            }}
          >
            <Image
              source={require("../assets/images/icon-carpool.png")}
              style={{ width: 16, height: 16, resizeMode: "contain" }}
            />
            <Text
              style={{
                color: colors.white,
                textAlign: "center",
                paddingLeft: 3,
              }}
            >
              Join A Carpool
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: colors.darkblue,
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 50,
              paddingHorizontal: 4,
              paddingVertical: 3,
              borderRadius: 15,
              borderColor: colors.aqua,
              borderWidth: 2,
            }}
            onPress={() => navigation.push("RideOptionsCard")}
          >
            <Image
              source={require("../assets/images/icon-pickup.png")}
              style={{ width: 16, height: 16, resizeMode: "contain" }}
            />
            <Text
              style={{
                color: colors.white,
                textAlign: "center",
                paddingLeft: 3,
              }}
            >
              Start a Carpool
            </Text>
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
    backgroundColor: colors.darkblue,
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "rgba(255,255,255,0.71)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.aqua,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
