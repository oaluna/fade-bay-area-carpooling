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
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  FadeInDown,
  Layout,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useAuth0 } from "react-native-auth0";
import PropTypes from "prop-types";
import { colors, theme } from "../global/styles";
import { carsAround } from "../global/data";
import Spinner from "react-native-loading-spinner-overlay";

const { width, height } = Dimensions.get("screen");

const EyeHidden = () => (
  <Image
    source={require("../assets/images/icon-hidden.png")}
    style={{ resizeMode: "contain", width: 20, height: 20 }}
  />
);

const EyeVisible = () => (
  <Image
    source={require("../assets/images/icon-visible.png")}
    style={{ resizeMode: "contain", width: 20, height: 20 }}
  />
);

const SignIn = ({ navigation, openMenu }) => {
  const { authorize, clearSession, user } = useAuth0();
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
  const [spinner, setSpinner] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);

  const offset = useSharedValue(0);

  React.useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  }, [loading]);

  React.useEffect(() => {
    if (loading === false) {
      setSpinner(false);
    }
  }, [loading]);

  const containerAnimatedStyle = () => {
    if (loading === false) {
      LayoutAnimation.easeInOut();
    }
  };

  const handleLoading = () => {
    if (loading === true) {
      Layout.springify();
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  const onLogin = async () => {
    try {
      await authorize({ scope: "openid profile email" });
      navigation.navigate("ProfileTypeScreen");
    } catch (e) {
      console.log(e);
    }
  };

  const onLogOut = async () => {
    try {
      await clearSession();
      navigation.navigate("LoginScreen");
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  const loggedIn = user !== undefined && user !== null;

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
            <View style={styles.loginHeader}>
              <Animated.View
                style={containerAnimatedStyle}
                entering={FadeInDown.delay(1000)}
                layout={() => handleLoading()}
              >
                <Image
                  source={require("../assets/images/fade-logo-alt.png")}
                  style={styles.fadeLogo}
                />
              </Animated.View>
            </View>
            <View id="error-message" style={styles.errorMessage}></View>
            <SafeAreaView>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ color: theme.colors.neutral[0] }}>Email</Text>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ color: theme.colors.blue[0] }}>Password</Text>
                <TextInput
                  type="password"
                  name="password"
                  placeholder={"Enter your password"}
                  secureTextEntry={isHidden === true ? true : false}
                  style={styles.input}
                />
                <Pressable
                  onPress={() =>
                    isHidden === true ? setIsHidden(false) : setIsHidden(true)
                  }
                  style={{
                    position: "absolute",
                    top: 30,
                    alignSelf: "flex-end",
                    right: 25,
                  }}
                >
                  {isHidden == true ? <EyeHidden /> : <EyeVisible />}
                </Pressable>
              </View>
              <Pressable onPress={() => {}}>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    color: theme.colors.lightblue[3],
                    position: "absolute",
                    top: -20,
                    textShadowColor: theme.colors.neutral[10],
                    textShadowOffset: {
                      width: 0,
                      height: 1.25,
                    },
                    textShadowRadius: 1,
                  }}
                >
                  Forgot your Password?
                </Text>
              </Pressable>
              <View style={{ height: 350, justifyContent: "flex-end" }}>
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
                    <Pressable onPress={() => onLogin()}>
                      <Text
                        adjustsFontSizeToFit={true}
                        style={{
                          color: theme.colors.neutral[0],
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        Log In
                      </Text>
                    </Pressable>
                  </LinearGradient>
                </View>
                <Text
                  adjustsFontSizeToFit={true}
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
                    onPress={() => navigation.navigate("RegisterScreen")}
                  >
                    <Text
                      style={{
                        color: theme.colors.neutral[0],
                        fontSize: 20,
                        textAlign: "center",
                      }}
                    >
                      New to Fade? Sign Up
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

SignIn.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
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
    height: 200,
  },

  input: {
    width: width - 30,
    borderColor: theme.colors.neutral[4],
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: theme.colors.neutral[0],
    color: colors.gray1,
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: width - 30,
    height: 50,

    borderRadius: 15,

    elevation: 2,
    padding: 10,
    marginTop: -5,
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
  spinnerTextStyle: {
    color: theme.colors.neutral[0],
  },
});

export default SignIn;
