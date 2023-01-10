import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
/**
 * ? Local Imports
 */

const { width, height } = Dimensions.get("screen");

const HomeHeader = (props) => {
  const navigation = useNavigation();
  const renderTopBar = () => {
    const {
      menuImageStyle,
      menuImageSource,
      onMenuImagePress,
      profileImageStyle,
      profileImageSource,
      onProfileImagePress,
    } = props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={onMenuImagePress}>
        <Icon
              type="antdesign"
              name="arrowleft"
              color="white"
              size={20}
             
              onPress={() => navigation.goBack()}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={onProfileImagePress}
        >
          <Image
            source={profileImageSource}
            style={profileImageStyle || styles.profileImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    const {
      title = "Subscribed Rides",
      subtitle = "View who has subscribed to your rides, and the rides you're subscribed to",
      searchImageSource,
      titleTextStyle,
      searchBarStyle,
      searchInputStyle,
      subtitleTextStyle,
      contentContainerStyle,
    } = props;
    return (
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <Text style={[styles.subtitleTextStyle, subtitleTextStyle]}>
          {subtitle}
        </Text>
        <View style={[styles.searchBarStyle, searchBarStyle]}>
          <Icon type="material-community" name="map-search" style={styles.searchImageStyle} color="black" />
          <TextInput
            style={[styles.searchInputStyle, searchInputStyle]}
            placeholder="Search something"
            {...props}
          />
        </View>
      </View>
    );
  };


    return (
      <View style={[styles.container, props.style]}>
        {renderTopBar()}
        {renderContent()}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
 padding: 15,
    
      width: width,
      height: 250,
    },
    topBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    floatLeft: {
      marginRight: "auto",
    },
    floatRight: {
      marginLeft: "auto",
    },
    menuImageStyle: {
      width: 20,
      height: 20,
    },
    profileImageStyle: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    contentContainer: {
      marginTop: 12,
    },
    titleTextStyle: {
      fontSize: 46,
      color: theme.colors.neutral[0],
      fontWeight: "bold",
    },
    subtitleTextStyle: {
      fontSize: 13,
      marginTop: 5,
      fontWeight: "400",
      color:theme.colors.neutral[2]
    },
    searchBarStyle: {
      padding: 16,
      marginTop: 24,
      borderRadius: 50,
      flexDirection: "row",
      backgroundColor: theme.colors.neutral[0],
     
    },
    searchImageStyle: {
      width: 20,
      height: 20,
    },
    searchInputStyle: {
      marginLeft: 12,
      fontWeight: "500",
    },
  });

export default HomeHeader;