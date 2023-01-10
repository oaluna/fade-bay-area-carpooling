import React from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageOverlay,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "react-native-elements";

import { useDispatch } from "react-redux";

import { colors, theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    id: "0",
    image:
      "https://img.freepik.com/premium-vector/city-street-downtown-urban-panoramic-cityscape_88272-2887.jpg?w=1380",
    location: "Home",
    destination: "701 London Street, San Francisco, CA 94112",
  },
  {
    id: "1",
    image:
      "https://img.freepik.com/premium-vector/city-building-houses-with-shops-boutique-cafe-bookstore-illustration-style-background-games-mobile-applications_273525-167.jpg?w=1060",
    location: "Work",
    destination: "415 Mission Street, San Francisco, CA 94112",
  },

];

const NavFavourites = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
  };

  return (
    <KeyboardAvoidingView>
      <View style={{ marginTop: 0, height: 220 }}>
        <Text style={{ color: theme.colors.neutral[0], paddingLeft: 15, paddingTop: 15 }}>
          My Saved Locations
        </Text>
        <FlatList
        horizontal
          data={data}
          renderItem={({ item }) => (
            
              <View>
                <TouchableOpacity
                  onPress={handlePress}
                  style={{
                    flexDirection: "row",
                    alignSelf:"center",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: 270,
                    marginHorizontal: 15,
                    height: 180,
                   
                  }}
                >
                  <Image
                  blurRadius={8}
                    source={{ uri: item.image }}
                    style={{ 
                      resizeMode:"cover", 
                      width: width * 0.75, 
                      height: 180, 
                      borderRadius: 20, 
                      position:"absolute",
                      left: 0,
                      
                      }}
                  />
                <View style={{height: 180, width: width * 0.75, backgroundColor: "rgba(0,0,0,0.25)", position: "absolute", left: 0}}>
                  <View
                    style={{
                      marginVertical: 45,
                      alignSelf:"center",
                      justifyContent: "space-evenly",
                      height: 60,
                      paddingHorizontal: 15
                    }}
                  >
                    <Text
                      style={{ color: theme.colors.neutral[2], fontSize: 24}}
                    >
                      {item.location}
                    </Text>
                    <Text
                      style={{ color: theme.colors.neutral[0], fontSize: 28 }}
                    >
                      {item.destination}
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
    
          )}
          keyExtractor={(item) => item.id.toString()}
          style={{ height: 200 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});