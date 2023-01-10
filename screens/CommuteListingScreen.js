import React from "react";
import { parameters, theme } from "../global/styles";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { Badge } from "react-native-paper";
import Screen from "../components/Screen";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";

const { width, height } = Dimensions.get("screen");

const CommuteListingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: height, width: width }}>
      <Screen style={styles.screen}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={[theme.colors.blue[8], theme.colors.blue[10]]}
          style={styles.screen}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: width,
              height: 90,
              marginLeft: -95,
            }}
          >
            <Icon
              type="antdesign"
              name="arrowleft"
              color="white"
              size={30}
              style={{
                alignSelf: "flex-start",

                position: "relative",
              }}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={[
                styles.header,
                {
                  fontSize: 18,
                  color: theme.colors.neutral[0],

                  alignItems: "center",
                },
              ]}
            >
              Commute Details
            </Text>
          </View>

          <View
            style={[
              styles.contentContainer,
              {
                height: height / 2,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                width: width,
                height: 300,
                marginTop: 15,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                marginVertical: 25,
                top: -45,
              }}
            >
              <Avatar
                source={require("../assets/images/oscarluna.png")}
                rounded
                size="medium"
                containerStyle={styles.avatar}
              />
              <Badge
                size={12}
                style={{ backgroundColor: theme.colors.green[4], left: -15 }}
              />
              <Text
                style={{
                  color: theme.colors.neutral[0],
                  marginLeft: 25,
                  fontSize: 20,
                }}
              >
                oscarluna
              </Text>
              <View style={{ top: 20, left: -70, flexDirection: "row" }}>
                <Text
                  style={{ color: theme.colors.lightblue[3], fontSize: 10 }}
                >
                  Driver
                </Text>
                <Image
                  source={require("../assets/images/icon-driver.png")}
                  style={[styles.icon, { marginLeft: 15 }]}
                />
              </View>
            </View>

            <View style={styles.footerContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: -105,
                  marginLeft: 20,
                }}
              >
                <Image
                  source={require("../assets/images/icon-to-from.png")}
                  style={{
                    flexDirection: "column",
                    resizeMode: "contain",
                    width: 50,
                    height: 120,
                    marginTop: 50,
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    height: 150,
                  }}
                >
                  <Text style={{ color: theme.colors.neutral[0] }}>
                    701 London Street, San Francisco, CA 94110
                  </Text>
                  <Text style={{ color: theme.colors.neutral[0] }}>
                    415 Mission Street, San Francisco, CA 94105
                  </Text>
                </View>
              </View>
              <View />
              <View
                style={[
                  styles.rightSideContainer,
                  { width: 200, alignItems: "flex-start" },
                ]}
              >
                <View
                  style={{
                    marginLeft: 15,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginBottom: 15,
                  }}
                >
                  <Image
                    source={require("../assets/images/icon-clock.png")}
                    style={{ resizeMode: "contain", width: 24, height: 24 }}
                  />
                  <Text
                    style={{
                      color: theme.colors.neutral[0],
                      fontSize: 20,
                      marginLeft: 15,
                    }}
                  >
                    9:00 AM
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    source={require("../assets/images/icon-seat.png")}
                    style={{ resizeMode: "contain", width: 24, height: 24 }}
                  />
                  <Text
                    style={{
                      color: theme.colors.neutral[0],
                      fontSize: 20,
                      marginLeft: 15,
                    }}
                  >
                    3
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.blue[8],
                padding: 5,
                width: 150,
                height: 80,
                left: 180,
                top: -45,
                elevation: 2,
              }}
            >
              <Text style={{ color: theme.colors.neutral[0] }}>
                Notes from Driver:
              </Text>
              <Text style={{ color: theme.colors.neutral[3] }}>none</Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/mapSnapshot.jpg")}
            style={{
              resizeMode: "contain",
              width: width,
              height: height - 400,
              bottom: 0,
            }}
          />
        </LinearGradient>
      </Screen>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 0,
    width: width,
    height: height,
    position: "absolute",
    elevation: 10,
    top: -15,
  },
  icon: {
    resizeMode: "contain",
    width: 12,
    height: 12,
    fontSize: 12,
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
    marginVertical: 5,
  },
  footerContainer: {
    paddingHorizontal: 15,
    height: 100,
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
    alignSelf: "flex-start",
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
