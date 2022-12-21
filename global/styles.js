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
  snow: "#fffbfc",
  phlox: "#c04cfd",
  aqua: "#2afbff",
  magenta: "#bb2649",
  darkblue: "#000030",
};

export const theme = {
  colors: {
    primary: "#08415c",
    secondary: "#bb2649",
    neutral: [
      "#ffffff",
      "#e7ebef",
      "#dae0e7",
      "#c1cbd7",
      "#8fa2b7",
      "#6a84a0",
      "#50657c",
      "#405064",
      "#303c4b",
      "#202832",
      "#000000",
    ],
    blue: [
      "#ffffff",
      "#ececfe",
      "#d8d9fd",
      "#9ea1fa",
      "#5156f6",
      "#2a31f4",
      "#0b12d5",
      "#080d9b",
      "#050861",
      "#020326",
      "#010213",
    ],
    lightblue: [
      "#d9f1fc",
      "#b4e3f8",
      "#8ed5f5",
      "#69c7f2",
      "#43b8ef",
      "#1eaaeb",
      "#1293ce",
      "#0f78a9",
      "#0b5d83",
      "#08435e",
      "#052838",
    ],
    green: [
      "#cff2e0",
      "#afe9ce",
      "#90e0b6",
      "#70d7a1",
      "#45cb85",
      "#31af6e",
      "#288f5a",
      "#1f6f46",
      "#165032",
      "#0d301e",
      "#04100a",
    ],
    yellow: [
      "#fef5ae",
      "#fef086",
      "#fde74c",
      "#fde635",
      "#fde10d",
      "#dec402",
      "#b6a102",
      "#8d7d01",
      "#655901",
      "#3d3601",
      "#141200",
    ],
    red: [
      "#f8dde3",
      "#f1bbc8",
      "#ea99ac",
      "#e37891",
      "#dc5675",
      "#d5345a",
      "#bb2649",
      "#981f3b",
      "#77182e",
      "#551121",
      "#330a14",
    ],
    purple: [
      "#ddcddf",
      "#cdb4cf",
      "#bc9bbf",
      "#ab83af",
      "#9a6aa0",
      "#845889",
      "#634267",
      "#543857",
      "#3c2835",
      "#241825",
      "#0c080c",
    ],
    gradientOne: "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
    gradientTwo:
      "linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)",
    gradientThree: "linear-gradient(91.26deg, #76E268 0%, #FFD505 100%)",
    gradientFour: "linear-gradient(91.26deg, #FFD505 0%, #F44336 100%)",
    gradientFive:
      "linear-gradient(91.26deg, #70A2FF 0%, #72E5DA 28.65%, #72F6D1 50.52%, #76E268 100%)",
    gradientSix:
      "linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)",
    gradientSeven:
      "linear-gradient(91.26deg, #70A2FF 0%, #72F6D1 21.87%, #76E268 47.92%, #FFD505 72.4%, #F76E64 100%)",
    gradientEight:
      "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  },
};

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
