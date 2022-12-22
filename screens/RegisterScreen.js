import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";
import FadeLogo from "../assets/images/fade-logo-alt.png";

import { colors, theme } from "../global/styles";
import { LinearGradient } from "expo-linear-gradient";
const { height, width } = Dimensions.get("screen");

const RegisterScreen = ({ navigation }) => {
  const fields = [
    { id: 0, fieldName: "Full Name" },
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
        source={require("../assets/images/gradient-bg.png")}
        style={{
          height: height,
          width: width,
        }}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginBox}>
            <View
              style={styles.loginHeader}
              ref={(ref) => (endAncestor = nodeFromRef(ref))}
            >
              <SharedElement onNode={(node) => (endNode = node)}>
                <Image
                  source={require("../assets/images/fade-logo-alt.png")}
                  style={styles.fadeLogo}
                />
              </SharedElement>
            </View>
            <View id="error-message" style={styles.errorMessage}></View>
            <SafeAreaView>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ color: theme.colors.neutral[0] }}>Name</Text>
                <TextInput
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name"
                  style={styles.input}
                />
              </View>

              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: theme.colors.neutral[0] }}>
                  Phone Number
                </Text>
                <TextInput
                  type="phone"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: theme.colors.neutral[0] }}>Email</Text>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: theme.colors.neutral[0] }}>Password</Text>
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>
              <View style={{ height: 300, justifyContent: "flex-end" }}>
                <View style={{ marginVertical: 5 }}>
                  <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    colors={[
                      theme.colors.lightblue[4],
                      theme.colors.lightblue[6],
                    ]}
                    style={styles.loginBtn}
                  >
                    <Pressable
                      onPress={() => navigation.navigate("DemoScreen")}
                    >
                      <Text
                        style={{
                          color: theme.colors.neutral[0],
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        Sign Up
                      </Text>
                    </Pressable>
                  </LinearGradient>
                </View>
                <Text
                  style={{
                    color: theme.colors.neutral[0],
                    textAlign: "center",
                  }}
                >
                  OR
                </Text>
                <View style={{ marginVertical: 5 }}>
                  <Pressable
                    style={styles.signupBtn}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text
                      style={{
                        color: theme.colors.neutral[0],
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      I'm already a member
                    </Text>
                  </Pressable>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    alignSelf: "center",
  },
  loginContainer: {
    height: height,
    alignSelf: "center",
  },
  fadeLogo: {
    width: 300,
    resizeMode: "contain",
  },
  loginBox: {
    marginTop: height / 5,
    marginLeft: 0,
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  loginHeader: {
    textAlign: "center",
    bottom: 120,
    height: 100,
  },
  loginHeaderImg: {
    width: 75,
  },
  input: {
    width: width - 30,
    borderColor: theme.colors.neutral[4],
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: theme.colors.neutral[0],
    color: theme.colors.neutral[0],
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: width - 30,
    height: 50,

    borderRadius: 15,

    elevation: 2,
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  signupBtn: {
    width: width - 30,

    height: 50,

    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  errorMessage: {
    display: "none",
    whiteSpace: "break-spaces",
  },
});

export default RegisterScreen;
