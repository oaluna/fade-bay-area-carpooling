import { getStatusBarHeight } from "react-native-status-bar-height";

// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
//console.log(getStatusBarHeight());

// will be 0 on Android, because You pass true to skipAndroid
//console.log(getStatusBarHeight(true));

export const colors = {
  buttons: "#000080",
  grey: "#99aaaa",
  grey1: "#434843",
  grey2: "#5e5e5e",
  grey3: "#898989",
  grey4: "#bdbdbd",
  grey5: "#eeeeee",
  grey6: "#eeeeee",
  grey7: "#F2f9f9",
  grey10: "#d6d6d6",
  cardComment: "#888888",
  cardBackground: "#dedede",
  statusbar: "#ff8c52",
  headerText: "rgba(255, 255, 255, 0.71)",
  lightgreen: "#4fc8b0",
  blue: "#2afbff",
  black: "#1b263b",
  white: "#F4F2F3",
  darkBlue: "#213fb2",
  pageBackground: "rgba(255, 255, 255, 0.71)",
  snow:"#fffbfc",
  phlox:"#c04cfd",
  aqua:"#2afbff",
  magenta:"#bb2649",
  darkblue:"#000030"

};

export const theme = {
  colors: {
    primary: [
      "#fef7d5", "#feedad", "#fee083", "#fed365", "#febf32", "#da9c24", "#b67c19", "#935e0f", "#6f4006", "#4b2200", "#270000"
    ],
    neutral: [
      "#ffffff", "#f3f5f7", "#e7ebef", "#dae0e7", "#ced6df", "#c2ced8", "#b6c6d1", "#a9bec9", "#9db6c2", "#91aebc", "#8596b5", 
    ],
    blue: [
      "#e2f0ff", "#c5dfff", "#a9cdff", "#8bbdff", "#6eacff", "#519bff", "#348aff", "#1779ff", "#0068e6", "#0052b3", "#003d80"
    ],
    green: [
      "#eefde2", "#d8fcc5", "#bcf6a6", "#9fe987", "#7fd964", "#5ecb41", "#3dbc1e", "#1cac00", "#008a00", "#006700", "#004400"
    ],
    yellow: ["#fffacd", "#fff39b", "#ffeb69", "#ffe338", "#ffda06", "#dabf05", "#b7a304", "#947803", "#715102", "#4e2f01", "#2b0e00"],
    red: [
      "#fdeded", "#FBDADC", "#f5a3a7", "#f06a6f", "#ea3238", "#c61f27", "#a31a22", "#80151d", "#5c1018", "#380c13", "#15060e"
    ],
    turquoise: [
      "#dafee9", "#b5fdd8", "#8ffad2", "#6af8c9", "#45f6c0", "#20f4b7", "#00f2ae", "#00eaa5", "#00e29c", "#00da93", "#00d28a"
    ],
    gradientOne: "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
    gradientTwo: "linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)",
    gradientThree: "linear-gradient(91.26deg, #76E268 0%, #FFD505 100%)",
    gradientFour: "linear-gradient(91.26deg, #FFD505 0%, #F44336 100%)",
    gradientFive: "linear-gradient(91.26deg, #70A2FF 0%, #72E5DA 28.65%, #72F6D1 50.52%, #76E268 100%)",
    gradientSix: "linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)",
    gradientSeven: "linear-gradient(91.26deg, #70A2FF 0%, #72F6D1 21.87%, #76E268 47.92%, #FFD505 72.4%, #F76E64 100%)",
    gradientEight: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)"
  }
}

export const parameters = {
  statusBarHeight: getStatusBarHeight(),
  headerHeight: 70,

  styledButton: {
    backgroundColor: "rgba(255, 255, 255, 0.71)",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#2afbff",
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },

  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
};

export const title = {
  color: "rgba(255, 255, 255, 0.71)",
  fontSize: 20,
  fontWeight: "bold",
};
