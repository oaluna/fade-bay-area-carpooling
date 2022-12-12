import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import Screen from "./Screen";
import { useSelector } from "react-redux";
import { colors } from "../global/styles";

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
  },
  {
    id: "1",
    title: "Join A Carpool",

    image:
      "https://res.cloudinary.com/dgdnpkfun/image/upload/v1670813321/FadeIcons/icon-carpool_q58kxk.png",
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
    navigation.push("SuccessScreen", {
      data: {
        ...selected,
        distance: travelTimeInformation?.distance?.text,
        time: travelTimeInformation?.duration.text,
      },
    });
  };

  return (
    <Screen
      style={{
        backgroundColor: colors.darkblue,
        height: height,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 2,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <TouchableOpacity
          style={{ left: 10, position: "absolute", zIndex: 100 }}
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
            color: colors.white,
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
                backgroundColor: selected?.id === item.id && colors.gray3,
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
                      color: colors.white,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ color: colors.white }}>
                    {travelTimeInformation?.duration?.text} Travel time
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
        <TouchableOpacity
          style={{
            color: colors.white,
            backgroundColor: colors.darkblue,
            paddingVertical: 10,
            marginTop: -20,
            borderRadius: 15,
            borderColor: colors.aqua,
            borderWidth: 2,
            width: width - 30,
            height: 50,
          }}
          disabled={!selected}
          onPress={onChoose}
        >
          <Text
            style={{
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              color: colors.white,
              fontSize: 24,
            }}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    margin: 25,
  },
  card: {
    width: 100,
    height: 150,
    backgroundColor: "transparent",
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
