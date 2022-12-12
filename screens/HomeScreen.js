// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   ScrollView,
//   Pressable,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import MapView from "react-native-maps";
// import * as Location from "expo-location";

import { colors, parameters } from "../global/styles";
// import { filterData, carsAround } from "../global/data";
// import { mapStyle } from "../global/mapStyle";

// const { PROVIDER_GOOGLE } = MapView;

// const { height, width } = Dimensions.get("screen");

// const HomeScreen = ({ navigation }) => {
//   const [latlng, setLatLng] = React.useState({});

//   const checkPermission = async () => {
//     const hasPermission = await Location.requestForegroundPermissionsAsync();
//     if (hasPermission.status === "granted") {
//       const permission = await askPermission();
//       return permission;
//     }
//     return true;
//   };

//   const askPermission = async () => {
//     const permission = await Location.requestForegroundPermissionsAsync();
//     return permission.status === "granted";
//   };

//   const getLocation = async () => {
//     try {
//       const { granted } = await Location.requestForegroundPermissionsAsync();
//       if (!granted) return;
//       const {
//         coords: { latitude, longitude },
//       } = await Location.getCurrentPositionAsync();
//       setLatLng({ latitude: latitude, longitude: longitude });
//     } catch (err) {}
//   };

//   const _map = React.useRef(1);

//   React.useEffect(() => {
//     checkPermission();
//     getLocation(),
//       // console.log(latlng)
//       [];
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.icon1}>
//           <Image
//             source={require("../assets/images/fade-logo.png")}
//             style={{ resizeMode: "contain", width: 200, flex: 1 }}
//           />
//         </View>
//       </View>
//       <ScrollView bounces={false}>
//         <View style={styles.home}>
//           <Text style={styles.text1}>Welcome!</Text>
//           <View style={styles.view1}>
//             <View style={styles.view8}>
//               <Text style={styles.text2}></Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate("RequestScreen", { state: 0 });
//                 }}
//               >
//                 <View style={styles.button1}>
//                   <Text style={styles.button1Text}>Ride with Fade</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//             <View style={{ marginRight: 15 }}>
//               <Image
//                 style={styles.image1}
//                 source={require("../assets/images/app-icon.png")}
//               />
//               <Text
//                 style={{
//                   color: colors.white,
//                   marginTop: 5,
//                   fontSize: 10,
//                   width: 96,
//                 }}
//               >
//                 Swipe right to open menu.
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View>
//           <FlatList
//             numRows={4}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={filterData}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <Pressable
//                 style={styles.card}
//                 onPress={() => navigation.navigate(item.onPress)}
//               >
//                 <View style={styles.cardHeader}>
//                   <Image style={styles.cardImage} source={item.image} />

//                   <Text style={styles.title}>{item.name}</Text>
//                 </View>
//               </Pressable>
//             )}
//           />
//         </View>
//         <View style={styles.view3}>
//           <Text style={styles.text3}>Recent Carpools</Text>
//           <View style={styles.view4}>
//             <Image
//               source={require("../assets/images/icon-clock.png")}
//               style={{ resizeMode: "contain", width: 26 }}
//             />
//             <Text style={{ marginLeft: 5, color: colors.white }}>Now</Text>
//             <Image
//               source={require("../assets/images/icon-chevron-down.png")}
//               style={{ resizeMode: "contain", width: 18, marginLeft: 15 }}
//             />
//           </View>
//         </View>
//         <View style={styles.view5}>
//           <View style={styles.view6}>
//             <View style={styles.view7}>
//               <Image
//                 source={require("../assets/images/icon-location.png")}
//                 style={{ resizeMode: "contain", width: 26, height: 26 }}
//               />
//             </View>
//             <View>
//               <Text style={{ fontSize: 18, color: colors.white }}>
//                 415 Mission Street
//               </Text>
//               <Text style={{ color: colors.grey3 }}>
//                 San Francisco, CA 94102
//               </Text>
//             </View>
//           </View>
//           <View>
//             <Image
//               source={require("../assets/images/icon-chevron-right.png")}
//               style={{ resizeMode: "contain", width: 26 }}
//             />
//           </View>
//         </View>

//         <View style={{ ...styles.view5, borderBottomWidth: 0 }}>
//           <View style={styles.view6}>
//             <View style={styles.view7}>
//               <Image
//                 source={require("../assets/images/icon-location.png")}
//                 style={{ width: 26, height: 26, resizeMode: "contain" }}
//               />
//             </View>
//             <View>
//               <Text style={{ fontSize: 18, color: colors.white }}>
//                 701 London Street
//               </Text>
//               <Text style={{ color: colors.grey3 }}>
//                 San Francisco, CA 94112
//               </Text>
//             </View>
//           </View>
//           <View>
//             <Image
//               source={require("../assets/images/icon-chevron-right.png")}
//               style={{ resizeMode: "contain", width: 26 }}
//             />
//           </View>
//         </View>

//         <Text style={styles.text4}> Around you</Text>

//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <MapView
//             ref={_map}
//             provider={PROVIDER_GOOGLE}
//             style={styles.map}
//             customMapStyle={mapStyle}
//             showsUserLocation={true}
//             followsUserLocation={true}
//             initialRegion={{
//               ...carsAround[0],
//               latitudeDelta: 0.008,
//               longitudeDelta: 0.008,
//             }}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.black,
//     paddingBottom: 30,
//     paddingTop: parameters.statusBarHeight,
//   },
//   header: {
//     backgroundColor: colors.black,
//     height: parameters.headerHeight,
//     alignItems: "center",
//   },

//   image1: {
//     height: 64,
//     width: 64,
//     marginHorizontal: 20,
//     flex: 1,
//     alignItems: "flex-start",
//     resizeMode: "cover",
//     overflow: "visible",
//   },

