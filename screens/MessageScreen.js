import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { theme } from "../global/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const DetailsChat = ({ route, navigation, props }) => {
  const messageData = [
    {
      id: 1,
      messageType: "incoming",
      message: "Hi, I'm interested in carpooling with you!",
      time: "10:00 PM",
    },
    {
      id: 2,
      messageType: "outgoing",
      message: "Sure! Subscribe to my Pool and you're set!",
      time: "10:03 PM",
    },
  ];

  const [messages, setMessages] = React.useState([]);
  const { data } = route.params;

  const handleMessagesChange = () => {
    setMessages({ ...messageData, message: messageData.message });
  };

  return (
    <SafeAreaView>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={styles.gradient}
      >
        <StatusBar style="inverted" />
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Icon
              type="antdesign"
              name="arrowleft"
              color="white"
              size={20}
              style={{ alignSelf: "flex-start" }}
            />
          </TouchableWithoutFeedback>
          <Image
            style={[styles.dp, { backgroundColor: data.iconColor }]}
            source={data.dp}
          />
          <Text style={styles.Name}>{data.name}</Text>
          <View style={styles.leftIcons}>
            <Icon type="ionicons" name="videocam" size={24} color="#fff" />
            <Icon type="ionicons" name="call" size={20} color="#fff" />
            <Icon
              type="material-community"
              name="dots-vertical"
              size={26}
              color="#fff"
            />
          </View>
        </View>
        <FlatList
          data={messageData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.chat}>
              <View
                style={[
                  styles.chatbubbleinbox,
                  { backgroundColor: data.iconColor },
                ]}
              >
                <Text style={styles.chattext}>
                  {data.message}
                </Text>
                <Text style={styles.chattime}>10:00 PM</Text>
              </View>
              <View style={styles.chatbubbleoutbox}>
                <Text style={styles.chattext}>
                  Sure! Subscribe to my Pool and you're set!
                </Text>
                <Text style={styles.chattime}>10:03 PM</Text>
              </View>
            </View>
          )}
          style={styles.chatpart}
        />
        <KeyboardAvoidingView style={styles.chatinput}>
          <Icon
            type="material-community"
            name="emoticon"
            size={24}
            color={theme.colors.neutral[0]}
          />
          <TextInput
            style={styles.input}
            placeholder="Message"
            placeholderTextColor={theme.colors.neutral[0]}
          />
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Icon
              style={styles.icon}
              type="entypo"
              name="attachment"
              size={20}
              color={theme.colors.neutral[0]}
            />

            <Icon
              style={styles.icon}
              type="fontisto"
              name="camera"
              size={20}
              color={theme.colors.neutral[0]}
            />

            <Icon
              style={styles.icon}
              type="material-community"
              name="microphone"
              size={30}
              color={theme.colors.neutral[0]}
            />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DetailsChat;

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  HeaderMain: {
    height: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: width,
    paddingHorizontal: 15,
    height: 90,
    backgroundColor: theme.colors.neutral[7],
    elevation: 6,
  },
  Name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 65,
    marginLeft: -65,
  },
  dp: {
    height: 35,
    width: 35,
    backgroundColor: "gray",
    borderRadius: 100,
    marginRight: 35,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "3%",
    marginRight: -10,
    width: 100,
  },
  chatpart: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  chatinput: {
    height:90,
    width: width,
    position: "absolute",

    left: 0,
    bottom: 0,
    paddingHorizontal: 15,
    paddingBottom: 36,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.neutral[7],
  },
  input: {
    color: "#fff",
    backgroundColor: theme.colors.neutral[4],
    fontSize: 18,
    width: width * 0.6,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 15,
    overflow: "scroll",
    paddingHorizontal: 15,
  },
  icon: {
    width: 35,
    height: 50,
    flexDirection: "row",
  },
  payment: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral[0],
    justifyContent: "center",
    alignItems: "center",
  },
  voice: {
    height: 55,
    width: 55,
    borderRadius: 100,
    margin: 2,
    alignItems: "center",
  },
  chat: {
    flex: 1,
    width: width,
    height: height,
    marginTop: 20,
    marginBottom: 160,
    paddingHorizontal: 15,

    justifyContent: "flex-start",
  },
  chatbubbleinbox: {
    borderRadius: 50,
    borderTopLeftRadius: 0,
    padding: 15,
    marginVertical: 15,
    width: width * 0.7,

    alignSelf: "flex-start",
    verticalAlign: "top",
    elevation: 1,
  },
  chatbubbleoutbox: {
    backgroundColor: theme.colors.neutral[5],
    borderRadius: 50,
    borderTopRightRadius: 0,
    padding: 15,
    marginVertical: 15,
    width: width * 0.7,
    alignSelf: "flex-end",
    verticalAlign: "top",
    elevation: 1,
  },

  chattext: {
    color: theme.colors.neutral[0],
  },
  chattime: {
    color: theme.colors.neutral[2],
    marginVertical: 5,
  },
});