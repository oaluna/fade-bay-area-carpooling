import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../redux/slices/navSlice";
import { useSelector } from "react-redux";
import { colors } from "../global/styles";

const PickupIcon = () => <Image source={require("../assets/images/icon-pickup.png")} />
const CarpoolIcon = () => <Image source={require("../assets/images/icon-carpool.png")} />
const CalendarIcon = () => <Image source={require("../assets/images/icon-calendar.png")} />
const PlusIcon = () => <Image source={require("../assets/images/icon-plus.png")} />
const FavoritesIcon = () => <Image source={require("../assets/images/icon-favorites.png")} />
const MessagesIcon = () => <Image source={require("../assets/images/icon-messages.png")} />
const SettingsIcon = () => <Image source={require("../assets/images/icon-settings.png")} />

const data = [
  {
    id: "0",
    title: "Start a Carpool",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813319/FadeIcons/icon-pickup_fpnloc.png",
    screen: "MapScreen",
  },
  {
    id: "1",
    title: "Join a Carpool",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-carpool_q58kxk.png",
    screen: "EatsScreen",
  },
  {
    id: "2",
    title: "Scheduled Carpools",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-calendar_lrywil.png",
    screen: "EatsScreen",
  },
  {
    id: "3",
    title: "My Subscriptions",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813319/FadeIcons/icon-plus_ust5ud.png",
    screen: "EatsScreen",
  },
  {
    id: "4",
    title: "My Favorites",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-subscribed_igqrzq.png",
    screen: "EatsScreen",
  },
  {
    id: "5",
    title: "My Messages",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813323/FadeIcons/icon-messages_ckl9dx.png",
    screen: "EatsScreen",
  },
  {
    id: "6",
    title: "Settings",
    image: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813320/FadeIcons/icon-settings_qrpumg.png",
    screen: "EatsScreen",
  },

];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
    
          <TouchableOpacity
            onPress={() => navigation.push(item.screen)}
            disabled={!origin}
            style={styles.card}
          >
            <View>
              <Image
                source={{uri: item.image}}
                style={styles.image}
              />
              <View style={styles.cardText}>
                <Text style={styles.text}>{item.title}</Text>
                <Icon
                  type="antdesign"
                  name="arrowright"
                  color={colors.blue}
                  size={12}
                />
              </View>
            </View>
          </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.21)",
    position:"relative",
    marginTop: 75,
    marginRight: 10,
    marginVertical: 15,
    padding: 10,
    height: 150,
    width: 100,
    borderRadius: 15,
    borderColor: colors.blue,
    borderWidth: 1
  },
  image: {
    width: 84,
    height: 84,
    resizeMode: "contain",
    alignSelf: "center",
    display: "flex",
    alignItems: "flex-start",
    zIndex: 10,
  },
  text: {
    color: colors.snow,
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  cardText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20
  },
});