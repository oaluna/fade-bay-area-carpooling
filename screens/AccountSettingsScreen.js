import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { theme } from "../global/styles";
const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: 1,
    title: "Change Email Address",
    value: "Update the email address associated with your account.",
  },
  {
    id: 1,
    title: "Change Phone Number",
    value: "Update the phone number associated with your account.",
  },
  {
    id: 1,
    title: "Migrate Data",
    value: "Switching to a new device? Migrate your data to your new device.",
  },
  {
    id: 1,
    title: "Delete Account",
    value: "Delete your account and all associated data.",
  },
];

export default function AccountSettingsScreen() {
  const navigation = useNavigation()
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[8], theme.colors.blue[10]]}
      style={styles.container}
    >
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          style={styles.floatLeft}
          onPress={() => navigation.goBack()}
        >
          <Icon
            type="antdesign"
            name="arrowleft"
            color="white"
            size={20}
            style={{ width: 25, height: 25, padding: 0 }}
          />
        </TouchableOpacity>
        <Text style={[styles.topBarText, { color: theme.colors.neutral[0] }]}>
          Account Settings
        </Text>
      </View>
      <View style={styles.settingsSection}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <View style={styles.setting}>
                <Text style={styles.settingLabel}>{item.title}</Text>
                <Text style={styles.settingValue}>{item.value}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: width,

                borderColor: theme.colors.lightblue[4],
                borderWidth: 1,

                zIndex: 2,
              }}
            />
          )}
        />
        <LinearGradient
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.75, y: 1 }}
          colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
          style={styles.doneButton}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
  },
  editHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
    height: 90,
    marginLeft: -95,
  },
  contentContainer: {
    flexDirection: "column",
    top: 0,

    position: "absolute",
    paddingBottom: 24,
    height: height,
    width: width,

    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  photoSection: {
    flexDirection: "column",
    alignSelf: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    width: width,
    height: 300,
    backgroundColor: theme.colors.neutral[8],
    elevation: 2,
  },
  divider: {
    width: width,
    alignSelf: "flex-end",
    marginVertical: 0,
    height: 0,
    position: "absolute",
    backgroundColor: theme.colors.lightblue[4],
  },
  photo: {
    alignSelf: "flex-start",
    height: 84,
    width: 84,
    borderRadius: 50,
    resizeMode: "cover",
    backgroundColor: theme.colors.lightblue[0],
    top: 15,
    marginRight: 5,
  },
  photoButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.red[5],
    borderRadius: 16,
    position: "relative",
  },
  nameSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: -60,
    textAlign: "right",
    width: width,
    height: 100,
    elevation: 2,
  },
  description: {
    padding: 24,
    backgroundColor: "transparent",
    height: 100,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: theme.colors.lightblue[4],
    width: width - 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
  },
  setting: {
    width: width,
    height: 60,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    marginVertical: 5,
  },
  settingLabel: {
    fontSize: 16,
    color: theme.colors.neutral[0],
    flexDirection: "column",
  },
  settingsSection: {
    width: width,
    height: 500,
    alignSelf: "center",
    top: -400,
    alignItems: "center",
    backgroundColor: theme.colors.neutral[8],
    elevation: 2,
    padding: 15,
  },
  settingValue: {
    fontSize: 12,
    textAlign: "left",
    paddingBottom: 0,
    color: theme.colors.neutral[2],
    width: width,
    height: 40,
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "space-evenly",
    width: width / 1.5,
    paddingHorizontal: 15,
    marginTop: 25,
  },
  topBarText: {
    fontSize: 20,
  },
  floatLeft: {
    marginRight: 75,
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
  searchBarStyle: {
    padding: 16,
    marginTop: 24,
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: theme.colors.neutral[0],
  },
  searchImageStyle: {
    width: 20,
    height: 20,
  },
  searchInputStyle: {
    marginLeft: 12,
    fontWeight: "500",
  },
});
