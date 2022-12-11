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
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { colors } from "../global/styles";
import { carsAround } from "../global/data";

const { width, height } = Dimensions.get("screen");
const SignIn = ({ navigation }) => {
  const fields = [
    {
      id: 0,
      fieldName: "Email",
    },
    {
      id: 1,
      fieldName: "Password",
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
          <Image
            source={require("../assets/images/fade-logo.png")}
            style={styles.fadeLogo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Sign In to your Fade Account</Text>

          <SafeAreaView>
            {fields.map((text) => (
              <TextInput
                key={text.id}
                style={styles.formInput}
                onChangeText={onChangeText}
                placeholder={text.fieldName}
                secureTextEntry={text.id === 1 ? true : false}
              />
            ))}
          </SafeAreaView>
          <View style={{ bottom: 0, position: "absolute", marginBottom: 40 }}>
            <Pressable
              style={styles.submitBtn}
              onPress={() => navigation.navigate("HomeScreen")}
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
                Sign In
              </Text>
            </Pressable>
            <View>
              <Text style={styles.dividerText}>OR</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 15,
                }}
              >
                Click here to sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

SignIn.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",

    backgroundColor: colors.black,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: height,
    justifyContent: "space-evenly",
    margin: 0,

    width: width,
  },
  dividerText: {
    color: colors.white,
    textAlign: "center",
  },
  logoContainer: {
    flex: 1,
    marginBottom: 45,
    padding: 15,
    alignSelf: "center",
  },
  fadeLogo: {
    marginTop: 100,
    resizeMode: "contain",
    width: 300,
    alignSelf: "center",
  },
  formContainer: {
    alignSelf: "center",

    color: colors.white,
    display: "flex",
    flex: 2,
    flexDirection: "column",
    height: 400,
    width: 300,
    marginVertical: 25,

    width: 300,
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  formInput: {
    backgroundColor: "rgba(255,255,255,0.71)",
    borderColor: colors.blue,
    borderRadius: 15,
    width: 300,
    borderWidth: 2,
    color: colors.gray3,
    fontSize: 16,
    paddingHorizontal: 15,
    alignSelf: "center",
    elevation: 2,

    height: 50,
    marginVertical: 25,
    width: 300,
  },

  submitBtn: {
    height: 50,
    width: 300,
    alignSelf: "center",
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: colors.black,
    borderColor: colors.blue,
    borderWidth: 2,
    elevation: 2,
    borderRadius: 15,
    alignSelf: "center",
  },
});

export default SignIn;
