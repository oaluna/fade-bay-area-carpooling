import React, { useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
// import { GOOGLE_MAP_APIKEY } from '@env'
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { colors, theme } from "../global/styles";
import { mapStyle } from "../global/mapStyle";
import { carsAround } from "../global/data";
import { useNavigation } from "@react-navigation/native";

const GOOGLE_MAP_APIKEY = "AIzaSyBBvc0PY-q9bEQIxlAPzmv_wp1RQsfyaLk";

const { width, height } = Dimensions.get("screen");

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 25, right: 25, bottom: 25, left: 25 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    getTravelTime();
  }, [origin, destination, GOOGLE_MAP_APIKEY]);

  const getTravelTime = async () => {
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_APIKEY}`;
    const data = await fetch(URL).then((response) => response.json());
    if (data.status !== "OK") return alert(data.error_message);
    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <TouchableOpacity
        style={{
          background: theme.colors.neutral[0],
          padding: 3,
          borderRadius: 15,
          shadowRadius: 5,
          shadowColor: theme.colors.purple[6],
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 0 },
        }}
        onPress={() => navigation.push("HomeScreen")}
      >
        <Icon
          type="antdesign"
          name="home"
          color="black"
          size={16}
          style={{
            position: "absolute",
            top: 50,
            left: 15,
            zIndex: 100,
          }}
        />
      </TouchableOpacity>

      <MapView
        origin={origin}
        destination={destination}
        style={styles.map}
        ref={mapRef}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={"standard"}
      >
        {!!origin && !!destination && (
          <MapViewDirections
            // origin={{
            //     latitude: origin?.loaction.lat,
            //     longitude: origin?.loaction.lng,
            // }}
            // destination={{
            //     latitude: destination?.loaction.lat,
            //     longitude: destination?.loaction.lng,
            // }}
            origin={origin.description}
            destination={destination.description}
            mode={"DRIVING"}
            precision={"high"}
            geodesic={true}
            apikey={GOOGLE_MAP_APIKEY}
            strokeWidth={5}
            strokeColor={theme.colors.blue[4]}
            onError={(error) => console.log("Directions error: ", error)}
          />
        )}
        {origin?.loaction && (
          <Marker
            coordinate={{
              latitude: origin?.loaction.lat,
              longitude: origin?.loaction.lng,
            }}
            title="Your Pickup Location"
            description={origin.description}
            identifier="origin"
            tracksViewChanges={true}
          >
            <Image
              source={require("../assets/images/icon-start.png")}
              style={{ height: 45, width: 45 }}
              accessibilityLabel="Start"
            />
          </Marker>
        )}
        {destination?.loaction && (
          <Marker
            coordinate={{
              latitude: destination?.loaction.lat,
              longitude: destination?.loaction.lng,
            }}
            title="Your Destination"
            description={destination.description}
            identifier="destination"
            tracksViewChanges={true}
          >
            <Image
              source={require("../assets/images/icon-end.png")}
              style={{ height: 45, width: 45 }}
              accessibilityLabel="End"
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: "relative",
    zIndex: 10,
  },
});
