import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  Text,
  View,
  Dimensions,
} from "react-native";
import { colors } from "../../global/styles";
import { FontAwesome } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import useInterval from "./useInterval";

const { width, height } = Dimensions.get("screen");

const customSlider = ({ sliderContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 5000;
  let activeContent = sliderContent[activeIndex];

  const _swipeRightHandler = () => {
    // handler hand geasture swipe right
    activeIndex === sliderContent.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };

  const _swipeLeftHandler = () => {
    // handler hand geasture swipe left
    let newIndex = activeIndex - 1;
    let endIndex = sliderContent.length - 1;
    newIndex < 0 ? setActiveIndex(endIndex) : setActiveIndex(newIndex);
  };

  // custom hook to slide the content automatically every 3 sec.
  useInterval(_swipeRightHandler, delay);

  return (
    <View style={styles.container}>
      <GestureRecognizer
        onSwipeRight={() => _swipeRightHandler()}
        onSwipeLeft={() => _swipeLeftHandler()}
      >
        <View
          style={{
            width: width * 0.95,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={styles.image} source={activeContent.imageURL} />
          <Text style={styles.logoTitle}>{activeContent.text}</Text>
        </View>
      </GestureRecognizer>

      <View style={styles.containerSliderControls}>
        {sliderContent.map((_, id) => (
          <TouchableOpacity key={id} onPress={() => setActiveIndex(id)}>
            <FontAwesome
              name="circle"
              size={10}
              style={{
                color: activeIndex == id ? colors.white : colors.blue,
                marginRight: 4,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default customSlider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkblue,
  },
  containerSliderControls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 150,
    marginTop: 100,
  },
  scroll: {},
  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  logoTitle: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 32,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
    width: 300,
    color: colors.white,
  },
});
