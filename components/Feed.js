import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Switch,
  View,
  Dimensions,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin, selectDestination } from "../redux/slices/navSlice";
import { useSelector } from "react-redux";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    type: "ride",
    id: 0,
    username: "oscarLuna",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "drive",
    id: 1,
    username: "oscarLuna",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "ride",
    id: 2,
    username: "oscarLuna",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "ride",
    id: 3,
    username: "oscarLuna",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "drive",
    id: 4,
    username: "oscarLuna",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <View style={{ width: width, height: 400 }}>
      <View style={{ flex: 1, alignSelf: "flex-start" }}>
        <Text
          style={{
            color: colors.snow,
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Commute Feed
        </Text>
      </View>
      <View style={styles.feed}>
        <Pressable
          style={styles.bg}
          onPress={() => navigation.navigate("CommuteListingScreen")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: width - 80,
              alignSelf: "flex-start",
              marginLeft: -40,
            }}
          >
            <Image
              source={require("../assets/images/icon-calendar.png")}
              style={{
                resizeMode: "contain",
                marginLeft: 5,
                alignSelf: "center",
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                color: colors.snow,
                fontSize: 12,
                textAlign: "left",
                marginRight: 25,
              }}
            >
              January 12, 2023
            </Text>
            <Image
              source={require("../assets/images/icon-clock.png")}
              style={{
                resizeMode: "contain",
                marginLeft: 25,
                justifyContent: "space-between",
                alignSelf: "center",
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                color: colors.snow,
                fontSize: 12,
                textAlign: "center",
                marginRight: 25,
              }}
            >
              9:00 AM
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              position: "absolute",
              left: 0,
              top: 40,
              width: width,
            }}
          >
            <Image
              source={require("../assets/images/icon-account.png")}
              style={{
                width: 96,
                height: 96,
                resizeMode: "contain",
                borderRadius: 35,
                flexDirection: "row",
                color: colors.snow,
                fontSize: 10,
                textAlign: "left",
                alignItems: "center",
                alignSelf: "flex-start",
                left: 0,
                top: 30,
              }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                alignItems: "flex-start",
                textAlign: "left",
                marginRight: 150,
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: colors.snow,
                  fontSize: 24,
                  textAlign: "center",
                }}
              >
                Oscar Luna
              </Text>
              <Image
                source={require("../assets/images/icon-favorites.png")}
                style={{
                  resizeMode: "contain",
                  justifyContent: "space-between",
                  alignSelf: "flex-start",
                  width: 24,
                  height: 24,
                }}
              />
              <Text
                style={{
                  color: colors.snow,
                  fontSize: 10,
                  textAlign: "center",
                  flexDirection:"row",
                }}
              >
                5.00 Rating
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: colors.snow,
              fontSize: 10,
              marginTop: 135,
              marginLeft: 175,
            }}
          >
            Click to view Route Details
          </Text>
          <Icon
            name="chevron-right"
            type="font-awesome-5"
            color={colors.aqua}
            size={24}
            style={{ marginTop: 125, marginRight: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  feed: {
    height: 320,
  
    marginLeft: -15,
  },
  bg: {
    backgroundColor: "rgba(255,255,255,0.21)",
    borderColor: colors.aqua,
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    flexWrap: "wrap",
    height: 220,
    borderWidth: 1,
    paddingVertical: 25,
    flexDirection: "row",
    color: colors.snow,
    fontSize: 10,
    textAlign: "center",
    width: width,
    justifyContent: "space-evenly",
    position: "relative",
  },
  image: {
    width: width / 3,
    height: 72,
    resizeMode: "contain",
    alignSelf: "center",
    display: "flex",

    alignItems: "flex-start",
    justifyContent: "space-between",
    zIndex: 10,
  },
  text: {
    color: colors.snow,
    fontSize: 10,
    textAlign: "center",
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 0,
  },
});
