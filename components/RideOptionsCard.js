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
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import Screen from "./Screen";
import { useSelector } from "react-redux";
import { colors } from "../global/styles"

import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
} from "../redux/slices/navSlice";

const { width, height } = Dimensions.get("screen")

const data = [
  {
    id: "0",
    title: "Start A Carpool",

    image: "../assets/images/icon-pickup.png",
  },
  {
    id: "1",
    title: "Join A Carpool",

    image: "../assets/images/icon-carpool.png",
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
    <Screen>
      <View>
        <TouchableOpacity onPress={() => navigation.push("NavigateCard")}>
          <Icon type="antdesign" name="arrowleft" color="black" size={23} />
        </TouchableOpacity>
        <Text style={{ color: colors.snow }}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelected(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <View>
                  <Text style={{ color: colors.snow }}>{item.title}</Text>
                  <Text style={{ color: colors.snow }}>
                    {travelTimeInformation?.duration?.text} Travel time
                  </Text>
                </View>
                <Text style={{ color: colors.snow }}>
                  {/* {new Intl.NumberFormat('en-us', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(
                                        travelConst(item)
                                    )} */}
                  {/* ${travelConst(item)} */}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity disabled={!selected} onPress={onChoose}>
          <Text style={{ color: colors.snow }}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
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
