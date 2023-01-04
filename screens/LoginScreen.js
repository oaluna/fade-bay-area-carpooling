import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../global/styles";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as LocalAuthentication from "expo-local-authentication";

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  const ValidateLogin = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be greater that 8 characters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must include, at least one letter, one number and one special character"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const authenticate = async () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Fingerprint",
      fallbackLabel: "Enter password",
      cancelLabel: "Cancel",
      requireConfirmation: false,
    });

    auth.then((result) => {
      setIsAuthenticated(result.success);

      if (result.success) {
        navigation.navigate("ProfileTypeScreen");
      }
    });
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const checked = () => {
    setChecked(false);
  };

  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: 75,
      }}
    >
      <ImageBackground
        source={require("../assets/images/gradient-bg3.png")}
        style={{
          height: height,
          width: width,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: 40,
        }}
      >
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={[theme.colors.blue[9], theme.colors.purple[8]]}
          style={styles.gradient}
        >
          <Image
            source={require("../assets/images/gradient.png")}
            style={styles.gradient}
          />
          <View
            style={{
              backgroundColor: "transparent",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              width: width - 30,
              height: height * 0.8,
              alignSelf: "center",
            }}
          >
            <View>
              <View
                style={{
                  alignItems: "center",
                  width: width - 30,
                  paddingTop: 150,
                }}
              >
                <Image
                  source={require("../assets/images/fade-logo-alt.png")}
                  style={{
                    rezsizeMode: "cover",
                    alignSelf: "center",
                    width: 350,
                    height: 100,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 45,
                    color: theme.colors.neutral[3],
                    letterSpacing: 0.25,
                  }}
                >
                  By Signing in you are agreeing to our
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: theme.colors.lightblue[5],
                      letterSpacing: 0.25,
                      marginBottom: 25,
                    }}
                  >
                    Terms and privacy policy
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 25,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textDecorationLine: "underline",
                    marginRight: 10,
                    fontWeight: "bold",
                    fontSize: 18,
                    color: theme.colors.lightblue[4],
                  }}
                >
                  Login
                </Text>
                <Text
                  style={{ fontSize: 18, color: theme.colors.neutral[3] }}
                  onPress={() => navigation.navigate("RegisterScreen")}
                >
                  Register{" "}
                </Text>
              </View>
              <View style={{ marginTop: 30 }}>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validateOnMount={true}
                  validationSchema={ValidateLogin}
                  onSubmit={(values) =>
                    navigation.navigate("ProfileTypeScreen")
                  }
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    touched,
                    values,
                    errors,
                    isValid,
                  }) => (
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          borderBottomWidth: 1,
                          borderBottomColor: theme.colors.neutral[3],
                          marginBottom: 15,
                          alignItems: "center",
                        }}
                      >
                        <Icon
                          name="mail"
                          size={18}
                          color={theme.colors.neutral[3]}
                        />
                        <TextInput
                          style={{
                            marginLeft: 10,
                            color: theme.colors.neutral[0],
                          }}
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                          placeholder="Email Address"
                          placeholderTextColor={theme.colors.neutral[3]}
                        />
                      </View>
                      <View style={{ marginBottom: 15 }}>
                        {errors.email && touched.email ? (
                          <Text
                            style={{ color: theme.colors.red[5], fontSize: 15 }}
                          >
                            {errors.email}
                          </Text>
                        ) : null}
                      </View>

                      <View
                        style={{
                          flexDirection: "row",

                          borderBottomWidth: 1,
                          borderBottomColor: theme.colors.neutral[3],
                          marginBottom: 15,
                          alignItems: "center",
                        }}
                      >
                        <Icon
                          name="lock"
                          size={22}
                          color={theme.colors.neutral[3]}
                        />
                        <TextInput
                          style={{
                            marginLeft: 10,
                            color: theme.colors.neutral[0],
                          }}
                          placeholder="Password"
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          placeholderTextColor={theme.colors.neutral[3]}
                          secureTextEntry={true}
                        />
                      </View>
                      <View style={{ marginBottom: 20 }}>
                        {errors.password && touched.password ? (
                          <Text
                            style={{ color: theme.colors.red[5], fontSize: 15 }}
                          >
                            {errors.password}
                          </Text>
                        ) : null}
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            marginBottom: 30,
                            alignItems: "center",
                          }}
                        >
                          <Checkbox
                            color={theme.colors.lightblue[4]}
                            value={isChecked}
                            onValueChange={checked}
                            style={{ width: 16, height: 16, marginRight: 5 }}
                          />
                          <Text
                            style={{
                              marginLeft: 5,
                              color: theme.colors.neutral[3],
                              fontSize: 12,
                            }}
                          >
                            Remember Password
                          </Text>
                        </View>

                        <Text style={{ color: theme.colors.lightblue[3] }}>
                          Forgot Password
                        </Text>
                      </View>

                      <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        colors={[
                          theme.colors.lightblue[4],
                          theme.colors.lightblue[6],
                        ]}
                        style={{
                          borderRadius: 15,
                          height: 50,
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: 15,
                          elevation: 2,
                        }}
                      >
                        <TouchableOpacity onPress={handleSubmit}>
                          <Text
                            style={{
                              color: theme.colors.neutral[0],
                              fontSize: 20,
                            }}
                          >
                            Login
                          </Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  )}
                </Formik>

                <Text
                  style={{
                    alignSelf: "center",
                    color: theme.colors.neutral[3],
                  }}
                >
                  or connect with
                </Text>
                <View
                  style={{
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: width / 2,
                    marginTop: 10,
                  }}
                >
                  <Ionicons
                    name="logo-facebook"
                    size={32}
                    color={theme.colors.lightblue[5]}
                  />
                  <Ionicons
                    name="logo-instagram"
                    size={32}
                    color={theme.colors.neutral[0]}
                  />
                  <Ionicons
                    name="logo-pinterest"
                    size={32}
                    color={theme.colors.red[5]}
                  />
                  <Ionicons
                    name="logo-linkedin"
                    size={32}
                    color={theme.colors.blue[4]}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              height: Dimensions.get("window").height * 0.2,
            }}
          >
            {isBiometricSupported ? (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={authenticate}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: theme.colors.neutral[0],
                    backgroundColor: theme.colors.neutral[3],
                    elevation: 2,
                    opacity: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="finger-print-outline"
                    size={40}
                    color={theme.colors.neutral[0]}
                  />
                </TouchableOpacity>

                <Text style={{ color: theme.colors.neutral[0] }}>Login with touch id</Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: theme.colors.neutral[0], fontSize: 20 }}>
                  Welcome Back!
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    right: 0,
    top: 20,
    paddingVertical: 0,
    marginVertical: 0,
    zIndex: -1,
  },

  gradient: {
    position: "absolute",
    top: -20,
    right: 0,
    paddingTop: 0,
    width: width + 10,
    height: height + 80,
    margin: 0,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    zIndex: 0,
  },
  imageContainer: {
    width: width - 30,
    height: 200,
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },
  body: {
    zIndex: 3,
    flex: 1,
    height: height,
    width: width + 10,
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 120,
    margin: 0,
    paddingLeft: 10,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});

export default LoginScreen;
