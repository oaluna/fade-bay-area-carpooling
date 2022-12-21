import React from "react";
import { colors, parameters, theme } from "../global/styles";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "../components/Screen";
import Map from "../components/Map";
import NavFavourites from "../components/NavFavourites";
import NavOptions from "../components/NavOptions";
import Feed from "../components/Feed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation, ...props }) => {
  const dispatch = useDispatch();
  return (
    <Screen>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[10], theme.colors.blue[8]]}
        style={styles.screen}
      >
        <Image
          source={require("../assets/images/fade-logo.png")}
          style={styles.logo}
        />
        <View style={{ backgroundColor: "transparent" }}>
          <Text style={styles.text1}>
            Welcome, {props.isEnabled === true ? "Driver" : "Rider"}!
          </Text>
        </View>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  loaction: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
              navigation.navigate("MapScreen");
            }}
            minLength={2}
            fetchDetails={true}
            returnKeyType={"search"}
            onFail={(error) => console.error(error)}
            query={{
              key: GOOGLE_MAP_APIKEY,
              language: "en",
            }}
            styles={{
              container: {
                flex: 0,

                width: width - 30,
              },
              textInput: {
                fontSize: 15,
                borderRadius: 15,
                height: 50,
                borderColor: theme.colors.neutral[4],
                borderWidth: 1,
                backgroundColor: theme.colors.neutral[0],
              },
            }}
            enablePoweredByContainer={true}
          />
        </View>
        <NavOptions />
        <NavFavourites />

        <Feed />
      </LinearGradient>
    </Screen>
  );
};

const HomeScreenContainer = () => {
  const { startTransition } = useBetweenPages(<HomeScreen />);
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    paddingLeft: 15,
    width: width,
    height: height,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text1: {
    color: theme.colors.neutral[0],
    fontSize: 42,
    paddingBottom: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.purple[6],
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: theme.colors.purple[6],
    height: parameters.headerHeight,
    alignItems: "center",
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
    backgroundColor: theme.colors.purple[6],
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
    backgroundColor: "rgba(255,255,255,0.21)",
    borderRadius: 20,
    borderColor: theme.colors.blue[4],
    borderWidth: 2,
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
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.11)",
    width: 80,
    height: 110,
    borderColor: theme.colors.blue[4],

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
    backgroundColor: theme.colors.purple[6],
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  text3: { fontSize: 24, color: theme.colors.neutral[0] },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.21)",
    borderColor: theme.colors.blue[4],
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    height: 32,
  },

  view5: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    backgroundColor: "rgba(155,155,155,0.25)",
    padding: 15,
    marginVertical: 5,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: theme.colors.blue[4],
    color: theme.colors.neutral[0],
    borderBottomWidth: 1,
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  view7: {
    backgroundColor: theme.colors.blue[4],
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
    backgroundColor: theme.colors.purple[6],
    alignItems: "center",
    justifyContent: "center",
  },

  view9: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.purple[6],
  },
});

export default HomeScreen;