//   cardImage: {
//     height: 64,
//     width: 64,
//     borderWidth: 2,
//     alignSelf: "center",
//   },

//   home: {
//     backgroundColor: colors.black,
//     paddingLeft: 20,
//   },

//   text1: {
//     color: colors.white,
//     fontSize: 42,
//     paddingBottom: 20,
//     paddingTop: 20,
//   },

//   text2: {
//     color: colors.white,
//     fontSize: 16,
//   },

//   view1: {
//     flexDirection: "row",
//     flex: 1,
//     paddingTop: 30,
//   },

//   button1: {
//     height: 40,
//     width: 150,
//     backgroundColor: "rgba(255,255,255,0.21)",
//     borderRadius: 20,
//     borderColor: colors.blue,
//     borderWidth: 2,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 20,
//   },

//   button1Text: {
//     color: colors.white,
//     fontSize: 17,
//     marginTop: -2,
//   },
//   card: {
//     alignItems: "center",
//     margin: width / 120,
//     paddingTop: 15,
//   },

//   cardHeader: {
//     marginBottom: 5,
//     borderRadius: 15,
//     backgroundColor: "rgba(255,255,255,0.11)",
//     width: 80,
//     height: 110,
//     borderColor: colors.blue,

//     borderWidth: 2,
//   },

//   title: {
//     color: colors.white,
//     fontSize: 12,
//     margin: 5,
//     textAlign: "center",
//   },
//   view3: {
//     flexDirection: "row",
//     marginTop: 15,
//     height: 50,
//     backgroundColor: colors.black,
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 15,
//   },
//   text3: { fontSize: 24, color: colors.white },

//   view4: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//     backgroundColor: "rgba(255,255,255,0.21)",
//     borderColor: colors.blue,
//     borderWidth: 2,
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//     borderRadius: 20,
//     height: 32,
//   },

//   view5: {
//     flexDirection: "row",
//     alignItems: "center",
//     height: 64,
//     backgroundColor: "rgba(155,155,155,0.25)",
//     padding: 15,
//     marginVertical: 5,
//     justifyContent: "space-between",
//     marginHorizontal: 15,
//     borderBottomColor: colors.blue,
//     color: colors.white,
//     borderBottomWidth: 1,
//     flex: 1,
//   },

//   view6: {
//     alignItems: "center",
//     flex: 1,
//     flexDirection: "row",
//   },
//   view7: {
//     backgroundColor: colors.blue,
//     height: 32,
//     width: 32,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 20,
//   },

//   map: {
//     height: 400,
//     marginVertical: 0,
//     width: width,
//   },

//   text4: {
//     fontSize: 20,
//     color: colors.white,
//     marginLeft: 20,
//     marginVertical: 20,
//   },

//   icon1: { alignSelf: "flex-start", marginLeft: 15, marginTop: 15 },

//   view8: { flex: 4, marginTop: -25 },
//   carsAround: {
//     width: 28,
//     height: 14,
//   },

//   location: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: colors.black,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   view9: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: colors.black,
//   },
// });

// export default HomeScreen;

import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Screen from "../components/Screen";
import Map from "../components/Map";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
//import { GOOGLE_MAP_APIKEY } from '@env'
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Screen style={styles.screen}>
      <View style={{ backgroundColor: colors.darkblue }}>
        <Image
          source={require("../assets/images/fade-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text1}>Welcome!</Text>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  loaction: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
              navigation.navigate("MapScreen");
            }}
            minLength={2}
            fetchDetails={true}
            returnKeyType={"search"}
            onFail={(error) => console.error(error)}
            query={{
              key: GOOGLE_MAP_APIKEY,
              language: "en",
            }}
            styles={{
              container: {
                flex: 0,

                height: 220,
                width: width - 30,
              },
              textInput: {
                fontSize: 15,
              },
            }}
            enablePoweredByContainer={true}
          />
        </View>

        <NavOptions />
        <NavFavourites />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 0,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text1: {
    color: colors.snow,
    fontSize: 42,
    paddingBottom: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: colors.black,
    height: parameters.headerHeight,
    alignItems: "center",
  },

  image1: {
    height: 64,
    width: 64,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "flex-start",
    resizeMode: "cover",
    overflow: "visible",
  },

  cardImage: {
    height: 64,
    width: 64,
    borderWidth: 2,
    alignSelf: "center",
  },

  home: {
    backgroundColor: colors.black,
    paddingLeft: 20,
  },

  text1: {
    color: colors.white,
    fontSize: 42,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: "rgba(255,255,255,0.21)",
    borderRadius: 20,
    borderColor: colors.blue,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    alignItems: "center",
    margin: width / 120,
    paddingTop: 15,
  },

  cardHeader: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.11)",
    width: 80,
    height: 110,
    borderColor: colors.blue,

    borderWidth: 2,
  },

  title: {
    color: colors.white,
    fontSize: 12,
    margin: 5,
    textAlign: "center",
  },
  view3: {
    flexDirection: "row",
    marginTop: 15,
    height: 50,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  text3: { fontSize: 24, color: colors.white },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.21)",
    borderColor: colors.blue,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    height: 32,
  },

  view5: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    backgroundColor: "rgba(155,155,155,0.25)",
    padding: 15,
    marginVertical: 5,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: colors.blue,
    color: colors.white,
    borderBottomWidth: 1,
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  view7: {
    backgroundColor: colors.blue,
    height: 32,
    width: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  map: {
    height: 400,
    marginVertical: 0,
    width: width,
  },

  text4: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 20,
    marginVertical: 20,
  },

  icon1: { alignSelf: "flex-start", marginLeft: 15, marginTop: 15 },

  view8: { flex: 4, marginTop: -25 },
  carsAround: {
    width: 28,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },

  view9: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
