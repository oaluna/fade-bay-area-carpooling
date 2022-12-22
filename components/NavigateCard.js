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

const NavigateCard = ({ isEnabled, getInputData, data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
      style={[
        toInputBoxStyles,
        {
          flex: 1,
          
          elevation: 2,
          width: width + 10,
          position: "absolute",
          left: -7.5,
        },
      ]}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[9], theme.colors.blue[8]]}
        style={{ width: width, height: height, borderTopLeftRadius: 15,
          borderTopRightRadius: 15, }}
      >
        <Text
          style={{
            textAlign: "left",
            paddingVertical: 20,
            paddingLeft: 15,
            fontSize: 32,
            fontWeight: "bold",
            color: colors.white,
            width: width,
          }}
        >
          Good morning, {isEnabled ? "Driver" : "Rider"}
        </Text>
        <View
          style={{
            borderTopColor: theme.colors.blue[5],
            flexShrink: 1,
            position: "relative",
            zIndex: 20,
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
            zIndex: 10,
            justifyContent: "space-evenly",
            height: 250,
          }}
        >
          <NavFavourites />
        </View>
        <View style={styles.buttonContainer}>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]} style={styles.navOption}>
          <TouchableOpacity
            onPress={() => navigation.push("RideOptionsCard")}
        
          >
            
            <Text style={styles.buttonText}>Join A Carpool</Text>
          </TouchableOpacity>
</LinearGradient>
 <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]} style={styles.navOption}>
          <TouchableOpacity
            onPress={() => navigation.push("RideOptionsCard")}
          
          >
          
            <Text style={styles.buttonText}>Start A Carpool</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </Screen>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    width: width - 30,
    alignSelf: "center",
  },
  textInput: {
    fontSize: 15,
    backgroundColor: theme.colors.neutral[0],
    borderRadius: 15,
    borderWidth: 2,
    borderColor: theme.colors.neutral[4],
  },
  textInputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 20,
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
    justifyContent: "center",
    width: 180,
    height: 60,
    marginTop: 15,
    paddingHorizontal: 0,
    paddingVertical: 3,
    borderRadius: 15,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 0,
    width: width,
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
