import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  Divider,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors, theme } from "../global/styles";
import { LinearGradient } from "expo-linear-gradient";
import useFileUpload, { UploadItem } from "react-native-use-file-upload";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: 0,
    title: "Edit Profile",
    icon: "edit",
    target: "EditProfileScreen",
  },
  {
    id: 1,
    title: "Privacy Settings",
    icon: "lock",
    target: "HomeScreen",
  },
  {
    id: 2,
    title: "Account Settings",
    icon: "user",
    target: "HomeScreen",
  },
  {
    id: 3,
    title: "My Contact List",
    icon: "phone",
    target: "HomeScreen",
  },
  {
    id: 4,
    title: "My Recent Rides",
    icon: "car",
    target: "HomeScreen",
  },
  {
    id: 5,
    title: "Support",
    icon: "team",
    target: "HomeScreen",
  },
  {
    id: 6,
    title: "Sign Out",
    icon: "logout",
    target: "HomeScreen",
  },
];

export default function SettingsScreen({ navigation }) {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[9], theme.colors.purple[10]]}
      style={styles.container}
    >
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="white"
            size={20}
            style={{ alignSelf: "flex-start", marginTop: 45, marginLeft: 15 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          height: 200,
          position: "absolute",
          left: 0,
        }}
      >
        <Text
          style={{
            color: theme.colors.neutral[0],
            fontSize: 40,
            textAlign: "left",
            justifyContent: "flex-start",
            width: width,
            marginTop: 75,
            marginLeft: 25,
          }}
        >
          Settings
        </Text>
      </View>
      <View style={{ height: 200, marginTop: 100 }}>
        <Pressable
          style={{
            backgroundColor: theme.colors.neutral[10],
            width: 100,
            height: 100,
            alignSelf: "center",
            borderRadius: 50,
            opacity: 0.5,
            position: "absolute",
            zIndex: 20,
            top: 10,
            elevation: 2,
          }}
        >
          <Icon
            type="antdesign"
            name="plus"
            size={32}
            color="white"
            style={{ marginTop: 30 }}
          />

          <Text
            style={{
              color: theme.colors.neutral[0],
              alignSelf: "center",
              marginVertical: 0,
              textAlign: "center",
              height: 100,
              width: 100,
            }}
          >
            Upload a Profile Picture
          </Text>
        </Pressable>
        <Image
          source={require("../assets/images/icon-account.png")}
          style={{
            resizeMode: "contain",
            width: 120,
            height: 120,
            alignSelf: "center",
            alignItems: "center",
          }}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              height: 60,
              marginLeft: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate(item.target)}
          >
            <Icon
              type="antdesign"
              name={item.icon}
              size={20}
              color="white"
              style={{
                width: 20,
                height: 20,
                alignItems: "center",
                marginVertical: 5,
                marginHorizontal: 15,
              }}
            />
            <Text
              style={{
                color: theme.colors.neutral[0],
                fontSize: 24,
                fontWeight: "400",
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              width: width - 30,
              borderColor: theme.colors.blue[2],
              borderWidth: 0.5,
              alignItems: "center",
              marginVertical: 5,
              marginHorizontal: 15,
            }}
          />
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});
