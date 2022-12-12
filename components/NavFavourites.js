import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: "0",
    image:
      "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813323/FadeIcons/icon-home_s1izvf.png",
    location: "Home",
    destination: "701 London Street, San Francisco, CA 94112",
  },
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-work_c8u42z.png",
    location: "Work",
    destination: "415 Mission Street, San Francisco, CA 94112",
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();

  const handlePress = () => {};

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={handlePress}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            borderBottomColor: colors.aqua,
            borderBottomWidth: 1,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ marginRight: 15, height: 35, width: 35 }}
          />
          <View style={{ marginVertical: 15 }}>
            <Text style={{ color: colors.snow, fontSize: 18 }}>
              {item.location}
            </Text>
            <Text style={{ color: colors.white, fontSize: 12 }}>
              {item.destination}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={{ borderBottomColor: colors.aqua }} />
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
