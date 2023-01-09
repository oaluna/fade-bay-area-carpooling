import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../global/styles";
import { LinearGradient } from "expo-linear-gradient";

//Screen Height and width
const { height, width } = Dimensions.get("screen");

const userData = [
  {
    id: 1,
    name: "Taeyeon",
    time: "1:30 PM",
    message: "Noice",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 2,
    name: "Sunny",
    time: "2:30 PM",
    message: "wow..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 3,
    name: "Jessica",
    time: "6:00 AM",
    message: "Good Morning Sir..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 4,
    name: "Tiffany",
    time: "1:30 PM",
    message: "Noice",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 5,
    name: "Seohyun",
    time: "2:30 PM",
    message: "wow..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 6,
    name: "Sooyoung",
    time: "6:00 AM",
    message: "Good Morning Sir..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 7,
    name: "Yoona",
    time: "1:30 PM",
    message: "Noice",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 8,
    name: "Yuri",
    time: "2:30 PM",
    message: "wow..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 9,
    name: "Hyoyeon",
    time: "6:00 AM",
    message: "Good Morning Sir..",
    dp: require("../assets/images/icon-account-alt.png"),
  },
];

const Messages = ({ data }) => {
  return (
    <View style={styles.chatmain}>
      <View style={styles.chatcontent}>
        <Image style={styles.profilepic} source={data.dp} />
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.messages}>{data.message}</Text>
        </View>
      </View>
      <View style={styles.timeStamp}>
        <Text style={styles.time}>{data.time}</Text>
      </View>
    </View>
  );
};

const MessagesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={styles.container}
      >
        <View style={styles.header}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                type="antdesign"
                name="arrowleft"
                color="white"
                size={20}
                style={{ alignSelf: "flex-start" }}
              />
            </Pressable>
          </View>
          <Text style={styles.appName}>Messages</Text>
          <View style={[styles.leftIcons, { alignSelf: "flex-end" }]}>
            <Icon
              type="fontisto"
              name="search"
              size={20}
              color={theme.colors.neutral[0]}
            />
            <Icon
              type="material-community"
              name="dots-vertical"
              size={26}
              color={theme.colors.neutral[0]}
            />
          </View>
        </View>
        <ScrollView style={styles.chatMain}>
          {userData.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("MessageScreen", { data: e })}
                key={e.id}
                style={styles.message}
              >
                <Messages data={e} navigation={navigation} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.newChat}>
          <Icon
            type="material-community"
            name="android-messages"
            size={30}
            color="#fff"
            style={styles.newMessage}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  chatMain: {
    width: width,
    paddingHorizontal: 15,
    marginVertical: 15
  },
  screen: {
    flex: 1,
    marginTop: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: width,
    height: height,
    backgroundColor: theme.colors.red[6],
    paddingBottom: 0,
    marginBottom: 0,
  },
  newChat: {
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "3%",
    right: "4%",
  },
  chatcontent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profilepic: {
    height: 50,
    width: 50,
    backgroundColor: "gray",
    borderRadius: 100,
    marginRight: 17,
    marginTop: 15,
    alignItems:"center"
  },
  info: {},
  name: {
    color: "#fff",
    // fontWeight:'bold',
    fontSize: 18,
  },
  messages: {
    color: theme.colors.neutral[3],
    fontSize: 14,
    alignItems:"center"
  },
  message: {
    height: 80,
    marginVertical:2,
    backgroundColor: "rgba(255,255,255,0.11)",
    borderColor: "rgba(255,255,255,0.25)",
    borderWidth: 0.5,
    borderRadius: 50,
    elevation: 2,
    padding: 15,
    flexDirection:"row",
    alignItems:"center"
  },
  timeStamp: {
    alignSelf: "flex-end",
    width: width,
    left: width - 100,
    top: -25,
    alignItems:"flex-start"
  },
  time: {
    color: theme.colors.neutral[2],
    fontSize: 12,
    paddingTop: 5,
  },
  HeaderMain: {
    height: 90,
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width - 30,
    height: 90,
  },
  appName: {
    color: theme.colors.neutral[0],
    fontSize: 18,
    fontWeight: "bold",
  },
  leftIcons: {
    alignSelf: "flex-end",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 65,
    flexDirection: "row",
    top: -32,
  },
  newMessage: {
    backgroundColor: theme.colors.lightblue[4],
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems:"center",
    justifyContent:"center",
    elevation: 10
  }
});
