import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../redux/slices/navSlice";
import { useSelector } from "react-redux";
import { colors, theme } from "../global/styles";

const PickupIcon = () => (
  <Image source={require("../assets/images/icon-pickup.png")} />
);
const CarpoolIcon = () => (
  <Image source={require("../assets/images/icon-carpool.png")} />
);
const CalendarIcon = () => (
  <Image source={require("../assets/images/icon-calendar.png")} />
);
const PlusIcon = () => (
  <Image source={require("../assets/images/icon-plus.png")} />
);
const FavoritesIcon = () => (
  <Image source={require("../assets/images/icon-favorites.png")} />
);
const MessagesIcon = () => (
  <Image source={require("../assets/images/icon-messages.png")} />
);
const SettingsIcon = () => (
  <Image source={require("../assets/images/icon-settings.png")} />
);

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: "0",
    title: "Carpool",
    image:
      require("../assets/images/icon-carpool-alt.png"),
    screen: "MapScreen",
  },
  {
    id: "1",
    title: "Scheduled",
    image:
      require("../assets/images/icon-calendar-alt.png"),
    screen: "ScheduleScreen",
  },
  {
    id: "2",
    title: "Subscribed",
    image:
      require("../assets/images/icon-plus-alt.png"),
    screen: "ScheduleScreen",
  },
  {
    id: "3",
    title: "Messages",
    image:
      require("../assets/images/icon-inbox-alt.png"),
    screen: "EatsScreen",
  },
  {
    id: "4",
    title: "Settings",
    image:
      require("../assets/images/icon-settings-alt.png"),
    screen: "SettingsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <KeyboardAvoidingView>
      <FlatList
        data={data}
        contentContainerStyle={{
          width: width,
          alignSelf: "flex-start",
          alignItems: "flex-end",
          height: 170,
          elevation:10
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push(item.screen)}
            disabled={!origin && item.id === "0"}
            style={
              !origin && item.id === "0"
                ? [styles.card, { backgroundColor: theme.colors.neutral[8] }]
                : styles.card
            }
          >
            <View>
              <Image
                source={
                  item.image
                }
                style={styles.image}
              />
              <View style={styles.cardText}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </KeyboardAvoidingView>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,.11)",
   flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:75,
    width: 75,
    zIndex: 20,
    padding: 5,
    overflowX: "scroll",
    marginBottom: 0
  
  
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    display: "flex",
    alignItems: "flex-start",
    zIndex: 10,
  },
  text: {
    color: theme.colors.neutral[0],
    fontSize: 11,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 12,
    paddingVertical: 0,
    
  },
  cardText: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: 60,
    textAlign: "center",
    marginTop: 1,
  },
});
