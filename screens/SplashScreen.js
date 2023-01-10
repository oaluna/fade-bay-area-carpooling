import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Dimensions,
  Pressable,
  Animated,
  LayoutAnimationConfig,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useInterval } from "../components/demo/useInterval";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-intro-carousel";
import Lottie from "lottie-react-native";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  const delay = 5000;
  const animationRef = React.useRef();

  const [currentStep, setCurrentStep] = React.useState(0);
  const [slideData, setSlideData] = React.useState([
    {
      id: 0,
      image: "https://assets8.lottiefiles.com/private_files/lf30_hhb5tl1k.json",
      text: "Welcome to Fade! Ready to get started?",
    },
    {
      id: 1,
      image: "https://assets3.lottiefiles.com/packages/lf20_bo8vqwyw.json",
      text: "Fade encourages users to carpool more by connecting coworkers and providing a platform to organize carpools. How do we do that, exactly?",
    },
    {
      id: 2,
      image: "https://assets3.lottiefiles.com/packages/lf20_qdkbuiyx.json",
      text: "If you are driving, you can post your travel schedule and the number of seats available in your vehicle. If you are a passenger, you can enter your travel details and we will find you the closest match.",
    },
    {
      id: 3,
      image: "https://assets5.lottiefiles.com/packages/lf20_ndLURGQdmU.json",
      text: "Once matched, you can opt to subscribe to your driver's route and join your Fade driver every day they are making this trip. Hello, carpool lane!",
    },
    {
      id: 4,
      image: "https://assets8.lottiefiles.com/packages/lf20_blflhah3.json",
      text: "Okay, without further ado, let's get started using Fade!",
    },
  ]);

  React.useEffect(() => {
    if (animationRef.current && currentStep !== steps) {
      animationRef.current.play();
    }
  }, [slideData]);

  const nextStep = () => {
    animationRef.current.play();
    setCurrentStep(currentStep >= 4 ? 4 : currentStep + 1);
  };

  const prevStep = () => {
    animationRef.current.play();
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={styles.gradient}
      >
        <Image
          source={require("../assets/images/gradient.png")}
          style={styles.gradient}
        />
        <View style={styles.body}>
        <Pressable onPress={() => navigation.navigate("LoginScreen")} style={{ position:"absolute", right: 15, top: 15, backgroundColor: theme.colors.neutral[7], 
        width: 75, height: 25, justifyContent:"center", alignItems:"center", borderRadius: 15, elevation: 10}}>
        <Text style={{ color: theme.colors.neutral[0], fontSize: 18}}>Skip</Text></Pressable>
          <Image
            source={require("../assets/images/fade-logo-alt.png")}
            style={{
              resizeMode: "contain",
              width: 350,
              height: 100,
              alignSelf: "center",
            }}
          />
          {/* <View style={styles.imageContainer}>
            <Lottie
            id={steps}
              source={{ uri: steps[currentStep].image }}
              backgroundColor={"transparent"}
              style={{
                opacity: currentStep !== steps.indexOf(currentStep) ? 1 : 0,
                resizeMode: "contain",
                height: 350,
                position: "relative",
                marginTop: -30,
              }}
              ref={animationRef}
              autoPlay={true}
              loop={true}
imageAssetsFolder={'../assets/lottie-files'}              
            />
          </View>
          <View>
            <View style={{ width: width, height: 150 }}>
              <Text style={styles.text}>{steps[currentStep].text}</Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 40,
              width: width - 30,
              justifyContent: "space-evenly",
              alignSelf: "center",
            }}
          >
            {currentStep >= 0 ? (
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={[theme.colors.neutral[4], theme.colors.neutral[6]]}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      currentStep !== 0
                        ? theme.colors.neutral[3]
                        : theme.colors.neutral[4],
                    opacity: currentStep !== 0 ? 1 : 0,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={prevStep}
                  disabled={currentStep === 0 ? true : false}
                >
                  <Text style={styles.text}>Prev</Text>
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <View></View>
            )}
          </View>
          <View style={{ alignSelf: "center", width: width, height: 100 }}>
            {currentStep <= 4 ? (
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
                style={[styles.button]}
              >
                <TouchableOpacity
                  onPress={
                    currentStep < 4
                      ? nextStep
                      : () => navigation.navigate("LoginScreen")
                  }
                >
                  <Text style={styles.text}>
                    {currentStep < 1 ? "Get Started" : "Skip"}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <View></View>
            )}
          </View>
          <View
            style={{
              width: width,
              height: height + 50,
              backgroundColor: "rgba(0,0,0,0.25)",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 0,
            }}
          ></View> */}
          <Carousel
            data={slideData}
            buttonsConfig={{
              disabled: true,
            }}
            renderItem={({ item, index }, goToSlide) => (
              <View style={styles.content}>
                <Lottie
                  source={{ uri: item.image }}
                  style={styles.image}
                  autoPlay
                  loop
                />
                <Text style={styles.text}>{item.text}</Text>
                <View style={styles.buttonsContainer}>
                  <Pressable
                    style={[
                      styles.button,
                      {
                        backgroundColor:
                          index === 0
                            ? theme.colors.neutral[8]
                            : theme.colors.neutral[4],
                      },
                    ]}
                    onPress={() => goToSlide(index - 1)}
                  >
                    <Text style={{ color: theme.colors.neutral[0] }}>
                      Previous
                    </Text>
                  </Pressable>
                  {index === 4 ? (
                    <Pressable
                      style={[
                        styles.button,
                        { backgroundColor: theme.colors.lightblue[3] },
                      ]}
                      onPress={() => navigation.navigate("LoginScreen")}
                    >
                      <Text>Continue</Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={[
                        styles.button,
                        { backgroundColor: theme.colors.lightblue[3] },
                      ]}
                      onPress={() => goToSlide(index + 1)}
                    >
                      <Text>Next</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    right: 0,
    top: 20,
    paddingVertical: 0,
    marginVertical: 0,
    zIndex: 0,
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
  image: {
    resizeMode: "contain",
    height: 350,
    position: "relative",
    marginTop: -30,
  },
  imageContainer: {
    width: width - 30,
    height: 100,
    alignSelf: "center",
    position: "relative",
    marginTop: 0,
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
  text: {
    fontSize: 20,
    color: theme.colors.neutral[0],
    textAlign: "center",
    justifyContent: "center",
    width: width,
    zIndex: 1,
    position: "relative",
    height: 180,
  },
  button: {
    width: width - 30,
    zIndex: 1,
    position: "relative",
    height: 50,
    backgroundColor: theme.colors.neutral[3],
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    paddingVertical: 15,
    justifyContent: "center",
  },
});
