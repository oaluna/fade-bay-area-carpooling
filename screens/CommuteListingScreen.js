import React from "react";
import { colors, parameters, theme } from "../global/styles";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Screen from "../components/Screen";
import Map from "../components/Map";
import NavFavourites from "../components/NavFavourites";
import { LinearGradient } from "expo-linear-gradient";
import NavOptions from "../components/NavOptions";
import Feed from "../components/Feed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const CommuteListingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Screen style={styles.screen}>
    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 1 }} colors={[theme.colors.blue[10], theme.colors.blue[8]]} style={styles.screen}>
      <View style={{ backgroundColor: theme.colors.purple[6] }}>
        <View>
          <Text style={[styles.header, { color: theme.colors.neutral[0] }]}>
            Commute Details
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            
            paddingTop: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Image
            source={require("../assets/images/icon-driver.png")}
            style={{ resizeMode: "contain", width: 18, height: 18, left: 200 }}
          />
          <Text
            style={{
              color: theme.colors.blue[4],
              fontSize: 12,
              left: 205,
              position: "relative",
            }}
          >
            Driver
          </Text>
          <Image
            source={require("../assets/images/icon-account.png")}
            style={{
              resizeMode: "contain",
              marginTop: 25,
              marginLeft: -20,
              height: 84,
              width: 84,
            }}
          />
          <Text style={{ color: theme.colors.neutral[0], fontSize: 20 }}>
            Oscar Luna
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Image
            source={require("../assets/images/icon-favorites.png")}
            style={{
              resizeMode: "contain",
              width: 24,
              height: 24,
              left: 110,
              top: -40,
            }}
          />
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 10,
              left: 110,
              top: -30,
            }}
          >
            5 Stars, 393 reviews
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 0,
            paddingRight: 25,
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Image
            source={require("../assets/images/icon-to-from.png")}
            style={{
              resizeMode: "contain",
              width: 96,
              height: 96,
              left: 0,
              top: 0,
            }}
          />
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 14,
              left: 0,
              top: -40,
            }}
          >
            701 London Street
          </Text>
          <Image
            source={require("../assets/images/icon-clock.png")}
            style={{
              resizeMode: "contain",
              width: 24,
              height: 24,
              left: 50,
              top: -40,
            }}
          />
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 10,
              left: 65,
              top: -40,
            }}
          >
            9:00 AM
          </Text>
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 14,
              left: -150,
              top: 0,
            }}
          >
            415 Mission Street
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 14,
              left: 15,
              top: 18,
              height: 50,
            }}
          >
            Message from Driver:
          </Text>
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 18,
              left: 25,
              top: 0,
            }}
          >
            None
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.3)",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 14,
              left: 15,
              top: 18,
              height: 50,
            }}
          >
            Vehicle Make/Model:
          </Text>
          <Text
            style={{
              color: theme.colors.neutral[0],
              fontSize: 18,
              left: 25,
              top: 0,
            }}
          >
            Ford Escape - 2003
          </Text>
        </View>
      </View>
      </LinearGradient>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 0,
    width: width,
    height: height,
    position:'absolute'
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
    marginBottom: 20,

    fontSize: 24,
  },
  text1: {
    color: theme.colors.neutral[0],
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue[9],
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    color: theme.colors.neutral[0],
    fontSize: 24,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 25,
  },

  image1: {
    height: 64,
    width: 64,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "flex-start",
    resizeMode: "cover",
    overflow: "visible",
  },

  cardImage: {
    height: 64,
    width: 64,
    borderWidth: 2,
    alignSelf: "center",
  },

  home: {
    backgroundColor: theme.colors.blue[9],
    paddingLeft: 20,
  },

  text1: {
    color: theme.colors.neutral[0],
    fontSize: 42,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: theme.colors.neutral[0],
    fontSize: 16,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  button1: {
    height: 40,
    width: 150,

    borderRadius: 20,
  
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  button1Text: {
    color: theme.colors.neutral[0],
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    alignItems: "center",
    margin: width / 120,
    paddingTop: 15,
  },

  cardHeader: {
    marginBottom: 5,


    width: 80,
    height: 110,


    borderWidth: 2,
  },

  title: {
    color: theme.colors.neutral[0],
    fontSize: 12,
    margin: 5,
    textAlign: "center",
  },
  view3: {
    flexDirection: "row",
    marginTop: 15,
    height: 50,
    backgroundColor: theme.colors.blue[9],
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  text3: { fontSize: 24, color: theme.colors.neutral[0] },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    height: 32,
  },

  view5: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    
    padding: 15,
    marginVertical: 5,
    justifyContent: "space-between",
    marginHorizontal: 15,
    color: theme.colors.neutral[0],
   
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  view7: {
   
    height: 32,
    width: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  map: {
    height: 400,
    marginVertical: 0,
    width: width,
  },

  text4: {
    fontSize: 20,
    color: theme.colors.neutral[0],
    marginLeft: 20,
    marginVertical: 20,
  },

  icon1: { alignSelf: "flex-start", marginLeft: 15, marginTop: 15 },

  view8: { flex: 4, marginTop: -25 },
  carsAround: {
    width: 28,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.blue[9],
    alignItems: "center",
    justifyContent: "center",
  },

  view9: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.blue[9],
  },
});

export default CommuteListingScreen;
