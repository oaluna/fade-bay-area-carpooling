import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { colors, theme } from "../global/styles";

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
    <KeyboardAvoidingView>
      <View style={{ marginTop: -40, height: 175 }}>
      <Text style={{color: theme.colors.neutral[0]}}>My Saved Locations</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handlePress}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
            backgroundColor: theme.colors.neutral[7],
                borderWidth: 1,
                  borderBottomColor: theme.colors.lightblue[4],
                width: width -30,
                height: 60,
                alignSelf:"flex-start",
                justifyContent: "space-evenly",
                elevation: 1
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ marginRight: 15, height: 30, width: 30 }}
              />
              <View
                style={{
                  marginVertical: 0,
                  justifyContent: "space-evenly",
                  height: 60,
                  
                }}
              >
                <Text style={{ color: theme.colors.neutral[0], fontSize: 18 }}>
                  {item.location}
                </Text>
                <Text style={{ color: theme.colors.neutral[0], fontSize: 12 }}>
                  {item.destination}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          style={{ height: 200 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
