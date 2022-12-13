import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import FadeLogo from "../assets/images/fade-logo.png";

import { colors } from "../global/styles";

const { height, width } = Dimensions.get("screen");

const RegisterScreen = ({ navigation }) => {
  const fields = [
    { id: 0, fieldName: "First Name" },
    {
      id: 1,
      fieldName: "Last Name",
    },
    {
      id: 2,
      fieldName: "Phone Number",
    },
    {
      id: 3,
      fieldName: "Email",
    },
    {
      id: 4,
      fieldName: "Password",
    },
    {
      id: 5,
      fieldName: "Confirm Password",
    },
  ];
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpeg")}
        style={{ height: height, width: width }}
      >
        <View style={styles.logoContainer}>
          <Image source={FadeLogo} style={styles.fadeLogo} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Sign up for Fade today!</Text>

          <ScrollView>
            {fields.map((text) => (
              <TextInput
                key={text.id}
                style={styles.formInput}
                onChangeText={onChangeText}
                placeholder={text.fieldName}
                secureTextEntry={text.id === 4 || text.id === 5 ? true : false}
              />
            ))}
          </ScrollView>
          <View style={{ bottom: 0, position: "absolute", marginBottom: 75 }}>
            <Pressable
              style={styles.submitBtn}
              onPress={() => navigation.navigate("DemoScreen")}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Sign Up
              </Text>
            </Pressable>
            <View>
              <Text style={styles.dividerText}>OR</Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("LoginScreen")}
              style={styles.loginBtn}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                I'm Already Registered
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.darkblue,

    height: height,
    margin: 0,
    width: width,
  },
  logoContainer: {
    alignSelf: "center",
    marginBottom: 0,
    padding: 15,
  },
  fadeLogo: {
    marginTop: 80,
    resizeMode: "contain",
    width: 300,
  },
  formContainer: {
    alignItems: "center",
    color: colors.white,
    display: "flex",
    flex: 2,
    flexDirection: "column",
    height: 400,
    marginVertical: 5,
    paddingTop: 25,
    width: 350,
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    marginBottom: 15,
  },
  formInput: {
    backgroundColor: "rgba(255,255,255,0.71)",
    borderColor: colors.blue,
    borderRadius: 15,
    borderWidth: 1,
    color: colors.white,
    fontSize: 16,
    height: 50,
    paddingHorizontal: 15,
    marginVertical: 7,
    width: 300,
  },
  submitBtn: {
    backgroundColor: colors.darkblue,
    height: 50,
    alignSelf: "center",
    width: 300,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    width: 300,
  },
  loginBtn: {
    backgroundColor: colors.darkblue,
    height: 50,
    alignSelf: "center",
    paddingVertical: 10,
    width: 300,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
  },
  dividerText: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
    marginVertical: 15,
  },
});

export default RegisterScreen;
