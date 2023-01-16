import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { Icon, Avatar, Badge } from "react-native-elements";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles as Styles } from "../screens/CommuteListingScreen";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const SubscriptionCard = () => {
  return (
    <View>
    <View style={{flexDirection:"row", paddingLeft: 15}}>
      <Text style={{position:"relative", color: theme.colors.neutral[0], marginTop: 75, height: 80, fontSize: 16}}>My Rides</Text>
    </View>
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
            { backgroundColor: theme.colors.red[5] },
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
            { width: 200, height: 50, alignItems: "flex-start", top: 130 },
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
            <Text style={{ color: theme.colors.neutral[0], marginLeft: 15 }}>
              S<Text style={{ color: theme.colors.green[4] }}> M T W R F </Text>
              S
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

          height: height / 4.45,
          width: width / 2.25,
          top: -130,
          right: -190,
          elevation: 15,
        }}
      />
    </View>
    </View>
  );
};

export default SubscriptionCard;
