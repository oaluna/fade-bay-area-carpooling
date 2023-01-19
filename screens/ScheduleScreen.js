import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, Avatar, Badge } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
import { theme } from "../global/styles";
import { useSelector } from "react-redux";
import { selectOrigin } from "../redux/slices/navSlice";

import { styles as Styles } from "./CommuteListingScreen";

const ScheduleScreen = (data, route) => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!origin) navigation.replace("HomeScreen");
  }, []);

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[8], theme.colors.blue[10]]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="white"
            size={20}
            style={{ alignSelf: "flex-start", paddingLeft: 15 }}
          />
        </Pressable>
        <Text
          style={{
            color: theme.colors.neutral[0],
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginLeft: 25,
            marginRight: -25,
          }}
        >
          My Scheduled Rides
        </Text>
      </View>
      {origin ? (
        <View
          style={[
            Styles.contentContainer,
            {
              height: height / 3.05,
              width: width,
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "center",
              justifyContent: "space-evenly",
              width: width,
              position: "absolute",
              top: 110,
              bottom: -20,
              zIndex: 10,
              backgroundColor: theme.colors.neutral[7],
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 80,
              marginTop: 40,
            }}
          >
            <Badge
              size={14}
              badgeStyle={{
                backgroundColor: theme.colors.green[4],
                top: 20,
                left: 15,
                zIndex: 2,
                width: 12,
                height: 12,
                borderRadius: 12,
              }}
            />
            <Avatar
              source={require("../assets/images/oscarluna.png")}
              rounded
              size="medium"
              containerStyle={[
                Styles.avatar,
                { backgroundColor: theme.colors.lightblue[2] },
              ]}
            />
            <Text
              style={{
                color: theme.colors.neutral[0],
                marginLeft: 5,
                fontSize: 20,
              }}
            >
              oscarluna
            </Text>
            <View style={{ top: 20, left: -70, flexDirection: "row" }}>
              <Text style={{ color: theme.colors.lightblue[3], fontSize: 10 }}>
                Driver
              </Text>
              <Image
                source={require("../assets/images/icon-driver.png")}
                style={[
                  Styles.icon,
                  { marginLeft: 55, marginTop: -15, width: 25, height: 25 },
                ]}
              />
            </View>
          </View>
          <View style={Styles.footerContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: -75,
                marginLeft: 5,
              }}
            >
              <Image
                source={require("../assets/images/icon-to-from.png")}
                style={{
                  flexDirection: "column",
                  resizeMode: "contain",
                  width: 50,
                  height: 120,
                  position: "absolute",
                  top: 255,
                  left: -25,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  height: 95,
                  width: width / 2.5,
                  justifyContent: "space-evenly",
                  position: "absolute",
                  top: 240,
                  left: 15,
                }}
              >
                <Text style={{ color: theme.colors.neutral[0], fontSize: 12 }}>
                  701 London Street, San Francisco, CA 94110
                </Text>
                <Text style={{ color: theme.colors.neutral[0], fontSize: 12 }}>
                  415 Mission Street, San Francisco, CA 94105
                </Text>
              </View>
            </View>
            <View />

            <View
              style={[
                {
                  width: 175,
                  height: 100,
                  alignItems: "flex-start",
                  top: 130,
                  backgroundColor: theme.colors.neutral[8],
                  elevation: 2
                },
              ]}
            >
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: 5,
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
                  Time: 9:00 AM
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={require("../assets/images/icon-calendar.png")}
                  style={{ resizeMode: "contain", width: 24, height: 24 }}
                />
                <Text
                  style={{
                    color: theme.colors.neutral[0],
                    marginLeft: 15,
                    width: width / 3.25,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  Sun
                  <Text style={{ color: theme.colors.green[4] }}>
                    {" "}
                    Mon Tues Wed Thu Fri{" "}
                  </Text>
                  Sat
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 5,
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
                  Seats: 3
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: theme.colors.neutral[5],
              padding: 5,
              borderRadius: 50,
              width: width / 2,
              height: 50,
              left: width / 2.1,
              top: 130,
              elevation: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: theme.colors.neutral[3] }}>
              View Booked Seats:{" "}
            </Text>
            <Text style={{ color: theme.colors.neutral[3] }}>0</Text>
          </View>

          <Image
            source={require("../assets/images/mapSnapshot.jpg")}
            style={{
              resizeMode: "cover",
              borderRadius: 25,
              height: height / 4.45,
              width: width / 2.5,
              top: -130,
              left: 15 + width / 2,
              shadowColor: "rgba(0,0,0,0.3)",
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowRadius: 25,
              shadowOpacity: 1,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: "column",
            height: height / 4,
            justifyContent: "space-evenly",
            marginTop: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: width - 30,
              height: height / 6,
              backgroundColor: theme.colors.neutral[6],
              marginTop: 200,
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                color: theme.colors.neutral[3],
                fontSize: 16,
                width: width - 30,
                textAlign: "center",
                letterSpacing: 0.15,
              }}
            >
              You have not started any carpools. Start a carpool by entering
              your starting address below.
            </Text>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: theme.colors.neutral[5],
                  padding: 5,
                  borderRadius: 50,
                  width: width / 2,
                  height: 50,
                  left: width / 2.1,
                  top: 130,
                  elevation: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: theme.colors.neutral[3] }}>Go back</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: width - 30,
              height: height / 6,
              backgroundColor: theme.colors.neutral[6],
              marginTop: 200,
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                color: theme.colors.neutral[3],
                fontSize: 16,
                width: width - 30,
                textAlign: "center",
                letterSpacing: 0.15,
              }}
            >
              You have not joined any carpools.
            </Text>
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          width: width,
          height: height / 6,
          backgroundColor: theme.colors.neutral[7],
          marginTop: 450,
          paddingTop: 20,
          marginLeft: -15,
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            color: theme.colors.neutral[3],
            fontSize: 16,
            width: width - 30,
            textAlign: "center",
            letterSpacing: 0.15,
          }}
        >
          You have not joined any carpools.
        </Text>
        <Pressable onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            flexDirection: "row",
            backgroundColor: theme.colors.lightblue[5],
            padding: 5,
            borderRadius: 50,
            width: width / 2,
            height: 50,
            left: 100,
            top: 80,
            elevation: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: theme.colors.neutral[3] }}>Go back</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,

    width: width,
    height: height,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width - 30,
    height: 90,
    position: "absolute",
    left: -60,
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  floatLeft: {
    marginRight: "auto",
  },
  floatRight: {
    marginLeft: "auto",
  },
  menuImageStyle: {
    width: 20,
    height: 20,
  },
  profileImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  body: { fontSize: 12, marginVertical: -40, color: theme.colors.neutral[0] },
  contentContainer: {
    marginTop: 12,
  },
  titleTextStyle: {
    fontSize: 46,
    color: theme.colors.neutral[0],
    fontWeight: "bold",
  },
  subtitleTextStyle: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "400",
    color: theme.colors.neutral[2],
  },
});

export default ScheduleScreen;
