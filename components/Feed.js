import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
 
  TouchableOpacity,
  View,
  Dimensions,
  
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: "0",
    image: () => <Image source={require("../assets/images/user.jpg")} style={{resizeMode:"contain", width: 36, height: 36}}/>,
    username: "johndoe",
    date: "10/10/2022",
    time: "8:00 AM",
    origin: "2245 Mission St, San Francisco, CA 94110",
    destination: "424 Jones Street, San Francisco, CA 94102",
    seatsAvailable: 3,
  },
  {
    id: "1",
    image: () => <Image source={require("../assets/images/user.jpg")} style={{resizeMode:"contain", width: 36, height: 36}}/>,
    username: "marthastewart",
    date: "12/10/2022",
    time: "9:00 AM",
    origin: "39 8th St, San Francisco, CA 94103",
    destination: "5678 Main St, San Francisco, CA 94110",
    seatsAvailable: 3,
  },
  {
    id: "2",
    image: () => <Image source={require("../assets/images/user.jpg")} style={{resizeMode:"contain", width: 36, height: 36}}/>,
    username: "crystalchandelier",
    date: "1/10/2023",
    time: "4:00 PM",
    origin: "444 Pierce Street, San Francisco, CA 94101",
    destination: "4422 3rd St, San Francisco, CA 94110",
    seatsAvailable: 3,
  },
  {
    id: "3",
    image: () => <Image source={require("../assets/images/user.jpg")} style={{resizeMode:"contain", width: 36, height: 36}}/>,
    username: "oscarluna",
    date: "1/10/2023",
    time: "10:00 AM",
    origin: "701 London Street, San Francisco, CA 94112",
    destination: "424 Jones Street, San Francisco, CA 94102",
    seatsAvailable: 3,
  },
];

const FeedItem = () => {
  const dispatch = useDispatch();

  const handlePress = () => {};

  return (
    <FlatList
        data={data}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handlePress}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              marginTop: 15,
              backgroundColor: "rgba(255,255,255,0.2)",
              borderColor: colors.black,
              borderWidth: 1,
              height: 150,
              borderRadius: 15
            }}
          >
            <Avatar
              rounded
              style={{
                borderRadius: 50,
                marginRight: 15,
                height: 35,
                width: 35,
              }}
              ImageComponent={item.image}
        
            />
            <View style={{ marginVertical: 5, width: 250 }}>
              <Text style={{ color: colors.snow, fontSize: 12, fontWeight: "800", marginVertical: 5 }}>
                Start Address: </Text><Text style={{fontSize: 18, color: colors.snow}}>{item.origin}
              </Text>
              <Text style={{ color: colors.white, fontSize: 12, marginVertical: 5 }}>
                Destination:</Text><Text style={{fontSize: 18, color: colors.snow}}>{item.destination}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: colors.aqua }} />
        )}
        vertical
      />
  )
}

const Feed = ({ navigation }) => {
 
  return (
    <React.Fragment>
      <View>
        <Text
          style={{
            color: colors.white,
            fontSize: 24,
            marginTop: 25,
       
          }}
        >
          My Scheduled Rides
        </Text>
      </View>
    
      <FeedItem />
     
    </React.Fragment>
  );
};

export default Feed;

const styles = StyleSheet.create({});
