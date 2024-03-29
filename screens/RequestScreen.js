import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetSectionList,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import { Avatar, Icon } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { colors, parameters, theme } from "../global/styles";
import { rideData } from "../global/data";
import { OriginContext, DestinationContext } from "../context/Context";

const { width, height } = Dimensions.get("screen");

export default function RequestScreen({ navigation, route }) {
  const { origin, dispatchOrigin } = useContext(OriginContext);
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });
  const [isOpen, setIsOpen] = useState(false);
  const { destination, dispatchDestination } = useContext(DestinationContext);
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const bottomsheet1 = useRef(1);

  const snapPoints1 = useMemo(() => ["6%", "55%"]);
  const handleSheetChange1 = () => setIsOpen(!isOpen);

  useEffect(() => {
    setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [origin, destination]);

  const renderFlatListItems = useCallback(
    ({ item }) => (
      <View>
        <View style={styles.view10}>
          <View style={styles.view11}>
            <Icon
              type="material-community"
              name="clock-time-four"
              color={theme.colors.neutral[0]}
              size={18}
            />
          </View>
          <View style={{ backgroundColor: theme.colors.purple[6] }}>
            <Text style={{ fontSize: 20, color: theme.colors.neutral[0] }}>
              {item.street}
            </Text>
            <Text style={{ color: theme.colors.neutral[0] }}>{item.area}</Text>
          </View>
        </View>
      </View>
    ),
    []
  );

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={theme.colors.neutral[0]}
            size={32}
          />
        </View>

        <View style={styles.view2}>
          <TouchableOpacity>
            <View style={styles.view3}>
              <Text
                style={{
                  color: theme.colors.neutral[0],
                  fontSize: 18,
                  alignSelf: "center",
                  width: 65,
                  marginLeft: 80,
                  marginRight: 5,
                }}
              >
                Ride with{" "}
              </Text>
              <Image
                source={require('../assets/new-logo.png')}
                style={{ resizeMode: "contain", width: 60 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view6}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DestinationScreen")}
          >
            <Text style={styles.text1}>Where from ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view4}>
          <Image
            style={[styles.image1, { marginTop: 0 }]}
            source={require("../assets/images/icon-origin.png")}
          />
        </View>

        <View style={styles.view6}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DestinationScreen")}
          >
            <Text style={styles.text1}>Where to ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view4}>
          <Image
            style={[styles.image1, { marginTop: 0 }]}
            source={require("../assets/images/icon-destination.png")}
          />
        </View>
        <MapComponent
          userOrigin={userOrigin}
          userDestination={userDestination}
        />

        <BottomSheet
          animationConfigs={useBottomSheetSpringConfigs}
          ref={bottomsheet1}
          index={route.params.state}
          snapPoints={snapPoints1}
          onChange={() => handleSheetChange1}
        >
          <BottomSheetFlatList
            data={rideData}
            keyExtractor={(item) => item.id}
            renderItem={renderFlatListItems}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <View style={styles.view10}>
                <View>
                  <Text style={styles.text9}>Saved Places</Text>
                </View>
              </View>
            }
            ListFooterComponent={
              <View>
                <View style={styles.view10}>
                  <View style={styles.view11}>
                    <Icon
                      type="material-community"
                      name="map-marker"
                      color={"crimson"}
                      size={20}
                    />
                  </View>
                  <View>
                    <Text style={styles.text9}>Set location on map</Text>
                  </View>
                </View>
                <View style={styles.view10}>
                  <View style={styles.view11}>
                    <Icon
                      type="material-community"
                      name="skip-next"
                      color={"purple"}
                      size={20}
                    />
                  </View>
                  <View>
                    <Text style={styles.text9}>Enter destination later</Text>
                  </View>
                </View>
              </View>
            }
          />
        </BottomSheet>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    justifyContent: "flex-start",
    backgroundColor: theme.colors.purple[6],

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingBottom: 15,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.colors.purple[6],
  },
  view1: {
    position: "absolute",
    top: 56,
    left: 15,
    backgroundColor: "rgba(255,255,255,0.31)",
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: theme.colors.blue[4],
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },

  view2: {
    height: 50,
    width: 300,
    flexWrap: "wrap",
    alignItems: "center",
    zIndex: 5,
    marginLeft: 15,
    marginBottom: 25,
    backgroundColor: theme.colors.purple[6],
  },

  view3: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 15,
    textAlign: "center",
    alignSelf: "center",
    height: 50,
    width: 150,
    paddingHorizontal: 15,
    zIndex: 10,
  },
  view4: {
    flexDirection: "row",
    height: 40,
    alignSelf: "center",
    backgroundColor: theme.colors.purple[6],
    left: 15,
    right: 15,
    top: 25,
    marginVertical: 10,
  },
  view5: {
    backgroundColor: "rgba(255,255,255,0.31)",
    color: theme.colors.neutral[0],
    width: 200,
    height: 40,
    paddingTop: 25,
    marginVertical: 0,

    borderRadius: 15,
    elevation: 2,
  },
  view6: {
    backgroundColor: "rgba(255,255,255,0.31)",
    width: width * 0.7,
    height: 40,
    paddingTop: 10,
    marginTop: 15,
    marginLeft: 15,

    borderRadius: 15,
    elevation: 2,
  },
  text1: {
    marginLeft: 10,
    fontSize: 16,
    color: theme.colors.neutral[0],
  },
  image1: { height: 49, width: 49, marginRight: 10, marginTop: 10 },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.31)",
    width: width * 0.7,
    height: 40,
    marginTop: 0,
    paddingLeft: 0,

    borderRadius: 15,
    elevation: 2,
  },
  view8: {
    marginLeft: 10,
  },
  view10: {
    alignItems: "center",
    backgroundColor: theme.colors.purple[6],
    flexDirection: "row",
    paddingVertical: 10,
    color: theme.colors.neutral[0],
    borderBottomColor: theme.colors.neutral[3],
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  view11: {
    backgroundColor: "rgba(255,255,255,0.71)",
    color: theme.colors.blue[4],
    borderColor: theme.colors.blue[4],
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 0,
  },

  contentContainer: {
    backgroundColor: theme.colors.purple[6],
  },
  view12: {
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue[4],
  },

  text2: {
    fontSize: 18,
    color: theme.colors.neutral[0],
  },
  text3: {
    fontSize: 16,
    color: theme.colors.neutral[0],
    fontWeight: "bold",
    marginRight: 5,
  },

  text4: { color: theme.colors.neutral[0], marginTop: 4 },

  view13: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  button1: {
    height: 40,
    width: 100,
    backgroundColor: theme.colors.blue[4],
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button2: {
    height: 50,
    backgroundColor: theme.colors.blue[4],
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 30,
  },

  button1Text: {
    fontSize: 23,
    marginTop: -2,
    color: theme.colors.neutral[0],
  },

  button2Text: {
    color: theme.colors.neutral[0],
    fontSize: 23,
    marginTop: -2,
  },

  view14: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  view15: {
    backgroundColor: "pink",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  view16: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  text5: {
    fontSize: 12,
    color: theme.colors.purple[6],
    marginLeft: 3,
    fontWeight: "bold",
    paddingBottom: 1,
  },

  view17: {},

  view18: {},

  view19: { flex: 1.7, alignItems: "flex-end" },

  icon: { paddingBottom: 2 },

  image2: { height: 60, width: 60 },

  view20: { marginRight: 10 },

  text6: {
    fontSize: 15,
    color: theme.colors.purple[6],
    fontWeight: "bold",
  },

  view21: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 15,
  },

  view22: {
    alignItems: "center",
    marginBottom: -20,
  },

  sectionHeaderContainer: {
    backgroundColor: "white",
    marginTop: 30,
    paddingLeft: 15,
  },

  text7: {
    fontSize: 28,
    color: theme.colors.purple[6],
    marginRight: 5,
  },

  text8: {
    fontSize: 15,
    color: theme.colors.neutral[3],
    textDecorationLine: "line-through",
  },

  button3: {
    height: 60,
    backgroundColor: theme.colors.purple[6],
    alignItems: "center",
    justifyContent: "center",
    width: width - 110,
    marginBottom: 10,
  },

  view23: {
    flexDirection: "row",
    // elevation:10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    height: 80,
  },

  button2Image: {
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.neutral[3],
    marginBottom: 10,
  },
  text9: { fontSize: 15, color: theme.colors.neutral[3] },

  map: {
    marginVertical: 0,
    width: width,
    zIndex: -1,
  },

  centeredView: {
    zIndex: 14,
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical: 60,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 16,
  },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
  },

  text10: { color: theme.colors.neutral[3], paddingLeft: 10 },
});
