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
        source={require("../assets/images/gradient-bg3.png")}
        style={{
          height: height,
          width: width,
          filter: "darken(0.5)",
        }}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginBox}>
            <View style={styles.loginHeader}>
              <Image
                source={require("../assets/images/fade-logo.png")}
                style={styles.fadeLogo}
              />
             
            </View>
            <View id="error-message" style={styles.errorMessage}></View>
            <SafeAreaView>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: colors.snow }}>First Name</Text>
                <TextInput
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: colors.snow }}>Last Name</Text>
                <TextInput
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: colors.snow }}>Phone Number</Text>
                <TextInput
                  type="phone"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  style={styles.input}
                />
                </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: colors.snow }}>Email</Text>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ color: colors.snow }}>Password</Text>
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>
         <View style={{height: 200, justifyContent:"flex-end"}}>     
              <View style={{ marginVertical: 5 }}>
                <Pressable
                  style={styles.loginBtn}
                  onPress={() => navigation.navigate("DemoScreen")}
                >
                  <Text
                    style={{
                      color: colors.snow,
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Sign Up
                  </Text>
                </Pressable>
              </View>
             <Text style={{color:colors.snow, textAlign:'center'}}>OR</Text>
              <View style={{ marginVertical: 5 }}>
                <Pressable
                  style={styles.signupBtn}
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text
                    style={{
                      color: colors.snow,
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
    marginTop: height / 8,
    marginLeft: 0,
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    boxShadow: "0px 5px 5px #ccc",
  },
  loginHeader: {
    textAlign: "center",
  },
  loginHeaderImg: {
    width: 75,
  },
  input: {
    width: width - 30,
    borderColor: colors.aqua,
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.31)",
    color: colors.snow,
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: width - 30,
    height: 50,
    backgroundColor: colors.darkblue,
borderRadius: 15,
shadowColor: colors.aqua,
shadowOffset: {
  width: 0, height: 5,
},
shadowOpacity: 1,
shadowRadius: 1,
elevation: 3,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  signupBtn: {
    width: width - 30,
    backgroundColor: colors.black,
    shadowColor: colors.aqua,
shadowOffset: {
  width: 0, height: 5,
},
shadowOpacity: 1,
shadowRadius: 1,
elevation: 3,
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
