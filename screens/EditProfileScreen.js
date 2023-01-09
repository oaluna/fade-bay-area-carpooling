import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Layout, Text, Divider, Avatar } from "@ui-kitten/components";
import { ProfileAvatar } from "../components/ProfileAvatar";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");
const oscarLuna = [
  {
    firstName: "Oscar",
    lastName: "Luna",
    photo: require("../assets/images/oscarluna.png"),
    gender: "Male",
    description:
      "Hi! My name is Oscar. I’m 31 and I live in San Francisco. I’m interested in dance, software, music, and art. I'm looking to carpool with people heading towards Silicon Valley on weekdays. I'm trying to get on that carpool lane. Help me out!",
    age: 31,
    email: "oscarluna.webdev@gmail.com",
    phone: "+1 415 508 7194",
  },
];

const EditProfileScreen = ({ navigation }) => {
  const CameraIcon = () => (
    <Image
      source={require("../assets/images/icon-camera.png")}
      style={{ resizeMode: "contain", width: 24, height: 24 }}
    />
  );

  const onDoneButtonPress = () => {
    navigation && navigation.goBack();
  };

  const renderPhotoButton = () => (
    <Button
      style={styles.photoButton}
      color={theme.colors.blue[9]}
      accessoryLeft={
        <Icon
          type={"antdesign"}
          name={"camera"}
          style={{ color: theme.colors.neutral[0] }}
        />
      }
    />
  );

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[10], theme.colors.blue[8]]}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Layout style={styles.photoSection} level="1">
          <View style={styles.editHeader}>
            <Icon
              type="antdesign"
              name="arrowleft"
              color="white"
              size={20}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                color: theme.colors.neutral[0],
                fontSize: 20,
                right: 0,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <Avatar
            style={styles.photo}
            source={require("../assets/images/oscarluna.png")}
          />

          <View style={styles.nameSection}>
            <View
              style={[styles.setting, { width: width / 2, marginVertical: 45 }]}
            >
              <Text style={styles.sectionLabel} appearance="hint">
                First name
              </Text>
              <Text
                style={{
                  marginRight: 15,
                  width: width / 2,
                  textAlign: "right",
                  alignSelf: "center",
                }}
              >
                Oscar
              </Text>
            </View>
            <Divider style={styles.divider} />
            <View
              style={[styles.setting, { width: width / 2, marginVertical: 45 }]}
            >
              <Text style={styles.sectionLabel} appearance="hint">
                Last name
              </Text>
              <Text
                style={{
                  marginRight: 15,
                  width: width / 2,
                  textAlign: "right",
                  alignSelf: "center",
                }}
              >
                Luna
              </Text>
            </View>
            <Divider style={styles.divider} />
            <Text
              style={[
                styles.description,
                { width: width, alignSelf: "flex-end", marginTop: 60 },
              ]}
              appearance="hint"
            >
              Hi! My name is Oscar. I’m 31 and I live in San Francisco. I’m
              interested in dance, software, music, and art.
            </Text>
          </View>
        </Layout>
        <View style={styles.settingsSections}>
          <View style={styles.setting}>
            <Text style={styles.settingLabel}>Email</Text>
            <Text style={styles.settingValue}>oscarluna.webdev@gmail.com</Text>
          </View>
          <Divider
            style={[
              styles.divider,
              { width: width, alignSelf: "center", right: 0 },
            ]}
          />
          <View style={styles.setting}>
            <Text style={styles.settingLabel}>Gender</Text>
            <Text style={styles.settingValue}>Male</Text>
          </View>
          <Divider
            style={[
              styles.divider,
              { width: width, alignSelf: "center", right: 0 },
            ]}
          />
          <View style={styles.setting}>
            <Text style={styles.settingLabel}>Age</Text>
            <Text style={styles.settingValue}> 31</Text>
          </View>
          <Divider
            style={[
              styles.divider,
              { width: width, alignSelf: "center", right: 0 },
            ]}
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
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  editHeader: {
    flexDirection: "row",
    width: width,
    height: 120,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginLeft: -90,
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
    backgroundColor: "rgba(255,255,255,.11)",
    elevation: 10,
  },
  divider: {
    width: width * 0.64,
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 25,
    backgroundColor: theme.colors.lightblue[4],
  },
  photo: {
    alignSelf: "flex-start",
    height: 84,
    width: 84,
    borderRadius: 50,
    resizeMode: "cover",
    backgroundColor: theme.colors.lightblue[4],
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
    padding: 16,
    width: width,
    height: 50,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingLabel: {
    fontSize: 16,
    color: theme.colors.neutral[5],
  },
  settingsSections: {
    marginTop: 0,
    width: width,
    height: 300,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.11)",
    elevation: 10,
  },
  settingValue: {
    fontSize: 16,
    textAlign: "right",
    paddingBottom: 0,
  },
});

export default EditProfileScreen;
