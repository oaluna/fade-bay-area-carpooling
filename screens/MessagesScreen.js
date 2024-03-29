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
const { height, width } = Dimensions.get("window");

const userData = [
  {
    id: 1,
    iconColor: "#B71C1C",
    name: "Taeyeon",
    time: "1:30 PM",
    message: "Hi, how can I subscribe to your daily commute?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 2,
    iconColor: "#D62598",
    name: "Sunny",
    time: "2:30 PM",
    message: "Hey, I'm going to need to cancel my ride on Monday. Is that cool?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 3,
    iconColor: "#311B92",
    name: "Jessica",
    time: "6:00 AM",
    message: "Good Morning! ^^",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 4,
    iconColor: "#00897B",
    name: "Tiffany",
    time: "1:30 PM",
    message: "Thanks for the ride! How can I make this a regular thing?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 5,
    iconColor: "#FF6D00",
    name: "Seohyun",
    time: "2:30 PM",
    message: "Hey, I'm going to need to cancel my ride on Monday. Is that cool?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 6,
    iconColor: "#E1523D",
    name: "Sooyoung",
    time: "6:00 AM",
    message: "Good Morning! ^^",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 7,
    iconColor: "#971B2F",
    name: "Yoona",
    time: "1:30 PM",
    message: "Hi, how can I subscribe to your daily commute?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 8,
    iconColor: "#D69A2D",
    name: "Yuri",
    time: "2:30 PM",
    message: "Hey, I'm going to need to cancel my ride on Monday. Is that cool?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 9,
    iconColor: "#004C97",
    name: "Hyoyeon",
    time: "6:00 AM",
    message: "Good Morning! ^^",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 10,
    iconColor: "#44D62C",
    name: "Lisa",
    time: "6:00 AM",
    message: "Good Morning! ^^",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 11,
    iconColor: "#F93822",
    name: "Jisoo",
    time: "1:30 PM",
    message: "Hi, how can I subscribe to your daily commute?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 12,
    iconColor: "#D62598",
    name: "Rosé",
    time: "2:30 PM",
    message: "Hey, I'm going to need to cancel my ride on Monday. Is that cool?",
    dp: require("../assets/images/icon-account-alt.png"),
  },
  {
    id: 13,
    iconColor: "#4E008E",
    name: "Jennie",
    time: "6:00 AM",
    message: "Good Morning! ^^",
    dp: require("../assets/images/icon-account-alt.png"),
  },
];

const Messages = ({ data }) => {
  return (
    <View style={styles.chatmain}>
      <View style={styles.chatcontent}>
        <Image
          style={[styles.profilepic, { backgroundColor: data.iconColor }]}
          source={data.dp}
        />
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
                onPress={() =>
                  navigation.navigate("MessageScreen", { data: e })
                }
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
    marginVertical: 15,
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

    borderRadius: 100,
    marginRight: 17,
    marginTop: 15,
    alignItems: "center",
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
    alignItems: "center",
    width: 180
  },
  message: {
    height: 80,
    marginVertical: 2,
    backgroundColor: theme.colors.neutral[8],
    borderWidth: 0.5,
    borderRadius: 50,
    elevation: 2,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  timeStamp: {
    alignSelf: "flex-end",
    width: width,
    left: width * 0.7,
    textAlign:'left',
    top:-35,
    alignItems: "flex-start",
  },
  time: {
    color: theme.colors.neutral[3],
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
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
