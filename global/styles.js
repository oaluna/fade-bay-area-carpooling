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
  headerText: "#000030",
  lightgreen: "#4fc8b0",
  blue: "#2afbff",
  black: "#000030",
  white: "#dedede",
  darkBlue: "#213fb2",
  pageBackground: "#000030",
};

export const parameters = {
  statusBarHeight: getStatusBarHeight(),
  headerHeight: 70,

  styledButton: {
    backgroundColor: "#000030",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
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
  color: "#000030",
  fontSize: 20,
  fontWeight: "bold",
};
