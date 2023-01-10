import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Divider,
  Alert,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "./Screen";
import { useSelector } from "react-redux";
import { colors, theme } from "../global/styles";

import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
} from "../redux/slices/navSlice";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: "0",
    title: "Start A Carpool",
    image:
      "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813319/FadeIcons/icon-pickup_fpnloc.png",
    link: "SuccessScreen",
  },
  {
    id: "1",
    title: "Join A Carpool",
    image:
      "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-carpool_q58kxk.png",
    link: "EatsScreen",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (!origin || !destination) navigation.push("NavigateCard");
  }, [origin, destination]);

  const onChoose = () => {
    if (!selected) return Alert.alert("Please select a ride option");
    navigation.push(selected.link, {
      data: {
        ...selected,
        distance: travelTimeInformation?.distance?.text,
        time: travelTimeInformation?.duration.text,
      },
    });
  };

  return (
    <Screen style={{ marginTop: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15, height: height, width: width - 30, alignItems:"center", alignSelf:"center", justifyContent:"space-between" }}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={{
          position: "absolute",
          top: -40,
          
          paddingTop: 20,
height: height,
          width: width,
          elevation: 2,
          justifyContent:"space-between"
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 3,
          }}
        >
          <TouchableOpacity
            style={{ zIndex: 100 }}
            onPress={() => navigation.push("NavigateCard")}
          >
            <Icon
              type="antdesign"
              name="arrowleft"
              color="aqua"
              size={23}
              style={{ padding: 3 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: theme.colors.neutral[0],
            }}
          >
            Select a ride - {travelTimeInformation?.distance?.text}
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 2 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 5,
                  backgroundColor:
                    selected?.id === item.id && theme.colors.neutral[5],
                }}
                onPress={() => setSelected(item)}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: theme.colors.neutral[0],
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ color: theme.colors.neutral[0] }}>
                      <Image
                        source={require("../assets/images/icon-clock.png")}
                        style={{ resizeMode: "contain", width: 12, height: 12 }}
                      />{" "}
                      {travelTimeInformation?.duration?.text}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            width: width,
            height: 650,
            alignSelf: "center",
            marginLeft: 25,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
            style={{
              color: theme.colors.neutral[0],

              paddingVertical: 10,
              marginTop: 50,
              borderRadius: 15,
              width: width - 30,
              height: 50,
            }}
          >
            <TouchableOpacity disabled={!selected} onPress={onChoose}>
              <Text
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "center",
                  color: theme.colors.neutral[0],
                  fontSize: 24,
                }}
              >
                Choose {selected?.title}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </Screen>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    resizeMode: "contain",
    margin: 25,
  },
  card: {
    width: 100,
    height: 100,

    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
